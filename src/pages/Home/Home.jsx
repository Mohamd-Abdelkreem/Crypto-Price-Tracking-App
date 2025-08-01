import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { useState } from "react";
function Home() {
  const { allCoins } = useContext(CoinContext);
  const [allSearchedCoins, setAllSearchedCoins] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function filterSearchInput() {
    if (inputValue.trim() === "") {
      setAllSearchedCoins([]);
      return allCoins;
    }
    const filteredArray = allCoins.filter((element) =>
      element.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setAllSearchedCoins(filteredArray);
    return filteredArray;
  }
  function handleChangeInputForm(e) {
    const value = e.target.value;
    setInputValue(value);
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    const filteredCoins = filterSearchInput();
    if (filteredCoins.length === 0) {
      alert("No coins found with that name.");
    }
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Largest Crypto Marketplace</h1>
        <p className="hero-description">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form className="hero-form" onSubmit={handleSubmitForm}>
          <input
            list="crypto-list"
            onChange={handleChangeInputForm}
            type="text"
            placeholder="Search for cryptos..."
            value={inputValue}
          />
          <datalist id="crypto-list">
            {allCoins.map((coin) => (
              <option key={coin.id} value={coin.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>

      <Table allSearchedCoins={allSearchedCoins} />
    </div>
  );
}

export default Home;
