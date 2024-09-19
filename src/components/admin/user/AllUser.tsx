import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdMarkEmailRead } from "react-icons/md";
import { format } from "timeago.js";
import { useGetAllUserQuery } from "../../../redux/feature/user/userApi";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeLoader } from "react-spinners";

const AllUsers = () => {
  const { data } = useGetAllUserQuery(undefined);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    setUser(data?.data);
  }, [data?.data]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="w-full h-screen p-2">
      
      {user ? (
        <div className="w-[100%] lg:w-[90%] mx-auto pt-14 lg:pt-0 h-[100%] p-4">
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
              <TableHead className="bg-[#080826]">
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Id</TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    Email
                  </TableCell>
                  {!isSmallScreen && (
                    <>
                      <TableCell sx={{ color: "white" }} align="right">
                        Role
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="right">
                        Purchased Course
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="right">
                        Join
                      </TableCell>
                    </>
                  )}
                  <TableCell sx={{ color: "white" }} align="right">
                    Email
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
                    {!isSmallScreen && (
                      <>
                        <TableCell sx={{ color: "white" }} align="right">
                          {user.role}
                        </TableCell>
                        <TableCell sx={{ color: "white" }} align="right">
                          {user.courses.length}
                        </TableCell>
                        <TableCell sx={{ color: "white" }} align="right">
                          {format(user.createdAt)}
                        </TableCell>
                      </>
                    )}
                    <TableCell sx={{ color: "white" }} align="right">
                      <a href={`mailto:${user.email}`}>
                        <MdMarkEmailRead />
                      </a>
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

export default AllUsers;
