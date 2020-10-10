import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BookRow from "./BookRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

function createData(
  bookId,
  bookName,
  bookAuthor,
  whereToFind,
  totalBooks,
  availableBooks,
  bookDescription
) {
  return {
    bookId,
    bookName,
    bookAuthor,
    whereToFind,
    totalBooks,
    availableBooks,
    bookDescription,
  };
}

const rows = [
  createData(
    1,
    "ADVANCED JAVA PROGRAMMING",
    "George F Luger",
    "Computer Science Rack: 2 Row: 3",
    50,
    10,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, pariatur quod dolore maxime minima aut exercitationem quisquam maiores mollitia iusto vel accusamus dignissimos distinctio nobis sit nesciunt modi impedit?"
  ),
  createData(
    1,
    "ADVANCED JAVA PROGRAMMING",
    "George F Luger",
    "Computer Science Rack: 2 Row: 3",
    50,
    10,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, pariatur quod dolore maxime minima aut exercitationem quisquam maiores mollitia iusto vel accusamus dignissimos distinctio nobis sit nesciunt modi impedit?"
  ),
  createData(
    1,
    "ADVANCED JAVA PROGRAMMING",
    "George F Luger",
    "Computer Science Rack: 2 Row: 3",
    50,
    10,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, pariatur quod dolore maxime minima aut exercitationem quisquam maiores mollitia iusto vel accusamus dignissimos distinctio nobis sit nesciunt modi impedit?"
  ),
  createData(
    1,
    "ADVANCED JAVA PROGRAMMING",
    "George F Luger",
    "Computer Science Rack: 2 Row: 3",
    50,
    10,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, pariatur quod dolore maxime minima aut exercitationem quisquam maiores mollitia iusto vel accusamus dignissimos distinctio nobis sit nesciunt modi impedit?"
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
});

const LibrarianTable = () => {
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
    <Paper className="librarian-table-Container">
      <TableContainer className={classes.container}>
        <Table
          style={{ maxWidth: "100%" }}
          aria-label="collapsible table"
          stickyHeader
          className="librarian-books-table"
        >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Id</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Where To Find</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <BookRow key={row.bookId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
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

export default LibrarianTable;
