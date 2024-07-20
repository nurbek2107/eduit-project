"use client";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const columns = [
  { label: "Course", key: "title" },
  { label: "Instructor", key: "instructor" },
  { label: "Status", key: "status" },
  { label: "Date", key: "date" },
  { label: "Actions", key: "actions" },
];

const initialRows = [
  {
    title: "JavaScript Basics",
    instructor: "John Doe",
    status: "Active",
    date: "2024-07-20",
  },
  {
    title: "React JS Fundamentals",
    instructor: "Jane Smith",
    status: "Completed",
    date: "2024-06-15",
  },
];

function CourseData() {
  const [rows, setRows] = useState(initialRows);
  const [filteredRows, setFilteredRows] = useState(initialRows);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    instructor: "",
    status: "",
    date: "",
  });
  const [editCourse, setEditCourse] = useState({
    originalTitle: "",
    title: "",
    instructor: "",
    status: "",
    date: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCourse = () => {
    if (
      !newCourse.title ||
      !newCourse.instructor ||
      !newCourse.status ||
      !newCourse.date
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setRows((prev) => {
      const updatedRows = [...prev, newCourse];
      filterRows("all", searchTerm, updatedRows);
      return updatedRows;
    });

    setOpenDialog(false);
    setNewCourse({
      title: "",
      instructor: "",
      status: "",
      date: "",
    });
  };

  const handleEditCourse = () => {
    if (
      !editCourse.title ||
      !editCourse.instructor ||
      !editCourse.status ||
      !editCourse.date
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setRows((prev) => {
      const updatedRows = prev.map((row) =>
        row.title === editCourse.originalTitle
          ? { ...row, ...editCourse, title: editCourse.title }
          : row
      );
      filterRows("all", searchTerm, updatedRows);
      return updatedRows;
    });

    setOpenEditDialog(false);
    setEditCourse({
      originalTitle: "",
      title: "",
      instructor: "",
      status: "",
      date: "",
    });
  };

  const handleDeleteCourse = (title) => {
    setRows((prev) => {
      const updatedRows = prev.filter((row) => row.title !== title);
      filterRows("all", searchTerm, updatedRows);
      return updatedRows;
    });
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    filterRows("all", searchValue);
  };

  const filterRows = (tab, searchValue, data = rows) => {
    let filtered = data.filter(
      (row) =>
        row.title.toLowerCase().includes(searchValue) ||
        row.instructor.toLowerCase().includes(searchValue)
    );

    if (tab !== "all") {
      filtered = filtered.filter((row) => row.status.toLowerCase() === tab);
    }

    setFilteredRows(filtered);
  };

  const openEditDialogHandler = (course) => {
    setEditCourse({
      originalTitle: course.title,
      title: course.title,
      instructor: course.instructor,
      status: course.status,
      date: course.date,
    });
    setOpenEditDialog(true);
  };

  return (
    <section className="w-full py-12 px-20">
      <Card className="h-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="md:w-72 flex gap-2">
              <div className="w-full">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between gap-8">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => setOpenDialog(true)}
              >
                Add Course
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <tbody>
              {filteredRows.map((row, index) => {
                const isLast = index === filteredRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr
                    key={row.title}
                    className="cursor-pointer hover:bg-gray-200 "
                  >
                    {columns.map(({ key }) => (
                      <td key={key} className={classes}>
                        {key === "actions" ? (
                          <div className="flex gap-2">
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
                              onClick={() => handleDeleteCourse(row.title)}
                            >
                              <TrashIcon className="h-5 w-5" />
                            </Button>
                          </div>
                        ) : (
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {row[key]}
                          </Typography>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Total {filteredRows.length} Courses
          </Typography>
        </CardFooter>
      </Card>

      {/* Add Course Dialog */}
      <Dialog open={openDialog} handler={() => setOpenDialog(false)}>
        <DialogHeader>Add New Course</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              name="title"
              value={newCourse.title}
              onChange={handleInputChange}
            />
            <Input
              label="Instructor"
              name="instructor"
              value={newCourse.instructor}
              onChange={handleInputChange}
            />
            <select
              name="status"
              value={newCourse.status}
              onChange={handleInputChange}
              className="border border-blue-gray-300 p-2 rounded"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
            <Input
              label="Date"
              name="date"
              value={newCourse.date}
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
          <Button variant="gradient" onClick={handleAddCourse}>
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
              name="title"
              value={editCourse.title}
              onChange={handleEditInputChange}
            />
            <Input
              label="Instructor"
              name="instructor"
              value={editCourse.instructor}
              onChange={handleEditInputChange}
            />
            <select
              name="status"
              value={editCourse.status}
              onChange={handleEditInputChange}
              className="border border-blue-gray-300 p-2 rounded"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
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

export default CourseData;
