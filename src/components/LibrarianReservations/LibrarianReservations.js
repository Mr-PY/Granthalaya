import React from 'react'
import "./LibrarianReservations.css"
import Container from '@material-ui/core/Container'
import LibrarianReservationCard from './LibrarianReservationCard'
import Typography from '@material-ui/core/Typography'

const LibrarianReservations = ({users}) => {
    let reservedBooksList = []

    if(users){
        const usersWithReservedList = users && users.filter(user=>{
            return (user.reserved_list.length !== 0)
        })
        usersWithReservedList.map((currentUser)=>{
            currentUser.reserved_list.map((currentBook)=>{
                let current_book = {
                user_image: currentUser.user_image,
                user_name: currentUser.user_name,
                user_email: currentUser.user_email,
                reserved_book_image: currentBook.book_image,
                reserved_book_title: currentBook.book_title,
                reserved_book_author: currentBook.book_author,
                reserved_book_id: currentBook.book_id,
                reserved_book_on: currentBook.reserved_on,
            }
            reservedBooksList.push(current_book)
        })
        return 1
        })
        return (
            <div className="reservations-wrapper">
                <Container maxWidth="md" className="reservations-container">
                    {(reservedBooksList.length > 0)?
                        reservedBooksList.map((reservedUser, index) => (
                            <LibrarianReservationCard key={index} user={reservedUser}/>
                            ))
                        : 
                            <Typography variant='h6' className='user-details'>No Reservations were made by the users.  Check back later</Typography>  
                    }
                </Container>          
            </div>
        )
    }
    else{
        return<></>
    }
}

export default LibrarianReservations
