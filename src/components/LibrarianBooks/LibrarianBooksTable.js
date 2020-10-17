import React, { useState } from "react";
import { useSelector} from 'react-redux';
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
import {firestoreConnect} from 'react-redux-firebase';


const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
});

const LibrarianTable = () => {
  const books = useSelector(state => state.firestore.ordered.books);
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
              <TableCell>Book Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Where To Find</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books && books.map((book) => (
              <BookRow key={book.book_id} book={book} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={books ? books.length : 0}
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
    {collection: 'books'}
  ]
  )(LibrarianTable);
