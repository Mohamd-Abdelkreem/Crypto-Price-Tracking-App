# 🚀 Crypto Price Tracking App

A modern, responsive cryptocurrency tracking web application built with React and Vite. This application provides real-time cryptocurrency data, interactive charts, and multi-currency support using the CoinGecko API.

![Crypto App Banner](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.0.4-purple) ![MUI](https://img.shields.io/badge/MUI-7.2.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### 🏠 Home Page
- **Hero Section**: Welcome message with search functionality
- **Cryptocurrency Search**: Real-time search with auto-suggestions using HTML5 datalist
- **Top 10 Cryptocurrencies Table**: Displays rank, name, price, market cap, and 24h change
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-currency Support**: USD, EUR, and INR currency options

### 🪙 Individual Coin Page
- **Detailed Coin Information**: Large coin image, name, and current statistics
- **Interactive Charts**: Three types of data visualization:
  - Price trends (last 10 days)
  - Market cap history
  - Trading volume data
- **Real-time Statistics**:
  - Market cap rank
  - Current price in selected currency
  - Market capitalization
  - 24-hour high/low prices
- **Responsive Charts**: Single column layout on mobile devices

### 🎯 Key Features
- **Multi-currency Support**: Switch between USD ($), EUR (€), and INR (₹)
- **Real-time Data**: Live cryptocurrency data from CoinGecko API
- **Interactive Charts**: Built with MUI X-Charts for smooth data visualization
- **Responsive Design**: Mobile-first approach with multiple breakpoints
- **Search functionality**: Quick search through all available cryptocurrencies
- **Routing**: Client-side routing with React Router DOM
- **Error Handling**: 404 page for invalid routes
- **Loading States**: Proper loading indicators for better UX

## 🛠️ Tech Stack

### Frontend
- **React** `19.1.0` - JavaScript library for building user interfaces
- **React Router DOM** `7.7.1` - Declarative routing for React
- **Vite** `7.0.4` - Next generation frontend tooling

### UI & Styling
- **Material-UI (MUI)** `7.2.0` - React UI framework
- **MUI X-Charts** `8.9.2` - Advanced charting components
- **CSS3** - Custom responsive styling with Grid and Flexbox
- **Google Fonts** - Roboto Mono font family

### State Management
- **React Context API** - Global state management for currency and coin data
- **React Hooks** - useState, useEffect, useContext for component logic

### API & Data
- **CoinGecko API** - Real-time cryptocurrency data
- **Fetch API** - HTTP client for API requests

### Development Tools
- **ESLint** `9.30.1` - Code linting and formatting
- **Vite Plugins** - React support and development tools

## 📂 Project Structure

```
crypto-currency/
├── public/
│   └── wallet.svg
├── src/
│   ├── assets/
│   │   ├── arrow_icon.png
│   │   ├── logo.png
│   │   ├── delete.png
│   │   ├── not_tick.png
│   │   ├── tick.png
│   │   └── todo_icon.png
│   ├── components/
│   │   ├── Chart/
│   │   │   ├── Chart.jsx
│   │   │   ├── Chart.css
│   │   │   └── theme.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Table/
│   │       ├── Table.jsx
│   │       └── Table.css
│   ├── context/
│   │   └── CoinContext.jsx
│   ├── pages/
│   │   ├── Coin/
│   │   │   ├── Coin.jsx
│   │   │   └── Coin.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   └── NotFound/
│   │       ├── NotFound.jsx
│   │       └── NotFound.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohamd-Abdelkreem/Crypto-Price-Tracking-App.git
   cd Crypto-Price-Tracking-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 API Integration

This application uses the **CoinGecko API** for cryptocurrency data:

### Endpoints Used:
- `GET /coins/markets` - Get list of coins with market data
- `GET /coins/{id}` - Get detailed coin information
- `GET /coins/{id}/market_chart` - Get historical market data

### API Features:
- ✅ Real-time price updates
- ✅ Multi-currency support (USD, EUR, INR)
- ✅ Historical data for charts
- ✅ Market statistics and rankings
- ✅ No authentication required for demo usage

## 🔄 State Management

### Context API Structure
```javascript
CoinContext = {
  allCoins: [], // Array of all cryptocurrencies
  currency: { name: "usd", symbol: "$" }, // Current selected currency
  setCurrency: function // Function to update currency
}
```

### Component State
- Local state for search functionality
- Loading states for API requests
- Form input handling
- Mobile menu toggle states

## 📊 Chart Implementation

### Chart Types
1. **Price Chart** - Shows price trends over last 10 days
2. **Market Cap Chart** - Displays market capitalization history
3. **Volume Chart** - Trading volume data visualization

### Chart Features
- **Responsive Design**: Adapts to container width
- **Custom Styling**: White lines and labels for dark theme
- **Data Formatting**: Proper currency formatting
- **Loading States**: Placeholder content while data loads

## 🚨 Error Handling

### API Error Handling
- Try-catch blocks for all API calls
- Console error logging
- Fallback "N/A" values for missing data

### Route Protection
- 404 NotFound page for invalid routes
- Proper navigation structure

### Data Validation
- Null checking with optional chaining (`?.`)
- Array length validation before rendering
- Type checking for API responses

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



---

⭐ **Star this repository if you found it helpful!**

![GitHub stars](https://img.shields.io/github/stars/Mohamd-Abdelkreem/Crypto-Price-Tracking-App?style=social)
![GitHub forks](https://img.shields.io/github/forks/Mohamd-Abdelkreem/Crypto-Price-Tracking-App?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Mohamd-Abdelkreem/Crypto-Price-Tracking-App?style=social)
