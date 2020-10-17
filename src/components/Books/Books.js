import React from "react";
import "./Books.css";
import {useSelector} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Book from "../Book/Book";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },
}));

const Books = ({search}) => {
  const books = useSelector(state=>state.firestore.ordered.books);
  const classes = useStyles();

  const filterBooks = books && books.filter(book=>
                    book.book_title.toLowerCase().includes(search.toLowerCase()) || 
                    book.book_author.toLowerCase().includes(search.toLowerCase()))  

  return (
    <>
      <div className="books-component"></div>
      <div className="books-container">
        <Grid
          container
          className={classes.root}
          alignItems="center"
          justify="flex-start"
          spacing={2}
        >
          {books && filterBooks.map(book => {
            return(
              <Grid item xs={12} sm={6} md={4} lg={3} key={book.book_id}>
                <Book book={book} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  );
};

export default firestoreConnect(
  [
    {collection: 'books'}
  ]
  )(Books);
