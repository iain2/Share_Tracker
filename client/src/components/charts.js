import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";


export const data = [
  ["Task", "Price"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
export const options = {
  title: "Intraday High",
};

const charts = ({stock}) => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}
export default charts