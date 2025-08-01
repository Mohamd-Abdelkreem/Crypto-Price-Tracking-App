import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { useState, useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  function handleOnChangeCurrency(e) {
    const currencyValue = e.target.value;
    if (currencyValue === "usd") {
      setCurrency({ name: "usd", symbol: "$" });
    } else if (currencyValue === "eur") {
      setCurrency({ name: "eur", symbol: "€" });
    } else if (currencyValue === "inr") {
      setCurrency({ name: "inr", symbol: "₹" });
    }
  }

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`links ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="auth-buttons">
        <select className="currency-select" onChange={handleOnChangeCurrency}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="signup">
          Sign Up <img src={arrow} alt="Arrow" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
