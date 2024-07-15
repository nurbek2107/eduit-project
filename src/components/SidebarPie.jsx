// components/SidebarPie.jsx

"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "F", uv: 2390, pv: 8800, amt: 2500 },
  { name: "G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "H", uv: 4490, pv: 5300, amt: 2100 },
  { name: "L", uv: 3490, pv: 3300, amt: 2100 },
  { name: "M", uv: 3490, pv: 7300, amt: 2100 },
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ff9500b4 ",
            color: "white",
            fontWeight: "bold",
            fontSize: ".8rem",
          }}
        />

        <Line type="monotone" dataKey="pv" stroke="white" strokeWidth={5} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default function S1() {
  return (
    <section className="w-[100%] h-[666px] md:h-[444px] xl:h-[222px] flex flex-wrap p-5 gap-4 justify-around items-center">
      <article className="w-[100%] md:w-[47%] xl:w-[32%] h-[32%] md:h-[49%] xl:h-[100%] flex flex-wrap justify-center content-center  bg-[#ff95009c] rounded-xl p-5">
        <div className="w-[100%] h-[50%] flex">
          <div className="w-[50%] h-[100%] flex flex-wrap content-center">
            <p className="w-[100%] text-white text-[.9rem]">Revenue</p>
            <p className="w-[100%] text-[1.5rem] text-white font-bold">$4805</p>
            <p className="w-[100%] text-[.9rem] text-white">
              <i className="bi bi-caret-up-fill"></i> $34 Since last week
            </p>
          </div>
          <div className="w-[50%] h-[100%] flex justify-end items-center">
            <div className="cursor-pointer rounded-xl bg-[#ff9500ad] flex justify-end items-center text-[2rem] text-zinc-100 px-3">
              <i className="bi bi-wallet"></i>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50%] mt-5">
          <SimpleLineChart />
        </div>
      </article>
      <article className="w-[100%] md:w-[47%] xl:w-[32%] h-[32%] md:h-[49%] xl:h-[100%] flex flex-wrap justify-center content-center  bg-[#ff95009c] rounded-xl p-5">
        <div className="w-[100%] h-[50%] flex">
          <div className="w-[50%] h-[100%] flex flex-wrap content-center">
            <p className="w-[100%] text-white text-[.8rem]">Total Customers</p>
            <p className="w-[100%] text-[1.4rem] font-bold text-white">8.4K</p>
            <p className="w-[100%] text-[.8rem] text-white">
              <i className="bi bi-caret-up-fill"></i> 14% Since last week
            </p>
          </div>
          <div className="w-[50%] h-[100%] flex justify-end items-center">
            <div className="cursor-pointer rounded-xl bg-[rgba(255,255,255,.15)] flex justify-end items-center text-[2rem] text-zinc-100 px-3">
              <i className="bi bi-people-fill"></i>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50%] mt-5">
          <SimpleLineChart />
        </div>
      </article>
      <article className="w-[100%] md:w-[47%] xl:w-[32%] h-[32%] md:h-[49%] xl:h-[100%] flex flex-wrap justify-center content-center  bg-[#ff95009c] rounded-xl p-5">
        <div className="w-[100%] h-[50%] flex">
          <div className="w-[50%] h-[100%] flex flex-wrap content-center">
            <p className="w-[100%] text-white text-[.8rem]">Store Visitors</p>
            <p className="w-[100%] text-[1.4rem] font-bold text-white">59K</p>
            <p className="w-[100%] text-[.8rem] text-white">
              <i className="bi bi-caret-up-fill"></i> 12.4% Since last week
            </p>
          </div>
          <div className="w-[50%] h-[100%] flex justify-end items-center">
            <div className="cursor-pointer rounded-xl bg-[rgba(255,255,255,.15)] flex justify-end items-center text-[2rem] text-zinc-100 px-3">
              <i className="bi bi-wallet2"></i>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50%] mt-5 ">
          <SimpleLineChart />
        </div>
      </article>
    </section>
  );
}
