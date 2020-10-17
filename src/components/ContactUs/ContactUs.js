import React, { useState } from "react";
import "./ContactUs.css";
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { sendMessage } from '../../redux'

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [menuItem, setMenuItem] = useState('Request');
  const [messageError, setMessageError] = useState('');
  
  const auth = useSelector(state=> state.firebase.auth);
  const dispatch = useDispatch();

      
  const handleSubmit = () => {
    setMessageError('');

    if(message.length < 3){
      setMessageError("Message is required");
      return
    }
    
    else{
      setMessage('');
      dispatch(sendMessage({
        message_type: menuItem,
        message_body: message,
        sender_email: auth.email,
        sent_on: new Date()  
      }
      ))      
    }
  }

  if(!auth.uid) return <Redirect to="/login"/>

  return (
    <Container className="contact-us-container">
      <div className="contact-us-banner">
        <Typography className="contact-us-heading" variant="h4">
          GET IN TOUCH
        </Typography>
      </div>

      <div className="contact-us-body">
      <TextField
          label="Your Email"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
          size="medium"
          value = {auth ? auth.email : " "}
          fullWidth
        />
        <br />
        <br />
      <InputLabel>Reason</InputLabel>
        <Select
          value={menuItem}
          onChange={(e)=>setMenuItem(e.target.value)}
          fullWidth
        >
          <MenuItem value={"Request"}>Request</MenuItem>
          <MenuItem value={"Suggestion"}>Suggestion</MenuItem>
          <MenuItem value={"Information"}>Information</MenuItem>
        </Select>
        <br />
        <br />
        <TextField
          label="Your Message"
          rows={6}
          placeholder="Got any Requests or Suggestions let us know....."
          variant="outlined"
          value={message}
          onClick={() => setMessageError('')}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          fullWidth
        />
        <br />
          <Typography color="error" align="left">
            {messageError}
          </Typography>
        <br />
        <Button variant="contained" color="primary" fullWidth size="large"
          onClick={handleSubmit}
          >
          SUBMIT
        </Button>
      </div>
    </Container>
  );
};

export default ContactUs;
