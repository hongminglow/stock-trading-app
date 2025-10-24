import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="Main Logo"
            width={140}
            height={32}
          />
        </Link>
        <nav className="hidden sm:block">{/* NavItem */}</nav>
      </div>
    </header>
  );
};

export default Header;
