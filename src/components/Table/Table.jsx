import "./Table.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Table({ allSearchedCoins }) {
  const { allCoins , currency } = useContext(CoinContext);
  function getArrayToRender() {
    if (allSearchedCoins.length > 0) {
      return allSearchedCoins;
    }
    return allCoins;
  }
  const coinsToRender = getArrayToRender();

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Crypto</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data, replace with real data */}
          {coinsToRender.slice(0, 10).map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td className="coin-name">
                <Link
                  to={`/coin/${coin.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={coin.image} alt={coin.name} className="coin-image" />
                  {coin.name} ({coin.symbol.toUpperCase()})
                </Link>
              </td>
              <td>{currency.symbol}{coin.current_price.toLocaleString()}</td>
              <td>{currency.symbol}{coin.market_cap.toLocaleString()}</td>
              <td
                style={{
                  color:
                    coin.price_change_percentage_24h > 0
                      ? "#4caf50"
                      : "#f44336",
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
