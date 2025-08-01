import { createContext, useEffect, useState } from "react";

const CoinContext = createContext();
function CoinProvider({ children }) {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
  async function fetchCoins() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-duvwNLwbA9YdyKGhsLShLfDp",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setAllCoins(res);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchCoins();
  }, [currency]);
  const contextValue = {
    allCoins,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>
  );
}

export { CoinContext, CoinProvider };
