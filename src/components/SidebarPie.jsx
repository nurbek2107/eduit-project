"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js for dynamic imports
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// Dynamically import Chart from react-apexcharts
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};

export default function Example() {
  return (
    <CardBody className="mt-4 grid place-items-center px-2">
      <Chart {...chartConfig} />
    </CardBody>
  );
}
