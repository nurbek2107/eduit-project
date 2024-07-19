"use client";

import {
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import Link from "next/link";
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Continues",
    value: "continues",
  },
  {
    label: "Ended",
    value: "ended",
  },
  {
    label: "Programming",
    value: "programming",
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
];

const TABLE_HEAD = ["Competitions", "Participants", "Status", "Started"];

const TABLE_ROWS = [
  {
    title:"Front-end Master",
    link:"frontend_master",
    type:"programming",
    participants:"256 people",
    status:"continues",
    started:"12.03.2024"
  },
  {
    title:"Back-end Master",
    link:"backend_master",
    type:"programming",
    participants:"476 people",
    status:"ended",
    started:"26.10.2023"
  },
  {
    title:"Art of Creativity",
    link:"art_of_creativity",
    type:"design",
    participants:"825 people",
    status:"ended",
    started:"30.05.2024"
  },
  {
    title:"Easy Money From Trade",
    link:"easy_money_from_trade",
    type:"marketing",
    participants:"347 people",
    status:"continues",
    started:"12.07.2024"
  },
  {
    title:"Logo Master",
    link:"logo_master",
    type:"design",
    participants:"487 people",
    status:"continues",
    started:"12.12.2024"
  },
];

function CompetitionData() {
  return (
    <section className="w-full bg-[#fff9fe] py-[45px] px-[85px]">
      <Card className="h-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Competitions list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all competitions
              </Typography>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-[600px]">
              <TabsHeader className="w-[600px]">
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({title,link,started,status,participants,type,}, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr
                      role="link"
                      href="/"
                      key={link}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <td className={`${classes}`}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="paragraph"
                              color="blue"
                              className="link-primary underline"
                            >
                              <Link href={'competitions/' + link}>{title}</Link>
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70 "
                          >
                            {participants}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none  py-1 px-2 text-xs rounded-md ${status == "continues" ? "bg-green-500/20 text-green-900":"bg-red-500/20 text-red-900"}`}
                        >
                          {status}
                        </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                      <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {started}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

export default CompetitionData;
