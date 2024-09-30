import { CarsByBodyType } from "@/services/dealers/performance/type";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";
import { parseISO, getMonth } from "date-fns";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function BarGraph({ data }: { data: CarsByBodyType[] }) {
  if (!data) return;
  const monthlyCounts = Array(12).fill(0);

  // Extract all procuredDates and group them by month
  data?.forEach((item) => {
    item.procuredDates.forEach((dateString) => {
      const date = parseISO(dateString);
      const monthIndex = getMonth(date); // getMonth returns 0 for January, 11 for December
      monthlyCounts[monthIndex] += 1; // Increment the count for the respective month
    });
  });

  const state = {
    series: [
      {
        name: "Sales",
        data: monthlyCounts,
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "Amount in ₹",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: ApexTooltipY) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options as ApexOptions}
          series={state.series}
          type="bar"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
