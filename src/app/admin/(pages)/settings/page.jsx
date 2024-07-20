"use client";

import { useState, useEffect } from "react";
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
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PencilIcon } from "lucide-react";

const TABS = [
  { label: "All", value: "all" },
  { label: "Payed", value: "payed" },
  { label: "Did not payed", value: "did-not-payed" },
];

const TABLE_HEAD = ["Teachers", "Course", "Status", "Employed", "Actions"];

const initialRows = [
  {
    img: "../assets/default-user.png",
    name: "John Michael",
    email: "john@creative-tim.com",
    org: "Frontend React JS",
    online: true,
    date: new Date("2018-04-23"),
    password: '12dac2H3d42RL'
  },
  // Add other initial rows here
];

function Settings() {
  const [rows, setRows] = useState(initialRows);
  const [filteredRows, setFilteredRows] = useState(initialRows);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [newUser, setNewUser] = useState({
    img: "",
    name: "",
    email: "",
    org: "",
    online: false,
    date: new Date(),
    password: '',
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isClient, setIsClient] = useState(false);

  const [editCourse, setEditCourse] = useState({
    originalTitle: "",
    name: "",
    instructor: "",
    status: "",
    date: "",
  });


  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUser({
      ...newUser,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEditCourse = () => {
    if (
      !editCourse.name ||
      !editCourse.instructor ||
      !editCourse.status ||
      !editCourse.date
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setRows((prev) => {
      const updatedRows = prev.map((row) =>
        row.name === editCourse.originalTitle
          ? { ...row, ...editCourse, name: editCourse.name }
          : row
      );
      filterRows(selectedTab, searchTerm, updatedRows);
      return updatedRows;
    });

    setOpenEditDialog(false);
    setEditCourse({
      originalTitle: "",
      name: "",
      instructor: "",
      status: "",
      date: "",
    });
  };

  const handleDateChange = (date) => {
    setNewUser({
      ...newUser,
      date,
    });
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
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
      date: new Date(),
      password: '',
    });
  };

  const handleDeleteUser = (email) => {
    const updatedRows = rows.filter((row) => row.email !== email);
    setRows(updatedRows);
    setFilteredRows(updatedRows);
  };

  const filterRows = (tab, searchValue, data = rows) => {
    let filtered = data.filter(
      (row) =>
        row.name.toLowerCase().includes(searchValue) ||
        row.instructor.toLowerCase().includes(searchValue)
    );

    if (tab !== "all") {
      filtered = filtered.filter((row) => row.status.toLowerCase() === tab);
    }

    setFilteredRows(filtered);
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

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openEditDialogHandler = (course) => {
    setEditCourse({
      originalTitle: course.name,
      name: course.name,
      instructor: course.org,
      status: course.status,
      date: course.date,
    });
    setOpenEditDialog(true);
  };

  return (
    <section className="w-full py-[45px] px-[85px]">
      <Card className="h-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray" className="capitalize">
                others with opportunities
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
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 text-center"
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
                (row, index) => {
                  const isLast = index === filteredRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr
                      key={row.email}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <td className={`${classes}`}>
                        <div className="flex items-center gap-3">
                          <Avatar src='../assets/default-user.png' alt={row.name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {row.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {row.email}
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
                          {row.org ? row.org : `no course yet`}
                        </Typography>
                      </td>
                      <td className={`${classes}`}>
                        <Chip
                          className="flex flex-col items-center justify-center"
                          variant="ghost"
                          size="sm"
                          value={row.online ? "online" : "pause"}
                          color={row.online ? "green" : "blue-gray"}
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {isClient ? row.date.toLocaleDateString() : ''}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          variant="text"
                          color="blue"
                          onClick={() => openEditDialogHandler(row)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="text"
                          color="red"
                          onClick={() => handleDeleteUser(row.email)}
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
              label="Create Password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
            />
            <div className="relative z-50">
              <DatePicker
                selected={newUser.date}
                onChange={handleDateChange}
                portalId="root-portal"
                withPortal
                dateFormat="dd/MM/yyyy"
                className="w-full border rounded"
              />
            </div>
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

      {/* Edit Course Dialog */}
      <Dialog open={openEditDialog} handler={() => setOpenEditDialog(false)}>
        <DialogHeader>Edit Course</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              name="name"
              value={editCourse.name}
              onChange={handleEditInputChange}
            />
            <Input
              label="Course Assignment"
              name="instructor"
              value={editCourse.instructor}
              onChange={handleEditInputChange}
            />
            <Input
              label="Status"
              name="status"
              value={editCourse.status}
              onChange={handleEditInputChange}
            />
            <Input
              label="Date"
              name="date"
              value={editCourse.date}
              onChange={handleEditInputChange}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenEditDialog(false)}
          >
            Cancel
          </Button>
          <Button variant="gradient" onClick={handleEditCourse}>
            Save Changes
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

export default Settings;
