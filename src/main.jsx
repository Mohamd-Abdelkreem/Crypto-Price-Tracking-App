import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CoinProvider } from "./context/CoinContext.jsx";
import BasicLineChart from "./components/Chart/Chart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CoinProvider>
        <App />
        {/* <BasicLineChart /> */}
      </CoinProvider>
    </BrowserRouter>
  </StrictMode>
);
