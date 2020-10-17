import React, { useState } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProfileDetailsBlock from './ProfileDetailsBlock';
import ProfileReserved from './ProfileReserved';
import ProfileBorrowed from './ProfileBorrowed';

const useStyles = makeStyles((theme) => ({
    accordion: {
        backgroundColor: '#e1f5fe',
        borderRadius: "10px",
    },
    firstAccordionSummary:{
        borderRadius: "6px 6px 0 0",  

    },
    thirdAccordionSummary:{
        borderRadius: "0 0 6px 6px",  
    }
  })
);
  
const Profile = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState('panel1');
    const auth = useSelector(state=> state.firebase.auth);
    const profile = useSelector(state=> state.firebase.profile);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    if(!auth.uid) return <Redirect to="/login"/>


    return (
        <div className="profile-wrapper">
            <Container maxWidth="md" className="profile-container">
                <Accordion 
                expanded={ expanded ==='panel1' } 
                onChange={handleChange('panel1')}
                className={classes.accordion}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    className={classes.firstAccordionSummary}
                    style={expanded === 'panel1' ? {backgroundColor: '#fff'}:{backgroundColor: '#eaeaea'}}
                    >
                        <Typography variant={ expanded ==='panel1' ? 'h6' : 'subtitle1' }>Personal Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ProfileDetailsBlock profile={profile} auth={auth} />
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                expanded={ expanded === 'panel2' } 
                onChange={handleChange('panel2')}
                className={classes.accordion}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    style={expanded === 'panel2' ? {backgroundColor: '#fff'}:{backgroundColor: '#eaeaea'}}
                    >
                        <Typography  variant={ expanded ==='panel2' ? 'h6' : 'subtitle1' }>Books Reserved</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="profile-books">
                        {profile.user_name && profile.reserved_list.map(reserved_book => {
                            return(
                                <ProfileReserved book={reserved_book} key={reserved_book.book_id} profile={profile}/>
                            )
                        })}  
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                expanded={ expanded === 'panel3' } 
                onChange={handleChange('panel3')}
                className={classes.accordion}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    className={classes.thirdAccordionSummary}
                    style={expanded === 'panel3' ? {backgroundColor: '#fff'}:{backgroundColor: '#eaeaea'}}
                    >
                        <Typography  variant={ expanded ==='panel3' ? 'h6' : 'subtitle1' }>Books Borrowed</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="profile-books">
                        {profile.user_name && profile.borrowed_list.map(borrowed_book => {
                            return(
                                <ProfileBorrowed book={borrowed_book} key={borrowed_book.book_id} profile={profile}/>
                            )
                        })}  
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    )
}

export default Profile;
