import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const LibrarianReservationCard = ({user}) => {
    return (
        <Card className="reservation-card">
            <CardContent>
                <div className="reservation-details-wrapper">
                    <div className="reservation-user-details-wrapper">
                        <div className="reservation-user-avatar">
                            <Avatar alt="Profile Image" src="/broken-image.jpg" style={{width: '40px', height: '40px', fontSize:'1em', backgroundColor:'#00796b'}}>
                                AS       
                            </Avatar>
                        </div>
                        <div className="reservation-user-details">
                            <Typography variant='h6' className='user-details'>Akhil Sai</Typography>
                            <Typography variant='subtitle1' className='user-details'>akhilsai@email.com</Typography>
                        </div>
                    </div>
                    <div className="requested">
                        <span className="left-line"></span>
                        Requested
                        <span className="right-line"></span>
                    </div>
                    <div className="reservation-book-details-wrapper">
                        <div className="reservation-book-img">
                            <img src='url(https://unsplash.com/photos/m-D_PAxLcTo)' alt="book_title"/>
                        </div>
                        <div className="reservation-book-details">
                                <Typography variant='h6' className='user-details'>Statistics for Business</Typography>
                                <Typography variant='subtitle1' className='user-details'>David R Anderson</Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardActions className="reservation-buttons">
                <Button 
                    size="medium"
                    variant="contained"
                    color="primary"
                >
                    Borrowed
                </Button>
                <Button 
                    size="medium"
                    variant="contained"
                    color="secondary"
                >
                    Reject
                </Button>
            </CardActions>
        </Card>
    )
}

export default LibrarianReservationCard
