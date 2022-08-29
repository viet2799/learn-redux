import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";

const Home = () => {
  //   function createData(name, calories, fat, carbs, protein) {
  //     return { name, calories, fat, carbs, protein };
  //   }

  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, [users]);

  const handleDelete = (id) => {
    if (window.confirm("địt mẹ m . Thât ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <TableContainer component={Paper}>
    <button>
      Add
    </button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.contact}</TableCell>
              <TableCell align="center">{user.address}</TableCell>
              <TableCell align="center">
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button>Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
