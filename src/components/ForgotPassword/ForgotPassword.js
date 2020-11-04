import React, {useState} from "react"
import "./ForgotPassword.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CircularProgress from '@material-ui/core/CircularProgress'
import { forgotPassword } from '../../redux'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const [emailError, setEmailError] = useState('')
  const auth = useSelector(state=> state.firebase.auth)
  const dispatch = useDispatch()
  
  const clearInputs = () =>{
    setEmail('')
  }
  
  const clearErrors = () =>{
    setEmailError('')
  }

  const handleSubmit = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    clearErrors()
    
    if(email.length===0){
      clearInputs()
      setEmailError("Email can't be empty")
      return
    }
    if(!email.match(emailPattern)){
      clearInputs()
      setEmailError("Invalid Email")
      return
    }
    else{
      setLoading(true)
      clearInputs()
      dispatch(forgotPassword({email, setLoading}))
    }
  }

  if (auth.uid) return <Redirect to='/' />

  return (
    <>
      <div className="forgot-page-bg"></div>  
      <div className="forgot-password-wrapper">
        <Container className="forgot-password-container" maxWidth="xs">
          <Box
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
              Granthalaya
            </Typography>
            <br />
            <Typography color="secondary" variant="h5">
              Forgot your password?
            </Typography>
            <br />
            <Typography variant="body1" style={{ color: "#222" }}>
              To reset password, enter your email. If your account exists, we will
              send you an email with further instructions.
            </Typography>
            <br />
            <br />
            <TextField
              autoFocus
              required            
              label="Email"
              variant="outlined"
              value = {email}
              onClick={() => setEmailError('')}
              onChange={(e) =>setEmail(e.target.value)}
              
              fullWidth
              />
            <br />
            <br/>
            <Typography color="error" align="center">
              {emailError}
            </Typography>
            <br />
            {loading ? <CircularProgress color="secondary"/> : ''}
            <Button variant="contained" color="primary" fullWidth size="large" onClick={handleSubmit}>
              RESET PASSWORD
            </Button>
            <br />
            <br />

            <Typography color="secondary">
              <Link to="/login" className="link-tag">
                BACK
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default ForgotPassword
