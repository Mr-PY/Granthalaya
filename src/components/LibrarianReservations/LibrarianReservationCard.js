import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const LibrarianReservationCard = ({user}) => {
    let initials = ''

    user.user_name.toUpperCase().split(' ').map(
        value => initials += value[0]
    )
    // const setMaxTextCharacters = (text) => {
    //     const maxCharacters = 40;
    //     const textLength = text.length;
    //     const slicedText = text.slice(0, maxCharacters);
    //     if(textLength > maxCharacters){
    //       return `${slicedText}.....`
    //     }
    //     return text.slice(0, maxCharacters);
    // }

    const handleReject = () => {

    }

    const handleUserBorrow = () => {
        
    }
        
    return (
        <Card className="reservation-card">
            <CardContent>
                <div className="reservation-details-wrapper">
                    <div className="reservation-user-details-wrapper">
                        <div className="reservation-user-avatar">
                            <Avatar alt="Profile Image" src={user.user_image} style={{width: '40px', height: '40px', fontSize:'1em', backgroundColor:'#00796b'}}>
                                {initials}      
                            </Avatar>
                        </div>
                        <div className="reservation-user-details">
                            <Typography variant='h6' className='user-details'>{user.user_name}</Typography>
                            <Typography variant='subtitle1' className='user-details'>{user.user_email}</Typography>
                        </div>
                    </div>
                    <div className="requested">
                        ---Requested---
                    </div>
                    <div className="reservation-book-details-wrapper">
                        <div className="reservation-book-img">
                            <img src={user.reserved_book_image} alt={user.reserved_book_title}/>
                        </div>
                        <div className="reservation-book-details">
                                <Typography variant='h6' className='user-details'>{user.reserved_book_title}</Typography>
                                <Typography variant='subtitle1' className='user-details'>{user.reserved_book_author}</Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardActions className="reservation-buttons">
                <Button 
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={handleUserBorrow}
                >
                    User Borrowed
                </Button>
                <Button 
                    size="medium"
                    variant="contained"
                    color="secondary"
                    onClick={handleReject}
                    >
                    Reject
                </Button>
            </CardActions>
        </Card>
    )
}

export default LibrarianReservationCard
