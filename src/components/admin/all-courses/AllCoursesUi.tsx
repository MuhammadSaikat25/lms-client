import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useGetAllCourseQuery } from "../../../redux/feature/course/courseApi";
import { FadeLoader } from "react-spinners";

const AllCoursesUi = () => {
  const { data } = useGetAllCourseQuery(undefined);
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    setCourses(data?.data);
  }, [data?.data]);

  return (
    <div className="w-full h-screen p-2">
      {courses?.length > 0 ? (
        <div className="w-[100%] lg:w-[90%] mx-auto pt-14 lg:pt-0 h-[100%]">
          <TableContainer
            sx={{
              width: "100%",
              margin: "auto",
              height: "100%",
              background: "#080826",
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead className="bg-[#373781]">
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Id</TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Ratings
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Purchased
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Created At
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Edit
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-[#131237] p-1">
                {courses.map((course: any) => (
                  <TableRow
                    key={course._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      title={course._id}
                      sx={{ color: "white" }}
                      component="th"
                      scope="row"
                    >
                      {course._id.slice(0, 7)}
                    </TableCell>
                    <TableCell
                      title={course.name}
                      sx={{ color: "white" }}
                      align="right"
                    >
                      {course.name.length > 15
                        ? `${course.name.slice(0, 15)}...`
                        : course.name}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {course.ratings}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {course.purchased}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {format(course.createdAt)}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      <Link to={`/admin/edit-course/${course._id}`}>
                        <MdModeEditOutline />
                      </Link>
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      <MdDeleteForever />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color="white" />
        </div>
      )}
    </div>
  );
};

export default AllCoursesUi;
