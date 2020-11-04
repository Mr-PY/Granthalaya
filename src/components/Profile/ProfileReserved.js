import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import {firestoreConnect} from 'react-redux-firebase';
import calculateRemainingTime from '../../helpers/RemainingTimeCalculater'
import { removeReservedBook, reservedToBorrowed } from "../../redux";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "1.2em",
        [theme.breakpoints.up('md')]:{
            fontSize: "1.4em",


        }
    },
    date: {
        fontSize: "0.8em",
        fontWeight: "light",
        [theme.breakpoints.up('md')]:{
            fontSize: "1em",
        }
    },
    daysLeft: {
        fontSize: "1em",
        fontWeight: "normal",
        [theme.breakpoints.up('md')]:{
            fontSize: "1.2em",
        }
    },
  })
);

const handleBookBorrow = (id, profile, book, dispatch) => {
    const reservedList = profile.reserved_list
    const borrowedList = profile.borrowed_list
    const reservedBook = reservedList.filter(reservedBook => reservedBook.book_id === book.book_id)
    const updatedReservedList = reservedList.filter(reservedBook => reservedBook.book_id !== book.book_id)
    const moveToBorrowed = {
        book_id: reservedBook[0].book_id,
        book_title: reservedBook[0].book_title,
        book_image: reservedBook[0].book_image,
        borrowed_on: new Date()
    }
    borrowedList.push(moveToBorrowed)
    if(book){
        dispatch(
            reservedToBorrowed({
                user_id: id,
                book_title: book.book_title,
                reserved_list: updatedReservedList,
                borrowed_list: borrowedList,

            })
        )
    }
}

const handleBookRemove = (id, profile, book, books, dispatch) => {
    const updatedReservedList = profile.reserved_list.filter(reservedBook => reservedBook.book_id !== book.book_id)
    const requiredBook = books.filter(currentbook => currentbook.book_id === book.book_id)
    if(books &&requiredBook){
        dispatch(
            removeReservedBook({
                user_id: id,
                reserved_list: updatedReservedList,
                book_id: requiredBook[0].id,
                book_title: book.book_title,
                book_available: requiredBook[0].book_available,
            }))
    }
}

const ProfileReserved = (props) => {
    const {book, profile} = props;
    const id = useSelector(state=> state.firebase.auth.uid);
    const books = useSelector(state => state.firestore.ordered.books)
    const dispatch = useDispatch();
    const classes = useStyles(props);


    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const date = () => {
        const dateInSeconds =  book.reserved_on ? new Date(book.reserved_on.seconds * 1000) : new Date(0)
        return dateInSeconds
    }

    return (
        <div>
            <Card className="profile-book-card">
                <div className={ calculateRemainingTime(profile, book.reserved_on, 'reserved') < 3 ? "profile-book-corner-stick red" : "profile-book-corner-stick green" }> </div>
                <CardContent className="profile-book-content">
                    <div className="profile-book-img">
                        <img src={book.book_image} alt={book.book_title}/>
                    </div>
                    <div className="profile-book-details">
                        <Typography variant="h6" color="textSecondary" component="p" className={classes.heading} style={{lineHeight:"24px", paddingBottom:"10px"}}>
                            {book.book_title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" className={classes.date} style={{lineHeight:"24px", paddingBottom:"8px"}}>
                            on {date().toLocaleDateString("en-gb", options)}
                            
                        </Typography>
                        <Typography variant="body1" color="textSecondary" className={classes.daysLeft} component="p">
                            {`${calculateRemainingTime(profile, book.reserved_on, 'reserved')} hrs left`}
                        </Typography>
                    </div>
                    <div className="profile-books-btns">
                        
                    </div>
                </CardContent>
                <div className="profile-book-btns">
                    <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    startIcon={ <AddBoxIcon/> }
                    onClick={ () => handleBookBorrow(id, profile, book, dispatch) }
                    >
                        BORROW
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        startIcon= {<DeleteIcon/>}
                        onClick={ () => handleBookRemove(id, profile, book, books, dispatch) }
                        >
                        Remove
                    </Button>
                    
                </div>
            </Card>
        </div>
    )
}

export default firestoreConnect(
    [
      {collection: 'books'}
    ]
    )(ProfileReserved)
