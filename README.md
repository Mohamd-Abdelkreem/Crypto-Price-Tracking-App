# 🚀 Crypto Price Tracking App

A modern, responsive cryptocurrency tracking web application built with React and Vite. This application provides real-time cryptocurrency data, interactive charts, and multi-currency support using the CoinGecko API.

![Crypto App Banner](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.0.4-purple) ![MUI](https://img.shields.io/badge/MUI-7.2.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [API Integration](#-api-integration)
- [Responsive Design](#-responsive-design)
- [Scripts](#-scripts)
- [Developer](#-developer)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🌟 Features

- **Real-time Cryptocurrency Data**: Live prices, market cap, and 24h changes
- **Interactive Charts**: Price trends, market cap, and volume data visualization
- **Multi-currency Support**: USD, EUR, and INR currency options
- **Search Functionality**: Real-time search with auto-suggestions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Top 10 Cryptocurrencies Table**: Displays rank, name, price, and market data

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| **React** | `19.1.0` | JavaScript library for building user interfaces |
| **Vite** | `7.0.4` | Next generation frontend tooling |
| **Material-UI (MUI)** | `7.2.0` | React UI framework |
| **MUI X-Charts** | `8.9.2` | Advanced charting components |
| **React Router DOM** | `7.7.1` | Declarative routing for React |
| **CoinGecko API** | - | Real-time cryptocurrency data |

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

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
npm run build
npm run preview
```

## 📂 Project Structure

```
crypto-currency/
├── public/
│   └── wallet.svg
├── src/
│   ├── components/
│   │   ├── Chart/
│   │   │   ├── Chart.css
│   │   │   ├── Chart.jsx
│   │   │   └── theme.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   └── Table/
│   │       ├── Table.css
│   │       └── Table.jsx
│   ├── context/
│   │   └── CoinContext.jsx
│   ├── pages/
│   │   ├── Coin/
│   │   │   ├── Coin.css
│   │   │   └── Coin.jsx
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   └── NotFound/
│   │       ├── NotFound.css
│   │       └── NotFound.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### Home Page
- **Hero Section**: Search functionality with real-time suggestions
- **Top 10 Cryptocurrencies Table**: Displays rank, name, price, and market data
- **Real-time Price Updates**: Live data refresh for current market conditions

### Individual Coin Page
- **Detailed Coin Information**: Comprehensive statistics and market data
- **Interactive Charts**: Price, market cap, and volume data visualization
- **24-hour High/Low Prices**: Current trading range information

## 🌐 API Integration

This application uses the **CoinGecko API** for:

- ✅ Real-time cryptocurrency market data
- ✅ Historical price data for charts
- ✅ Multi-currency support (USD, EUR, INR)
- ✅ No authentication required
- ✅ Free tier available

## 📱 Responsive Design

The application is fully responsive and optimized for different screen sizes:

| Device Type | Screen Size | Layout Features |
|-------------|-------------|-----------------|
| **Desktop** | ≥1024px | Multi-column layout with full navigation |
| **Tablet** | 768px-1023px | Adapted grid layouts |
| **Mobile** | ≤767px | Single column, touch-friendly interface |

## � Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## �👨‍💻 Developer

**Mohamed Abdel Kareem**

- 🌐 **GitHub**: [@Mohamd-Abdelkreem](https://github.com/Mohamd-Abdelkreem)
- 📧 **Project Repository**: [Crypto-Price-Tracking-App](https://github.com/Mohamd-Abdelkreem/Crypto-Price-Tracking-App)

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for the comprehensive cryptocurrency API
- [Material-UI](https://mui.com/) for the beautiful React components
- [React](https://reactjs.org/) & [Vite](https://vitejs.dev/) for the powerful development framework

---

<div align="center">
  <p>⭐ If you found this project helpful, please give it a star! ⭐</p>
  <p>Made with ❤️ by Mohamed Abdel Kareem</p>
</div>
