import "./Chart.css";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import theme from "./theme"; // Import the custom theme
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { lineElementClasses } from "@mui/x-charts/LineChart";

export default function BasicLineChart({ historicalData, label }) {
  // Get the last 10 days of data
  const last10Days = historicalData?.[label]?.slice(-11) || [];

  const xAxisData = last10Days.map((item) => {
    const date = new Date(item[0]);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  const yAxisData = last10Days.map((item) => item[1]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 2,
          height: "300px",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {xAxisData &&
        yAxisData &&
        xAxisData.length > 0 &&
        yAxisData.length > 0 ? (
          <LineChart
            xAxis={[
              {
                data: xAxisData,
                scaleType: "point",
                valueFormatter: (value) => value.toString(),
              },
            ]}
            yAxis={[
              {
                valueFormatter: (value) => `$${value.toLocaleString()}`,
              },
            ]}
            series={[
              {
                data: yAxisData,
                color: "white", // Change line color to white
              },
            ]}
            height={300}
            sx={{
              width: "100%",
              maxWidth: "600px",
              [`.${lineElementClasses.root}`]: {
                stroke: "white", // Change line color to white
                strokeWidth: 2,
              },
              [`.${axisClasses.root}`]: {
                [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                  stroke: "white", // Change axis line and tick color to white
                  strokeWidth: 1,
                },
                [`.${axisClasses.tickLabel}`]: {
                  fill: "white", // Change axis tick label color to white
                },
              },
            }}
          />
        ) : (
          <div>Loading chart...</div>
        )}
      </Box>
    </ThemeProvider>
  );
}
