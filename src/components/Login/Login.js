import React, {useState} from "react"
import "./Login.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from "@material-ui/core/InputAdornment"
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { logIn } from '../../redux'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)
  const [passwordHidden, setPasswordHidden]= useState(false)

  const auth = useSelector(state=> state.firebase.auth)
  const authError = useSelector(state=> state.logIn.logInError)
  const dispatch = useDispatch()

  const clearInputs = () =>{
    setEmail('')
    setPassword('')
  }
  
  const clearErrors = () =>{
    setEmailError('')
    setPasswordError('')
  }
      
  const handleSubmit = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    
    clearErrors()
    
    if(email.length===0){
      clearInputs()
      setEmailError("Email can't be empty")
      return
    }
    if(password.length===0){
      clearInputs()
      setPasswordError("Password can't be empty")
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
      dispatch(logIn({email, password, setLoading}))
    }
  }

  if (auth.uid) return <Redirect to='/' /> 
  
  return (
    <>
      <div className="login-wrapper">
        <div className="login-page-bg"></div>
        <Container className="login-container" maxWidth="xs">
          <Box
            className="login-box"
            boxShadow="5"
            textAlign="center"
            padding="2em"
            borderRadius="0.5em"
            style={{ backgroundColor: "#efefef"}}
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
            <Typography color="error" align="left" style={emailError ? {}: {display:"none"}}>
              {String(emailError)}
            </Typography>
            <br />
            <br />
            <TextField
              required
              type={!passwordHidden ? 'password' : 'text'}
              label="Password"
              variant="outlined"
              value = {password}
              onClick={() => setPasswordError('')}
              onChange={(e) =>setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" onClick={() => setPasswordHidden(!passwordHidden)} style={{cursor: 'pointer'}}>
                    {!passwordHidden ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                  </InputAdornment>
                ),
              }}
              fullWidth
              />
            <Typography color="error" align="left" style={passwordError ? {}:{display:"none"}}>
              {passwordError}
            </Typography>
            <br />
            <br/>
            <Typography color="error" align="center">
              {authError}
            </Typography>
            <br />
            <Typography color="secondary">
              <Link to="/forgot-password" className="link-tag">
                Forgot Password?
              </Link>
            </Typography>
            <br />
            {loading ? <CircularProgress color="secondary"/> : ''}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleSubmit}
              disabled={loading ? true : false}
            >
              Login
            </Button>
            <br />
            <br />
            <Typography color="secondary">
              Don't have an Account?{" "}
              <Link to="/signup" className="link-tag">
                Signup.
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default Login
