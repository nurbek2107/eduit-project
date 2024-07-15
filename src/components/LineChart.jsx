"use client";

import { useState, useEffect } from "react";
import { Button } from "./ExportClients";
import Link from "next/link";

import { useRef } from "react";

import Image from "next/image";
import img1 from "./img/icons/chair.png";
import img2 from "./img/icons/user-interface.png";
import img3 from "./img/icons/watch.png";
import img4 from "./img/icons/idea.png";
import img5 from "./img/icons/tshirt.png";
import img6 from "./img/icons/headphones.png";
import img7 from "./img/icons/shoes.png";

export default function S2() {
  const x = useRef();
  function para1(e) {
    if (e.target.getAttribute("data-status") == "off") {
      x.current.style.display = "flex";
      e.target.setAttribute("data-status", "on");
    } else {
      x.current.style.display = "none";
      e.target.setAttribute("data-status", "off");
    }
  }
  const x1 = useRef();
  function para2(e) {
    if (e.target.getAttribute("data-status") == "off") {
      x1.current.style.display = "flex";
      e.target.setAttribute("data-status", "on");
    } else {
      x1.current.style.display = "none";
      e.target.setAttribute("data-status", "off");
    }
  }
  return (
    <section className="w-[100%] h-[996px] lg:h-[498px] flex flex-wrap justify-between p-5 gap-4">
      <article className="w-[100%] lg:w-[49%] h-[49%] lg:h-[100%] bg-[#ff95009c] rounded-xl p-3">
        <div className="w-[100%] flex h-[15%]">
          <div className="w-[50%] h-[100%] ">
            <p className="w-[100%] text-[1.5rem] font-bold text-white ">Store Metrics</p>
            <p className="w-[100%] text-[.9rem] text-white flex gap-2 ">
              <i className="bi bi-calendar2-week-fill text-white" ></i> in last 30 days
              revenue
            </p>
          </div>
          <div className="w-[50%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
            <i
              data-status="off"
              onClick={() => para2(event)}
              className="cursor-pointer bi bi-three-dots"
            ></i>
            <ul
              ref={x1}
              className="bg-[#ff95009c] w-[180px] p-2 px-3 text-white absolute top-[70%] hidden flex-wrap text-[1rem] rounded-xl "
            >
              <li className="w-[100%] h-[30px]">action</li>
              <li className="w-[100%] h-[30px]">another</li>
              <li className="w-[100%] h-[30px] py-3 my-3 border-t border-zinc-400">
                something else here
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] h-[20%] flex gap-5 justify-around items-center">
          <div className="w-[32%] h-[80%] flex flex-wrap content-center text-white">
            <p className="w-[100%] text-white text-[1rem]">Revenue</p>
            <p className="w-[100%] text-[1.5rem] font-bold text-white">$4805</p>
            <p className="w-[100%] text-[1rem] text-white">
              <i className="bi bi-caret-up-fill"></i> $1458 Since last month
            </p>
          </div>
          <div className="w-[32%] h-[80%] flex flex-wrap content-center text-white">
            <p className="w-[100%] text-white text-[1rem]">
              Total Customers
            </p>
            <p className="w-[100%] text-[1.5rem] font-bold text-white">8.4K</p>
            <p className="w-[100%] text-[1rem] text-white">
              <i className="bi bi-caret-up-fill"></i> 12.3% Since last month
            </p>
          </div>
          <div className="w-[32%] h-[80%] flex flex-wrap content-center text-white">
            <p className="w-[100%] text-white text-[1rem]">Store Visitors</p>
            <p className="w-[100%] text-[1.5rem] font-bold text-white">59K</p>
            <p className="w-[100%] text-[1rem] text-white">
              <i className="bi bi-caret-down-fill"></i> 2.4% Since last month
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[60%] mt-5">
          <SimpleBarChart />
        </div>
      </article>
      <article className="w-[100%] lg:w-[49%] h-[49%] lg:h-[100%] bg-[#ff95009c] rounded-xl p-5">
        <div className="w-[100%] h-[15%]  flex">
          <div className="w-[50%] h-[100%] ">
            <p className="w-[100%] text-[1.5rem] font-bold text-white">Top Products</p>
            <p className="w-[100%] text-[.9rem] text-white flex gap-2">
              <i className="bi bi-calendar2-week-fill text-white" ></i> in last 30 days
              revenue
            </p>
          </div>
          <div className="w-[50%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
            <i
              data-status="off"
              onClick={() => para1(event)}
              className="cursor-pointer bi bi-three-dots"
            ></i>
            <ul
              ref={x}
              className="bg-black w-[180px] p-2 px-3 text-white absolute top-[70%] hidden flex-wrap text-[1rem] rounded-xl "
            >
              <li className="w-[100%] h-[30px]">action</li>
              <li className="w-[100%] h-[30px]">another</li>
              <li className="w-[100%] h-[30px] py-3 my-3 border-t border-zinc-400">
                something else here
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] h-[85%] overflow-hidden ">
          <ul className="capitalize w-[calc(100%+17px)] h-[100%] overflow-y-scroll flex flex-wrap gap-4 *:rounded-xl *:bg-[#ff950000] p-2">
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img1}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>light blue chair</p>
                  <p className="text-white">$240.00</p>
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$2140.00</p>
                  <p className="text-white">345 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img2}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>honor mobile 7x</p>
                  <p className="text-white">$159.00</p>
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$3570.00</p>
                  <p className="text-white">148 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img3}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>hand watch</p>
                  <p className="text-white">$250.00</p>
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$3650.00</p>
                  <p className="text-white">122 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img4}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>mini laptop</p>
                  <p className="text-white">$260.00</p>
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$6320.00</p>
                  <p className="text-white">452 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img5}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>slim-t-shirt</p>
                  <p className="text-white">$112.00</p>{" "}
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$2360.00</p>
                  <p className="text-white">572 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img6}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>smart headphones</p>
                  <p className="text-white">$360.00</p>
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$9840.00</p>
                  <p className="text-white">275 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
            <li className="flex w-[100%] h-[11vh] border-[.05px] border-[#ff95009c]">
              <div className="w-[50%] h-[100%] flex justify-start items-center">
                <figure className="w-[30%] h-[100%] flex justify-center items-center">
                  <Image
                    src={img7}
                    alt="Picture of the author"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="h-[100%] *:w-[100%] w-[60%] justify-start *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>green sports shoes</p>
                  <p className="text-white">$410.00</p>
                </div>
              </div>
              <div className="w-[50%] h-[100%] flex justify-between items-center">
                <div className="h-[100%] w-[40%] *:w-[100%] *:text-[1rem] flex flex-wrap content-center text-white">
                  <p>$3840.00</p>
                  <p className="text-white">265 sales</p>
                </div>
                <div className="w-[60%] h-[70%]">
                  <SimpleLineChart2 />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

