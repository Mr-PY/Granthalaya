import React from 'react'
import { useSelector } from 'react-redux';
import "./LibrarianReservations.css";
import Container from '@material-ui/core/Container';
import { firestoreConnect } from 'react-redux-firebase';
import LibrarianReservationCard from './LibrarianReservationCard';

const LibrarianReservations = () => {
    const users = useSelector(state => state.firestore.ordered.users);
    return (
        <div className="reservations-wrapper">
            <Container maxWidth="md" className="reservations-container">
                {users && users.map((user) => (
                    <LibrarianReservationCard key={user.user_id} user={user}/>
                ))}
            </Container>          
        </div>
    )
}

export default firestoreConnect(
    [
      {collection: 'users'}
    ]
    )(LibrarianReservations);
