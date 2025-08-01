# 🚀 Crypto Price Tracking App

A modern, responsive cryptocurrency tracking web application built with React and Vite. Real-time data visualization with interactive charts and multi-currency support using the CoinGecko API.

![React](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.0.4-purple) ![MUI](https://img.shields.io/badge/MUI-7.2.0-blue)

## ✨ Features

- **Real-time Data**: Live cryptocurrency prices and market data
- **Interactive Charts**: Price trends, market cap, and volume visualization  
- **Multi-currency**: USD, EUR, and INR support
- **Search & Filter**: Quick cryptocurrency search with auto-suggestions
- **Responsive Design**: Optimized for all screen sizes
- **Routing**: Individual coin detail pages

## 🛠️ Tech Stack

- **React** 19.1.0 + **Vite** 7.0.4
- **Material-UI** 7.2.0 + **MUI X-Charts** 8.9.2
- **React Router DOM** 7.7.1
- **CoinGecko API** for real-time data
- **CSS Grid & Flexbox** for responsive design

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Mohamd-Abdelkreem/Crypto-Price-Tracking-App.git
cd Crypto-Price-Tracking-App

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` to view the app.

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route components (Home, Coin, NotFound)
├── context/       # React Context for state management
├── assets/        # Images and icons
└── App.jsx        # Main app component
```

## 🌐 API Integration

- **CoinGecko API** endpoints:
  - `/coins/markets` - Market data list
  - `/coins/{id}` - Individual coin details
  - `/coins/{id}/market_chart` - Historical data for charts

## 📱 Responsive Design

<<<<<<< HEAD
- **Desktop**: Multi-column charts and full navigation
- **Tablet**: Adapted grid layouts with touch-friendly interface
- **Mobile**: Single column layout with collapsible menu

## 👨‍💻 Developer

**Mohamed Abdel Kareem**  
🌐 [GitHub](https://github.com/Mohamd-Abdelkreem)

## � License

MIT License - see [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository if you found it helpful!**
=======
The application is fully responsive with optimized layouts for:

### Desktop (≥1024px)
- Multi-column layout for charts and statistics
- Full navigation menu
- Optimal spacing and typography

### Tablet (768px - 1023px)
- Adapted grid layouts
- Responsive charts
- Touch-friendly interface

### Mobile (≤767px)
- Single column layouts
- Collapsible navigation menu
- Optimized touch targets
- Vertical chart stacking

### Small Mobile (≤480px)
- Compact design
- Vertical stat cards
- Minimal spacing
- Single chart per row

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark gradient background (#111113 to #232526)
- **Secondary**: Blue accent (#1976d2)
- **Text**: White (#ffffff) with gray variants
- **Cards**: Dark theme (#2c2c2e)

### Typography
- **Font Family**: Roboto Mono (monospace)
- **Responsive Font Sizes**: Scales from 0.75rem to 3rem
- **Font Weights**: 100-700 range

### UI Components
- **Gradient Backgrounds**: Linear gradients for visual appeal
- **Rounded Corners**: 8px border radius for modern look
- **Hover Effects**: Smooth transitions and color changes
- **Loading States**: Proper feedback for async operations

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
>>>>>>> 58335880d920726141d12e44eee5174afbe68a96

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository if you found it helpful!**

![GitHub stars](https://img.shields.io/github/stars/Mohamd-Abdelkreem/Crypto-Price-Tracking-App?style=social)
![GitHub forks](https://img.shields.io/github/forks/Mohamd-Abdelkreem/Crypto-Price-Tracking-App?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Mohamd-Abdelkreem/Crypto-Price-Tracking-App?style=social)
