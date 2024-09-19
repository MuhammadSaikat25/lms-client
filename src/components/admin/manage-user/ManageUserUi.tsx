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
import {
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "../../../redux/feature/user/userApi";
import { MdModeEdit } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
const ManageUserUi = () => {
  const { data, refetch } = useGetAllUserQuery(undefined);
  const [user, setUser] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [updateRole, setUpdateRole] = React.useState("");
  const [updateUserEmail, setUpdateUserEmail] = React.useState("");
  const [updateUser] = useUpdateUserMutation();
  React.useEffect(() => {
    setUser(data?.data);
  }, [data?.data]);

  const handelModal = (email: string, role: string) => {
    setUpdateRole(role === "user" ? "admin" : "user");
    setUpdateUserEmail(email);
    setModal(true);
  };

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setModal(false);
      }
    }
  };

  const updateUserRole = async () => {
    if (updateUserEmail && updateRole) {
      await updateUser({ email: updateUserEmail, role: updateRole });
      setModal(false);
      toast.success(`updated ${updateUserEmail} in ${updateRole} `);
    }
    refetch();
  };

  return (
    <div className="pt-[70px] lg:pt-0">
      <Toaster />
      <div className="relative p-3">
        {user ? (
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
                <TableHead className="bg-[#7c7c9f]">
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
                      Contact
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      Actions
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="right">
                      Edit Role
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="bg-[#131237]">
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
                        <a href={`mailto:${user.email}`}>
                          <MdMarkEmailRead />
                        </a>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="right">
                        <MdDeleteForever />
                      </TableCell>
                      <TableCell
                        onClick={() => handelModal(user.email, user.role)}
                        sx={{ color: "white" }}
                        align="right"
                      >
                        <MdModeEdit className="cursor-pointer" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div className="w-[80%]"></div>
        )}
      </div>
      {modal && (
        <div
          onClick={handelClose}
          className="fixed w-full h-screen top-0 z-[99999] "
          id="screen"
        >
          <div className=" fixed z-[999999999] text-white h-fit bg-[#2E2960] border border-rose-600 rounded p-5 w-fit top-[40%] right-[50%]">
            <h1>
              {" "}
              Are you sure you want to change user role into role: {updateRole}?
            </h1>
            <p className="flex justify-center gap-2 items-center">
              <span onClick={() => setModal(false)}>No</span>
              <span onClick={updateUserRole}>Yes</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUserUi;
