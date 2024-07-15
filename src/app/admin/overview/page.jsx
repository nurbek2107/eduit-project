import React from 'react'

function Overview() {
  return (
    <>
      <div className=" mt-8">
        <div className="block1 flex justify-around ">
          <div className="left w-[313px] border-2  h-[164px] rounded-lg ">
            <span className=" flex items-center gap-3 mt-4 ml-4  font-semibold text-[#ff9500]">
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
                    <stop offset="0%" stopColor="#ff9500" />
                    <stop offset="100%" stopColor="#ff9500" />
                  </linearGradient>
                </defs>
                <path
                  d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z"
                  stroke="#ff9500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z"
                  stroke="#ff9500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              190
            </span>
            <div className="flex justify-between m-4 mt-0 items-center">
              <div className="relative">
                <div
                  className="radial-progress text-[#ff9500] font-semibold z-10 bg-white"
                  style={{
                    "--value": 70,
                    "--size": "6rem",
                    "--thickness": "1rem",
                  }}
                  role="progressbar"
                >
                  70%
                  <div></div>
                </div>
                <div className="relative z-0">
                  <svg
                    className="-top-24 right-0 absolute"
                    width="44"
                    height="43"
                    viewBox="0 0 44 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.518059"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.5929 42.5462C34.5929 42.5462 32.8284 42.4435 36.7359 40.6932C40.6435 38.9429 47.8157 23.7466 40.0485 19.9222C32.2812 16.0979 39.5445 8.42581 36.8259 4.08661C34.1073 -0.252582 31.169 -0.628557 24.7197 3.65811C18.2704 7.94478 5.82846 -3.5045 1.47187 5.58403C-2.88472 14.6725 4.51543 3.63808 4.51543 3.63808L22.6607 9.34638L34.1047 19.3673L34.5929 42.5462Z"
                      fill="#ff9500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_910"
                        x1="12.7711"
                        y1="43.2224"
                        x2="29.3651"
                        y2="-25.6748"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="-top-16 -right-1 absolute"
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.253397"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.363836 55.6182C0.363836 55.6182 0.935032 52.4632 3.1812 59.8824C5.42737 67.3017 30.8263 83.54 39.3284 70.3892C47.8304 57.2383 59.8505 71.9953 68.1538 68.0485C76.457 64.1017 77.7722 58.8928 71.5832 46.3418C65.3942 33.7908 80.6183 18.4969 65.4426 8.66447C50.2669 -1.16797 62.0153 1.24753 62.0153 1.24753L61.938 41.3903L41.6239 59.8071L0.363836 55.6182Z"
                      fill="#ff9500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_909"
                        x1="3.42636"
                        y1="17.5375"
                        x2="122.437"
                        y2="61.5397"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="font-semibold w-32">
                <h1>Total Number Of Users</h1>
              </div>
            </div>
          </div>
          <div className="left w-[313px] border-2  h-[164px] rounded-lg ">
            <span className=" flex items-center gap-3 mt-4 ml-4  font-semibold text-[#ff9500]">
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
                    <stop offset="0%" stopColor="#ff9500" />
                    <stop offset="100%" stopColor="#ff9500" />
                  </linearGradient>
                </defs>
                <path
                  d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z"
                  stroke="#ff9500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z"
                  stroke="#ff9500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              190
            </span>
            <div className="flex justify-between m-4 mt-0 items-center">
              <div className="relative">
                <div
                  className="radial-progress text-[#ff9500] font-semibold z-10 bg-white"
                  style={{
                    "--value": 70,
                    "--size": "6rem",
                    "--thickness": "1rem",
                  }}
                  role="progressbar"
                >
                  70%
                  <div></div>
                </div>
                <div className="relative z-0">
                  <svg
                    className="-top-24 right-0 absolute"
                    width="44"
                    height="43"
                    viewBox="0 0 44 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.518059"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.5929 42.5462C34.5929 42.5462 32.8284 42.4435 36.7359 40.6932C40.6435 38.9429 47.8157 23.7466 40.0485 19.9222C32.2812 16.0979 39.5445 8.42581 36.8259 4.08661C34.1073 -0.252582 31.169 -0.628557 24.7197 3.65811C18.2704 7.94478 5.82846 -3.5045 1.47187 5.58403C-2.88472 14.6725 4.51543 3.63808 4.51543 3.63808L22.6607 9.34638L34.1047 19.3673L34.5929 42.5462Z"
                      fill="#ff9500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_910"
                        x1="12.7711"
                        y1="43.2224"
                        x2="29.3651"
                        y2="-25.6748"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="-top-16 -right-1 absolute"
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.253397"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.363836 55.6182C0.363836 55.6182 0.935032 52.4632 3.1812 59.8824C5.42737 67.3017 30.8263 83.54 39.3284 70.3892C47.8304 57.2383 59.8505 71.9953 68.1538 68.0485C76.457 64.1017 77.7722 58.8928 71.5832 46.3418C65.3942 33.7908 80.6183 18.4969 65.4426 8.66447C50.2669 -1.16797 62.0153 1.24753 62.0153 1.24753L61.938 41.3903L41.6239 59.8071L0.363836 55.6182Z"
                      fill="#ff9500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_909"
                        x1="3.42636"
                        y1="17.5375"
                        x2="122.437"
                        y2="61.5397"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="font-semibold w-32">
                <h1>Total Number Of Users</h1>
              </div>
            </div>
          </div>
          <div className="left w-[313px] border-2  h-[164px] rounded-lg ">
            <span className=" flex items-center gap-3 mt-4 ml-4  font-semibold text-[#ff9500]">
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
                    <stop offset="0%" stopColor="#ff9500" />
                    <stop offset="100%" stopColor="#ff9500" />
                  </linearGradient>
                </defs>
                <path
                  d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z"
                  stroke="#ff9500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z"
                  stroke="#ff9500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              190
            </span>
            <div className="flex justify-between m-4 mt-0 items-center">
              <div className="relative">
                <div
                  className="radial-progress text-[#ff9500] font-semibold z-10 bg-white"
                  style={{
                    "--value": 70,
                    "--size": "6rem",
                    "--thickness": "1rem",
                  }}
                  role="progressbar"
                >
                  70%
                  <div></div>
                </div>
                <div className="relative z-0">
                  <svg
                    className="-top-24 right-0 absolute"
                    width="44"
                    height="43"
                    viewBox="0 0 44 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.518059"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.5929 42.5462C34.5929 42.5462 32.8284 42.4435 36.7359 40.6932C40.6435 38.9429 47.8157 23.7466 40.0485 19.9222C32.2812 16.0979 39.5445 8.42581 36.8259 4.08661C34.1073 -0.252582 31.169 -0.628557 24.7197 3.65811C18.2704 7.94478 5.82846 -3.5045 1.47187 5.58403C-2.88472 14.6725 4.51543 3.63808 4.51543 3.63808L22.6607 9.34638L34.1047 19.3673L34.5929 42.5462Z"
                      fill="#ff9500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_910"
                        x1="12.7711"
                        y1="43.2224"
                        x2="29.3651"
                        y2="-25.6748"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="-top-16 -right-1 absolute"
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.253397"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.363836 55.6182C0.363836 55.6182 0.935032 52.4632 3.1812 59.8824C5.42737 67.3017 30.8263 83.54 39.3284 70.3892C47.8304 57.2383 59.8505 71.9953 68.1538 68.0485C76.457 64.1017 77.7722 58.8928 71.5832 46.3418C65.3942 33.7908 80.6183 18.4969 65.4426 8.66447C50.2669 -1.16797 62.0153 1.24753 62.0153 1.24753L61.938 41.3903L41.6239 59.8071L0.363836 55.6182Z"
                      fill="#ff9500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_909"
                        x1="3.42636"
                        y1="17.5375"
                        x2="122.437"
                        y2="61.5397"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="font-semibold w-32">
                <h1>Total Number Of Users</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="block2"></div>
        <div className="block3"></div>
        <div className="block4"></div>
        <div className="block5"></div>
        <div className="block6"></div>
        <div className="block7"></div>
      </div>
    </>
  );
}

export default Overview