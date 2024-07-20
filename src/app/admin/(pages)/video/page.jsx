'use client'

import { FileUpload, SteamLive } from "@/components";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const data = [
  {
    label: "Video Upload",
    value: "html",
    desc: <FileUpload />
  },
  {
    label: "Steam Live",
    value: "react",
    desc: <SteamLive />,
  },
];

function Users() {
  return (
    <>
      <Tabs id="custom-animation" value="html" className=''>
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}

export default Users;
