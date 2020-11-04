import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import {firestoreConnect} from 'react-redux-firebase';
import { returnBook } from "../../redux";
import calculateRemainingTime from '../../helpers/RemainingTimeCalculater'


const handleBookReturn = (id, profile, book, books, dispatch) => {
    const borrowedList = profile.borrowed_list
    const requiredBook = books.filter(currentbook => currentbook.book_id === book.book_id)
    const updatedBorrowedList = borrowedList.filter(borrowedBook => borrowedBook.book_id !== book.book_id)

    if(book){
        dispatch(
            returnBook({
                user_id: id,
                borrowed_list: updatedBorrowedList,
                book_title: requiredBook[0].book_title,
                book_id: requiredBook[0].id,
                book_available: requiredBook[0].book_available,

            })
        )
    }
}

const ProfileBorrowed = ({book, profile}) => {
    const id = useSelector(state=> state.firebase.auth.uid);
    const books = useSelector(state => state.firestore.ordered.books)
    const dispatch = useDispatch();

    const remainingTime = calculateRemainingTime(profile, book.borrowed_on, 'borrowed')

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const date = () => {
        const dateInSeconds =  book.borrowed_on ? book.borrowed_on.seconds * 1000 : 0
        return dateInSeconds
    }
    return (
        <div>
            <Card className="profile-book-card">
                <div className={ remainingTime < 6 ? "profile-book-corner-stick red" : "profile-book-corner-stick green"}> </div>
                <CardContent className="profile-book-content">
                    <div className="profile-book-img">
                        <img src={book.book_image} alt={book.book_title}/>
                    </div>
                    <div className="profile-book-details">
                        <Typography variant="h6" color="textSecondary" component="p" style={{lineHeight:"24px", paddingBottom:"10px"}}>
                        {book.book_title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            on {new Date(date()).toLocaleDateString("en-gb", options)} 
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {`${remainingTime} Days left`}   
                        </Typography>
                    </div>
                </CardContent>
                <div className="profile-book-btns">
                    <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    startIcon={<DoneIcon/>}
                    onClick={  () => handleBookReturn(id, profile, book, books, dispatch)}
                    >
                        RETURN
                    </Button>
                    <Typography variant="h6" style={remainingTime<=0 ? { display: "block", color: "#ff0909" } : { display: "none" }}>
                        OVERTIME
                    </Typography>
                </div>
            </Card>
        </div>
    )
}

export default firestoreConnect(
    [
      {collection: 'books'}
    ]
    )(ProfileBorrowed)
