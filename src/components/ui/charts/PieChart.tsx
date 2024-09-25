import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const options = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
  },

  chart: {
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  labels: [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ],
  colors: ["#0158AF", "#4682B4", "#5F9EA0", "#87CEEB", "#B0C4DE"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const PieChart = () => {
  return (
    <>
      <div id="chart">
        <ApexCharts
          type="donut"
          options={options as ApexOptions}
          series={options.series}
          width={"100%"}
          height={400}
        />
      </div>
      <div id="html-dist"></div>
    </>
  );
};
