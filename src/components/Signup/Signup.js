import React, { useState } from "react";
import "./Signup.css";
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { signUp } from '../../redux'

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const auth = useSelector(state=> state.firebase.auth)
  const authError = useSelector(state=> state.signUp.signUpError)
  const dispatch = useDispatch()

  const clearInputs = () =>{
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }
  
  const clearErrors = () =>{
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  }

  const handleSubmit = () =>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    clearErrors();
    if(!fullName){
      setPassword('');
      setConfirmPassword('');
      setNameError("Name is required");
      return
    }
    if(!fullName.match(/^[a-zA-Z]+$/) && !fullName.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && !fullName.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)){
      setPassword('');
      setConfirmPassword('');
      setFullName('');
      setNameError("Invalid Name");
      return;
    }
    if(!email){
      setPassword('');
      setConfirmPassword('');
      setEmailError("Email is required");
      return
    }
    if(!email.match(emailPattern)){
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setEmailError("Invalid Email");
      return;
    }
    if(!password){
      setPassword('');
      setConfirmPassword('');
      setPasswordError("Password is required");
      return
    }
    if(password.length < 6){
      setPassword('');
      setConfirmPassword('');
      setPasswordError("password must be atleast 6 characters long");
      return
    }
    if(password !== confirmPassword){
      setPassword('');
      setConfirmPassword('');
      setConfirmPasswordError("Password doesn't match");
      return
    }
    if( phone.length > 0 && !phone.length === 10 && !phone.match([/^\d{10}$/]) ){
      setPassword('');
      setConfirmPassword('');
      setPhone('');
      setPhoneError("Invalid Phone Number");
      return;
    }
    else{
      clearInputs()
      dispatch(signUp({fullName, email, password, phone}))
    }
  }
  if(auth.uid) return <Redirect to='/' />

  return (
    <>
      <div className="signup-page-bg"></div>
      <div className="signup-page-overlay"></div>
      <Container className="signup-container" maxWidth="xs">
        <Box
          className="signup-box"
          boxShadow="5"
          textAlign="center"
          padding="2em"
          mt="1em"
          borderRadius="0.5em"
          style={{ backgroundColor: "#efefef" }}
        >
          <img
            className="logo-img"
            src="/assets/images/logo.png"
            alt="Logo"
          />
          <Typography color="primary" variant="h4">
            GRANTHALAYA
          </Typography>
          <br />
          <TextField
            autoFocus
            required
            label="Full Name"
            variant="outlined"
            value = {fullName}
            onClick={() => setNameError('')}
            onChange={(e) =>setFullName(e.target.value)}
            fullWidth
          />
          <br />
          <Typography color="error" align="left" style={nameError ? {}: {display:"none"}}>
            {nameError}
          </Typography>
          <br />
          <TextField
            required
            label="Email"
            variant="outlined"
            value = {email}
            onClick={() => setEmailError('')}
            onChange={(e) =>setEmail(e.target.value)}
            fullWidth
          />
          <br />
          <Typography color="error" align="left" style={emailError ? {}: {display:"none"}}>
          {emailError}
          </Typography>
          <br />
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
            value = {password}
            onClick={() => setPasswordError('')}
            onChange={(e) =>setPassword(e.target.value)}
            fullWidth
          />
          <br />
          <Typography color="error" align="left" style={passwordError ? {}:{display:"none"}}>
            {passwordError}
          </Typography>
          <br />
          <TextField
            required
            type="password"
            label="Confirm Password"
            variant="outlined"
            value = {confirmPassword}
            onClick={() => setConfirmPasswordError('')}
            onChange={(e) =>setConfirmPassword(e.target.value)}
            fullWidth
          />
          <br />
          <Typography color="error" align="left" style={confirmPasswordError ? {} : {display:"none"}}>
            {confirmPasswordError}
          </Typography>
          <br />
          <TextField          
            label="Phone"
            variant="outlined"
            value = {phone}
            onClick={() => setPhoneError('')}
            onChange={(e) =>setPhone(e.target.value)}
            fullWidth
          />
          <br />
          <Typography color="error" align="left" style={phoneError ? {} : {display:"none"}}>
            {phoneError}
          </Typography>
          <br />
          <Typography color="error" align="left" style={authError ? {} : {display:"none"}}>
            {authError}
          </Typography>
          <br />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth size="large"
            onClick={handleSubmit}  
          >
            SIGNUP
          </Button>
          <br />
          <br />
          <Typography color="secondary">
            Have an Account?{" "}
            <Link to="/login" className="link-tag">
              Login here.
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
