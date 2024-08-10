import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDeleteForever } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { format } from "timeago.js";
import { useGetAllUserQuery } from "../../../redux/feature/user/userApi";


const AllUsers = () => {
  const { data } = useGetAllUserQuery(undefined);
  const [user, steUser] = React.useState([]);

  React.useEffect(() => {
    steUser(data?.data);
  }, [data?.data]);

  return (
    <div className="">
      {user ? (
        <div className="lg:w-[80%] mx-auto lg:mt-10">
          <TableContainer
            sx={{
              margin: "auto",
              height: "fit",
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead className="bg-[#080826] ">
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Id</TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Email
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Role
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Purchased Course
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Join
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Email
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-[#131237] p-1">
                {user?.map((user: any) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      title={user._id}
                      sx={{ color: "white" }}
                      component="th"
                      scope="row"
                    >
                      {user._id.slice(0, 7)}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {user.name}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {user.email.split("@")[0]}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {user.role}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {user.courses.length}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      {format(user.createdAt)}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      <a href={`mailto:${user.email}`}>
                        <MdMarkEmailRead />
                      </a>
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
        <div className="w-[80%]">
          
        </div>
      )}
    </div>
  );
};

export default AllUsers;
