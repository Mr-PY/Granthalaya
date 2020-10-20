import React, { useState } from "react";
import { useSelector } from 'react-redux';
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
import { firestoreConnect } from 'react-redux-firebase';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
});

const LibrarianUsersTable = ({profile}) => {
  const users = useSelector(state => state.firestore.ordered.users);
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
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="right">Reserved</TableCell>
              <TableCell align="right">Borrowed</TableCell>
              <TableCell align="center">Joined On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <UserRow key={user.id} user={user} profile={profile}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ width: "100%" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users ? users.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};


export default firestoreConnect(
  [
    {collection: 'users'}
  ]
  )(LibrarianUsersTable);
