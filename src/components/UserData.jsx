"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const TABS = [
  { label: "All", value: "all" },
  { label: "Payed", value: "payed" },
  { label: "Did not payed", value: "did-not-payed" },
];

const TABLE_HEAD = ["Member", "Course", "Status", "Employed", "Actions"];

const initialRows = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    org: "Frontend React JS",
    online: true,
    date: "23/04/18",
  },
  // Add other initial rows here
];

function UserData() {
  const [rows, setRows] = useState(initialRows);
  const [filteredRows, setFilteredRows] = useState(initialRows);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUser, setNewUser] = useState({
    img: "",
    name: "",
    email: "",
    org: "",
    online: false,
    date: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUser({
      ...newUser,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddUser = () => {
    if (
      !newUser.img ||
      !newUser.name ||
      !newUser.email ||
      !newUser.org ||
      !newUser.date
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedRows = [...rows, newUser];
    setRows(updatedRows);
    setFilteredRows(updatedRows);
    setOpenDialog(false);
    setNewUser({
      img: "",
      name: "",
      email: "",
      org: "",
      online: false,
      date: "",
    });
  };

  const handleDeleteUser = (email) => {
    const updatedRows = rows.filter((row) => row.email !== email);
    setRows(updatedRows);
    setFilteredRows(updatedRows);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    if (searchValue === "") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(
        rows.filter(
          (row) =>
            row.name.toLowerCase().includes(searchValue) ||
            row.email.toLowerCase().includes(searchValue) ||
            row.org.toLowerCase().includes(searchValue)
        )
      );
    }
  };

  return (
    <section className="w-full py-[45px] px-[85px]">
      <Card className="h-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => setOpenDialog(true)}
            >
              Add Member
            </Button>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="md:w-max w-[500px]">
              <TabsHeader className="w-[500px]">
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="md:w-72 flex gap-2">
              <div className="w-[300px] flex gap-2">
                <div className="w-full">
                  <Input
                    label="Search"
                    className="w-full"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 ">
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
                      {index !== TABLE_HEAD.length - 1 && (
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
              {filteredRows.map(
                ({ img, name, email, org, online, date }, index) => {
                  const isLast = index === filteredRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr
                      key={email}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <td className={`${classes}`}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {org}
                        </Typography>
                      </td>
                      <td className={`${classes}`}>
                        <Chip
                          className="flex flex-col items-center justify-center"
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "pause"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          variant="text"
                          color="red"
                          onClick={() => handleDeleteUser(email)}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </Button>
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
            Total {filteredRows.length} Members
          </Typography>
        </CardFooter>
      </Card>

      {/* Add Member Dialog */}
      <Dialog open={openDialog} handler={() => setOpenDialog(false)}>
        <DialogHeader>Add New Member</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              label="Image URL"
              name="img"
              value={newUser.img}
              onChange={handleInputChange}
            />
            <Input
              label="Name"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
            <Input
              label="Email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
            />
            <Input
              label="Organization"
              name="org"
              value={newUser.org}
              onChange={handleInputChange}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="online"
                checked={newUser.online}
                onChange={handleInputChange}
                className="mr-2"
              />
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Online
              </Typography>
            </div>
            <Input
              label="Date"
              name="date"
              value={newUser.date}
              onChange={handleInputChange}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>
          <Button variant="gradient" onClick={handleAddUser}>
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

export default UserData;
