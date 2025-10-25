# 📈 Trade For You - Real-Time Stock Tracking Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TradingView](https://img.shields.io/badge/TradingView-Charts-00D4AA?style=flat-square)](https://www.tradingview.com/)
[![Finnhub](https://img.shields.io/badge/Finnhub-API-0057FF?style=flat-square)](https://finnhub.io/)

**Trade For You** is a cutting-edge real-time stock tracking platform that empowers investors with live market data, personalized watchlists, and the latest news for each stock. Built with Next.js 15 and powered by TradingView charts and Finnhub API, it delivers institutional-grade market insights to retail investors.

---

## ✨ Key Features

### 📊 **Real-Time Stock Tracking**

- **Live Price Updates**: Monitor real-time stock prices, market cap, P/E ratios, and percentage changes
- **TradingView Integration**: Professional-grade interactive charts with candlestick, baseline, and technical analysis views
- **Market Overview**: Comprehensive dashboard with market heatmaps, top movers, and sector performance
- **Stock Search**: Intelligent search with autocomplete across thousands of stocks, ETFs, and securities

### 📰 **Latest Stock News**

- **Personalized News Feed**: Get the latest news articles for stocks in your watchlist
- **Company-Specific Updates**: Stay informed with news filtered by individual stock symbols
- **Daily News Summaries**: Receive AI-powered daily email digests with market news and insights
- **Multi-Source Aggregation**: News from multiple financial sources, deduplicated and ranked by relevance

### 📋 **Smart Watchlist Management**

- **Custom Watchlists**: Track your favorite stocks with one-click add/remove functionality
- **Real-Time Updates**: Watchlist automatically updates with current prices and changes
- **Persistent Storage**: MongoDB-backed watchlist synced across devices
- **Quick Actions**: Star/unstar stocks directly from search results and detail pages

### 🔔 **Price Alerts & Notifications**

- **Customizable Alerts**: Set upper and lower price thresholds for any stock
- **Email Notifications**: Receive instant email alerts when price targets are hit
- **Alert Management**: View, edit, and delete alerts from your personalized dashboard

### 🎨 **User Experience**

- **Dark Mode Interface**: Sleek, eye-friendly dark theme optimized for extended trading sessions
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Personalized Onboarding**: AI-generated welcome emails based on investment goals and risk tolerance
- **Authentication**: Secure email/password authentication powered by Better Auth

### 🤖 **AI-Powered Features**

- **Personalized Welcome Emails**: Custom onboarding emails generated using Gemini AI based on user profile
- **News Summarization**: Daily AI-powered summaries of market news and stock updates
- **Smart Symbol Mapping**: Intelligent mapping between Finnhub and TradingView symbol formats

---

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15** - React framework with App Router and Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom dark theme
- **Radix UI** - Accessible component primitives
- **TradingView Widgets** - Professional financial charts and visualizations

### **Backend & APIs**

- **Next.js API Routes** - Serverless API endpoints
- **Finnhub API** - Real-time stock data, company profiles, and market news
- **Inngest** - Background jobs and scheduled tasks (daily news summaries)
- **Gemini AI** - Natural language processing for personalized content

### **Database & Authentication**

- **MongoDB** - Document database for users, watchlists, and alerts
- **Mongoose** - ODM for MongoDB with schema validation
- **Better Auth** - Modern authentication library with email/password support

### **Developer Tools**

- **ESLint** - Code linting with Next.js and TypeScript rules
- **Nodemailer** - Email delivery for notifications and summaries

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- MongoDB database (local or MongoDB Atlas)
- Finnhub API key ([Get one free](https://finnhub.io/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hongminglow/stock-trading-app.git
   cd stock-trading-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # Finnhub API
   FINNHUB_API_KEY=your_finnhub_api_key
   NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

   # Better Auth
   BETTER_AUTH_SECRET=your_secret_key_here
   BETTER_AUTH_URL=http://localhost:3000

   # Email Configuration (Optional)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password

   # Inngest (Optional - for background jobs)
   INNGEST_EVENT_KEY=your_inngest_key
   INNGEST_SIGNING_KEY=your_signing_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 Features Walkthrough

### 1. **Home Dashboard**

View real-time market overview with:

- Market performance heatmap
- Top gainers and losers
- Latest market news timeline
- Sector-wise stock listings

### 2. **Stock Search**

- Search thousands of stocks by symbol or company name
- View real-time prices and changes in search results
- Quick add to watchlist from search interface

### 3. **Stock Detail Pages**

Navigate to `/stocks/[SYMBOL]` to see:

- Live price and company information
- Multiple chart types (candlestick, baseline, area)
- Technical analysis indicators
- Company profile and financial metrics
- Add to watchlist button

### 4. **Watchlist**

Access your personalized watchlist at `/watchlist`:

- Table view with current prices and changes
- Sortable columns (price, change %, market cap)
- Quick remove functionality
- Latest news for watchlist stocks
- Create price alerts

### 5. **Price Alerts**

Set up and manage alerts:

- Upper/lower threshold alerts
- Visual alert cards with current price vs. threshold
- Edit and delete existing alerts
- Email notifications when alerts trigger

---

## 📊 API Integration

### Finnhub Stock Data

```typescript
// Fetch real-time stock news
export async function getNews(symbols?: string[]): Promise<MarketNewsArticle[]>

// Search stocks with autocomplete
export const searchStocks = cache(async (query?: string): Promise<StockWithWatchlistStatus[]>)
```

### TradingView Charts

The app integrates multiple TradingView widgets:

- Market Overview
- Stock Heatmap
- Advanced Charts (Candlestick, Baseline)
- Technical Analysis
- Company Profile & Financials

---

## 🔐 Authentication Flow

1. **Sign Up**: Create account with email, password, and investment profile
2. **Personalized Welcome**: Receive AI-generated welcome email
3. **Sign In**: Secure session management with Better Auth
4. **User Dashboard**: Access personalized watchlist and alerts

---

## 📧 Email Features

### Welcome Email

- Personalized introduction based on user's investment goals, risk tolerance, and preferred industry
- AI-generated content using Gemini

### Daily News Summary

- Scheduled daily at 12:00 PM (configurable via Inngest cron)
- Aggregates news for stocks in user's watchlist
- AI-powered summarization of key market events
- Formatted HTML email with stock-specific insights

---

## 🎨 Design Philosophy

- **Dark-First Design**: Professional dark theme reducing eye strain during market hours
- **Information Density**: Maximum data visibility without clutter
- **Responsive Layout**: Optimized for all screen sizes
- **Accessibility**: Keyboard navigation and ARIA labels throughout
- **Performance**: Server-side rendering and React Server Components for optimal speed

---

## 📈 Roadmap

- [ ] Portfolio tracking with buy/sell transactions
- [ ] Advanced charting with custom indicators
- [ ] Social features (share watchlists, follow traders)
- [ ] Options and futures data
- [ ] Mobile native apps (iOS & Android)
- [ ] Real-time alerts via WebSocket
- [ ] Multi-currency support

---

## 🙏 Acknowledgments

- [TradingView](https://www.tradingview.com/) for chart widgets
- [Finnhub](https://finnhub.io/) for stock market data API
- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for seamless deployment

---

**Built with ❤️ for traders and investors**
