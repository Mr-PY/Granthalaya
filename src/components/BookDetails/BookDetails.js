import React from "react";
import "./BookDetails.css";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import {firestoreConnect} from 'react-redux-firebase';
import handleBorrow from '../../helpers/userBookBorrowHandler';
import handleReserve from '../../helpers/userBookReserveHandler';

const BookDetails = (props) => {
  const id = props.match.params.id;
  const auth = useSelector(state=> state.firebase.auth);
  const bookDetails = useSelector(state => {
    const books = state.firestore.data.books;
    const data = books ? books[id] : null
    return data
  });
  const profile = useSelector(state=> state.firebase.profile);
  const userBorrowedList = profile.borrowed_list;
  const userReservedList = profile.reserved_list;
  const history = useHistory();
  const dispatch = useDispatch();
  
  if(!auth.uid) return <Redirect to="/login"/>
  
  return (
    <div className="book-details-wrapper">
      <Container className="book-details-container">
        <div className="close-btn">
          <Button
            variant="contained"
            className="close-btn"
            color="secondary"
            size="large"
            onClick={() => history.goBack()}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </div>

        <br />
        <div className="book-grid-desktop">
          <div className="book-img-container">
            <img src={bookDetails?bookDetails.book_image:''} alt={bookDetails?bookDetails.book_title:''}/>
          </div>
          <div className="where-to-find">
            <Typography variant="h6" color="textPrimary">
              Find it here:
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Section: &nbsp;&nbsp;<b>{bookDetails ? bookDetails.book_department : 'Department'}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rack: &nbsp;&nbsp;<b>{bookDetails ? bookDetails.book_rack : 'Rack'}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Row: &nbsp;&nbsp;<b>{bookDetails ? bookDetails.book_row : '0'}</b>
            </Typography>
          </div>

          <div className="popup-book-details">
            <Typography className="book-title" color="textPrimary" variant="h5">
              <b>{bookDetails ? bookDetails.book_title : 'Title'}</b>
            </Typography>
            <Typography
              className="book-author"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {bookDetails ? bookDetails.book_author : 'Author'}
            </Typography>
            <Typography
              className="available"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              Available Units: {bookDetails ? bookDetails.book_available : "0"}
            </Typography>
          </div>
          <div className="book-description">
            <hr />
            <br />
            <Typography variant="h6" component="p">
              Book Description:
            </Typography>
            <br />
            <Typography variant="body1" color="textSecondary" component="p">
              {bookDetails ? bookDetails.book_description : "Description"}
            </Typography>
            <br/>
          </div>
          <div className="btns">
            <Button
                variant="contained"
                size="large"
                color="secondary"
                fullWidth
                onClick={() => handleReserve(id, bookDetails, userBorrowedList, userReservedList, auth.uid, dispatch)}
              >
                RESERVE
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                onClick={() => handleBorrow(id, bookDetails, userBorrowedList, userReservedList, auth.uid, dispatch)}
              >
                BORROW
              </Button>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default firestoreConnect(
  [
    {collection: 'books'}
  ]
  )(BookDetails);
