import { CarsByBodyType } from "@/services/dealers/performance/type";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const PieChart = ({ data }: { data: CarsByBodyType[] }) => {
  if (!data) return;
  const labels = data
    .map((item) => (item._id ? item._id : null))
    .filter(Boolean);
  const count = data.map((item) => item.count).filter(Boolean);

  const options = {
    series: count,
    chartOptions: {
      labels: labels ?? [],
      // id: "salesChart",
    },

    chart: {
      // id: "salesCharts",
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    labels: labels ?? [],
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
  return data ? (
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
  ) : (
    ""
  );
};
