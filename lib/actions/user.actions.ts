"use server";

import { connectToDatabase } from "@/database/mongoose";

type UserDocument = {
  _id?: { toString(): string } | null;
  id?: string | null;
  email?: string | null;
  name?: string | null;
  country?: string | null;
};

export type UserForNewsEmail = {
  id: string;
  email: string;
  name: string;
  country?: string | null;
};

const hasEmailAndName = (
  user: UserDocument
): user is UserDocument & { email: string; name: string } =>
  Boolean(user.email && user.name);

export const getAllUsersForNewsEmail = async (): Promise<
  UserForNewsEmail[]
> => {
  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("Mongoose connection not connected");

    const users = await db
      .collection<UserDocument>("user")
      .find(
        { email: { $exists: true, $ne: null } },
        { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } }
      )
      .toArray();

    return users.filter(hasEmailAndName).map((user) => {
      const email = user.email ?? "";
      const name = user.name ?? "";

      return {
        id: user.id || user._id?.toString() || "",
        email,
        name,
        country: user.country ?? null,
      } satisfies UserForNewsEmail;
    });
  } catch (e) {
    console.error("Error fetching users for news email:", e);
    return [];
  }
};