const data2 = [
  { name: "Page A", uv: 4000, pv: 7400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 5398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 2800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 4908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 7800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 3300, amt: 2100 },
  { name: "Page H", uv: 4490, pv: 1300, amt: 2100 },
  { name: "Page L", uv: 3490, pv: 5300, amt: 2100 },
  { name: "Page M", uv: 3490, pv: 7300, amt: 2100 },
];

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

const SimpleLineChart2 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data2}>
        <Tooltip contentStyle={tooltipStyle} />

        <Line type="monotone" dataKey="pv" stroke="white" strokeWidth={5} />
      </LineChart>
    </ResponsiveContainer>
  );
};

import React from "react";
import { BarChart, Bar } from "recharts";

const SimpleBarChart = () => {
  const data = [
    { name: "Page A", uv: 4000, pv: 7400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 5398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 2800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 4908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 9800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 7800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 3300, amt: 2100 },
    { name: "Page H", uv: 4490, pv: 1300, amt: 2100 },
    { name: "Page L", uv: 3490, pv: 5300, amt: 2100 },
    { name: "Page M", uv: 3490, pv: 7300, amt: 2100 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#fff" }}
        />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="rgba(255,255,255,.5)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
const tooltipStyle = {
  backgroundColor: "#ff9500b4 ",
  border: "1px solid #ff9500b4",
  borderRadius: "5px",
  padding: "10px",
  color: "#fff",
};
