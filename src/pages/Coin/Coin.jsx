import "./Coin.css";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { useParams } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
function Coin() {
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    async function fetchCoinData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-duvwNLwbA9YdyKGhsLShLfDp",
        },
      };

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then((res) => res.json())
        .then((res) => {
          setCoinData(res);
        })
        .catch((err) => console.error(err));
    }

    async function fetchHistoricalData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-duvwNLwbA9YdyKGhsLShLfDp",
        },
      };

      fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily&precision=5`,
        options
      )
        .then((res) => res.json())
        .then((res) => setHistoricalData(res))
        .catch((err) => console.error(err));
    }

    fetchCoinData();
    fetchHistoricalData();
  }, [coinId, currency]);

  return (
    <div className="coin-page">
      <div className="coin-info">
        <img src={coinData?.image?.large} alt="Coin" />
        <h1>{coinData?.name}</h1>
      </div>

      <div className="chart-container">
        <div>
          <Chart historicalData={historicalData} label="prices" />
          <span>-Prices</span>
        </div>
        <div>
          <Chart historicalData={historicalData} label="market_caps" />
          <span>-Market Caps</span>
        </div>
        <div>
          <Chart historicalData={historicalData} label="total_volumes" />
          <span>-Total Volumes</span>
        </div>
      </div>

      <div className="coin-stats">
        <div>
          <p>Crypto Market Rank</p>
          <p>#{coinData?.market_cap_rank || "N/A"}</p>
        </div>

        <div>
          <p>Current Price</p>
          <p>
            {currency.symbol}
            {coinData?.market_data?.current_price?.[
              currency.name
            ]?.toLocaleString() || "N/A"}
          </p>
        </div>

        <div>
          <p>Market cap</p>
          <p>
            {currency.symbol}
            {coinData?.market_data?.market_cap?.[
              currency.name
            ]?.toLocaleString() || "N/A"}
          </p>
        </div>

        <div>
          <p>24 Hour high</p>
          <p>
            {currency.symbol}
            {coinData?.market_data?.high_24h?.[
              currency.name
            ]?.toLocaleString() || "N/A"}
          </p>
        </div>

        <div>
          <p>24 Hour low</p>
          <p>
            {currency.symbol}
            {coinData?.market_data?.low_24h?.[
              currency.name
            ]?.toLocaleString() || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
