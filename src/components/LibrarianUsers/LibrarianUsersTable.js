import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import UserRow from "./UserRow";

function createData(
  userId,
  userName,
  userEmail,
  userPhone,
  booksBorrowed,
  borrowedBooksDetails
) {
  return {
    userId,
    userName,
    userEmail,
    userPhone,
    booksBorrowed,
    borrowedBooksDetails,
  };
}

const rows = [
  createData(1, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
  createData(2, "Pranay Prasad", "Pranayprasad@gmail.com", 9030503750, 3, [
    { id: 1, name: "Advanced Java", date: "2020-01-12", daysLeft: 5 },
    { id: 2, name: "Python Programming", date: "2020-06-15", daysLeft: 25 },
    { id: 3, name: "C#", date: "2020-08-21", daysLeft: 12 },
  ]),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
});

const LibrarianUsersTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          style={{ maxWidth: "100%" }}
          aria-label="collapsible table"
          stickyHeader
          className="librarian-users-table"
        >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="right">Books Borrowed</TableCell>
              <TableCell align="center">Notify?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <UserRow key={row.userId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ width: "100%" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default LibrarianUsersTable;
