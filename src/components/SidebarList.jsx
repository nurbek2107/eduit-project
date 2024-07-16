"use client";
import { useState, useEffect } from "react";
import { Button } from "./ExportClients";
import Link from "next/link";

function SidebarList() {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    // Retrieve active button ID from localStorage on component mount
    const storedButtonId = localStorage.getItem("activeButtonId");
    if (storedButtonId) {
      setActiveButton(parseInt(storedButtonId));
    }
  }, []);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    // Store active button ID in localStorage
    localStorage.setItem("activeButtonId", buttonId);
  };

  return (
    <>
      <ul className="flex flex-col gap-4 w-full">
        <Button
          size="sm"
          variant="text"
          className={`flex leading-[18px] rounded-r-full text-base font-normal lowercase hover:text-white hover-bg p-0 ${activeButton === 1 ? "active" : ""
            }`}
          style={{ fontFamily: `inherit` }}
          onClick={() => handleButtonClick(1)}
        >
          <li className="w-full flex leading-[18px] rounded-r-full">
            <div className="mx-auto w-full min-h-full">
              <Link
                className="w-full flex items-center pl-[55px] p-[22px] gap-[21px] min-h-full"
                href="/admin/overview"
              >
                <svg
                  className="active-svg"
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="borderGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FD749B" />
                      <stop offset="100%" stopColor="#281AC8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z"
                    stroke="url(#borderGradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z"
                    stroke="url(#borderGradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="inline-block mr-8  span-class">overview</span>
              </Link>
            </div>
          </li>
        </Button>

        <Button
          size="sm"
          variant="text"
          className={`flex leading-[18px] rounded-r-full text-base font-normal lowercase hover:text-white hover-bg p-0 ${activeButton === 2 ? "active" : ""
            }`}
          style={{ fontFamily: `inherit` }}
          onClick={() => handleButtonClick(2)}
        >
          <li className="w-full flex leading-[18px] rounded-r-full">
            <div className="mx-auto w-full min-h-full">
              <Link
                className="w-full flex items-center pl-[55px] p-[22px] gap-[21px] min-h-full"
                href="/admin/users"
              >
                <svg
                  className="active-svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.05833 9.10833C9.98333 9.10833 11.6167 6.54167 11.6167 4.55833C11.6167 2.575 9.98333 1 8.05833 1C6.075 1 4.5 2.575 4.5 4.55833C4.5 6.54167 6.075 9.10833 8.05833 9.10833Z"
                    stroke="url(#paint0_linear_1_1091)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 8.5835L10.9167 10.3335C12.8417 10.3335 14.4167 11.9085 14.4167 13.8335L15 15.5835H1L1.58333 13.8335C1.58333 11.9085 3.15833 10.3335 5.08333 10.3335L6.25 8.5835"
                    stroke="url(#paint1_linear_1_1091)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.08301 10.3335C7.00801 11.9085 8.99134 11.9085 10.9163 10.3335"
                    stroke="url(#paint2_linear_1_1091)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_1091"
                      x1="8.41417"
                      y1="-0.276312"
                      x2="8.93521"
                      y2="14.0831"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_1091"
                      x1="8.7"
                      y1="7.48164"
                      x2="8.89761"
                      y2="19.8914"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_1091"
                      x1="8.29134"
                      y1="10.1476"
                      x2="8.30485"
                      y2="12.2422"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="inline-block mr-8 hover:text-white span-class">
                  users
                </span>{" "}
                {/* Add a custom class */}
              </Link>
            </div>
          </li>
        </Button>

        <Button
          size="sm"
          variant="text"
          className={`flex leading-[18px] rounded-r-full text-base font-normal lowercase hover:text-white hover-bg p-0 ${activeButton === 3 ? "active" : ""
            }`}
          style={{ fontFamily: `inherit` }}
          onClick={() => handleButtonClick(3)}
        >
          <li className="w-full flex leading-[18px] rounded-r-full">
            <div className="mx-auto w-full min-h-full">
              <Link
                className="w-full flex items-center justify-between pl-[55px] p-[16px] min-h-full"
                href="/admin/comments"
              >
                <div className="flex items-center gap-[21px]">
                  <svg
                    className="active-svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.09282 1H10.4177C11.5687 1 12.5105 1.94177 12.5105 3.09282V7.38309C12.5105 8.53414 11.5687 9.47591 10.4177 9.47591H6.28436L3.40674 11.9873V9.47591H2.46497C1.62785 9.47591 1 8.84806 1 8.06326V3.09282C1 1.94177 1.94177 1 3.09282 1Z"
                      stroke="url(#paint0_linear_1_1173)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.7085 10.4179C5.7085 10.9934 6.17938 11.4643 6.7549 11.5166L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6494 10.9934 15.6494 10.1563V5.18583C15.6494 4.03479 14.7076 3.09302 13.5566 3.09302H12.5102"
                      stroke="url(#paint1_linear_1_1173)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_1173"
                        x1="7.33077"
                        y1="-0.729481"
                        x2="7.92253"
                        y2="18.736"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_1173"
                        x1="11.176"
                        y1="1.3553"
                        x2="11.8675"
                        y2="20.9071"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="inline-block mr-8 hover:text-white span-class">
                    comments
                  </span>
                </div>

                <div className="mr-2 notification-number p-2 rounded-full text-white text-[11px] ">
                  190
                </div>
              </Link>
            </div>
          </li>
        </Button>

        <Button
          size="sm"
          variant="text"
          className={`flex leading-[18px] rounded-r-full text-base font-normal lowercase hover:text-white hover-bg p-0 ${activeButton === 4 ? "active" : ""
            }`}
          style={{ fontFamily: `inherit` }}
          onClick={() => handleButtonClick(4)}
        >
          <li className="w-full flex leading-[18px] rounded-r-full">
            <div className="mx-auto w-full min-h-full">
              <Link
<<<<<<< HEAD
                className="w-full flex items-center justify-between pl-[55px] p-[22px] min-h-full"
                href="/admin/competitions"
              >
                <div className="flex items-center gap-[21px]">
                  <svg
                    className="active-svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.09282 1H10.4177C11.5687 1 12.5105 1.94177 12.5105 3.09282V7.38309C12.5105 8.53414 11.5687 9.47591 10.4177 9.47591H6.28436L3.40674 11.9873V9.47591H2.46497C1.62785 9.47591 1 8.84806 1 8.06326V3.09282C1 1.94177 1.94177 1 3.09282 1Z"
                      stroke="url(#paint0_linear_1_1173)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.7085 10.4179C5.7085 10.9934 6.17938 11.4643 6.7549 11.5166L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6494 10.9934 15.6494 10.1563V5.18583C15.6494 4.03479 14.7076 3.09302 13.5566 3.09302H12.5102"
                      stroke="url(#paint1_linear_1_1173)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_1173"
                        x1="7.33077"
                        y1="-0.729481"
                        x2="7.92253"
                        y2="18.736"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_1173"
                        x1="11.176"
                        y1="1.3553"
                        x2="11.8675"
                        y2="20.9071"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="inline-block mr-8 hover:text-white span-class">
                    compitition
                  </span>
                </div>
              </Link>
            </div>
          </li>
        </Button>

        <Button
          size="sm"
          variant="text"
          className={`flex leading-[18px] rounded-r-full text-base font-normal lowercase hover:text-white hover-bg p-0 ${
            activeButton === 5 ? "active" : ""
          }`}
          style={{ fontFamily: `inherit` }}
          onClick={() => handleButtonClick(5)}
        >
          <li className="w-full flex leading-[18px] rounded-r-full">
            <div className="mx-auto w-full min-h-full">
              <Link
=======
>>>>>>> 6ff7ae7caf2ddd1f65bc5b87fb008699211d6f13
                className="w-full flex items-center pl-[55px] p-[22px] gap-[21px] min-h-full"
                href="/admin/statistics"
              >
                <svg
                  className="active-svg"
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.03418 18.3264L8.03418 6.33816"
                    stroke="url(#paint0_linear_1_826)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3037 18.3264L11.3037 3.06864"
                    stroke="url(#paint1_linear_1_826)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.76514 18.3264L4.76514 9.60769"
                    stroke="url(#paint2_linear_1_826)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.49512 18.3264L1.49512 11.7874"
                    stroke="url(#paint3_linear_1_826)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 8.24043L8.24043 1"
                    stroke="url(#paint4_linear_1_826)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_826"
                      x1="8.19159"
                      y1="11.7329"
                      x2="6.41832"
                      y2="11.7282"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_826"
                      x1="11.1463"
                      y1="9.93464"
                      x2="12.9196"
                      y2="9.93093"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_826"
                      x1="4.60773"
                      y1="13.5311"
                      x2="6.38098"
                      y2="13.5246"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_826"
                      x1="1.33771"
                      y1="14.7299"
                      x2="3.11094"
                      y2="14.7213"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_1_826"
                      x1="4.98223"
                      y1="-0.139697"
                      x2="5.39073"
                      y2="12.6866"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="inline-block mr-8 hover:text-white span-class">
                  statistics
                </span>{" "}
                {/* Add a custom class */}
              </Link>
            </div>
          </li>
        </Button>

        <Button
          size="sm"
          variant="text"
          className={`flex leading-[18px] rounded-r-full text-base font-normal lowercase hover:text-white hover-bg p-0 ${activeButton === 5 ? "active" : ""
            }`}
          style={{ fontFamily: `inherit` }}
          onClick={() => handleButtonClick(6)}
        >
          <li className="w-full flex leading-[18px] rounded-r-full">
            <div className="mx-auto w-full min-h-full">
              <Link
                className="w-full flex items-center pl-[55px] p-[22px] gap-[21px] min-h-full"
                href="/admin/settings"
              >
                <svg
                  className="active-svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8 6.59998L17 6.59998L17 2.59998L13.8 2.59999L13.8 6.59998Z"
                    stroke="url(#paint0_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3999 6.7594L15.3999 14.7594"
                    stroke="url(#paint1_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.4001 9.79993L10.6001 9.79993L10.6001 5.79993L7.40009 5.79994L7.4001 9.79993Z"
                    stroke="url(#paint2_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.7594V14.7594"
                    stroke="url(#paint3_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 1.15942V5.15942"
                    stroke="url(#paint4_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3999 1.15942V1.95942"
                    stroke="url(#paint5_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.0002 13L4.2002 13L4.20019 9.00001L1.00019 9.00001L1.0002 13Z"
                    stroke="url(#paint6_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.6001 8.99999L2.6001 1"
                    stroke="url(#paint7_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.6001 14.5999V13.7999"
                    stroke="url(#paint8_linear_1_833)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_833"
                      x1="15.24"
                      y1="7.22961"
                      x2="14.9581"
                      y2="0.147743"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_833"
                      x1="15.5573"
                      y1="11.1594"
                      x2="13.7841"
                      y2="11.1665"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_833"
                      x1="8.8401"
                      y1="10.4296"
                      x2="8.55815"
                      y2="3.34769"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_833"
                      x1="9.15741"
                      y1="12.9594"
                      x2="7.38424"
                      y2="12.9735"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_1_833"
                      x1="9.15741"
                      y1="3.35942"
                      x2="7.38424"
                      y2="3.37354"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_1_833"
                      x1="15.5573"
                      y1="1.59942"
                      x2="13.7868"
                      y2="1.66991"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_1_833"
                      x1="2.4402"
                      y1="13.6296"
                      x2="2.15825"
                      y2="6.54777"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_1_833"
                      x1="2.75751"
                      y1="5.39999"
                      x2="0.984258"
                      y2="5.40705"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_1_833"
                      x1="2.75751"
                      y1="14.2399"
                      x2="0.987036"
                      y2="14.3104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD749B" />
                      <stop offset="1" stop-color="#281AC8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="inline-block mr-8 hover:text-white span-class">
                  settings
                </span>{" "}
                {/* Add a custom class */}
              </Link>
            </div>
          </li>
        </Button>

        {/* Add more buttons here */}
      </ul>
    </>
  );
}

export default SidebarList;
