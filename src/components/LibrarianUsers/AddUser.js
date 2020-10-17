import React, {useState} from "react";
import { useDispatch} from "react-redux";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {firestoreConnect} from 'react-redux-firebase';
import handleAddUserSubmit from '../../helpers/userFormHandler'

const AddUser = () => {
  // const users = useSelector(state=>{
  //   return state.firestore.ordered.users
  // }); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const dispatch = useDispatch();
  
  const clearInputs = () =>{
    setName('');
    setEmail('');
    setPhone('');
  }

  
  const clearErrors = () =>{
    setNameError('');
    setEmailError('');
    setPhoneError('');
  }

  return (
    <Container maxWidth="md">
      <Box
        className="add-user-box"
        boxShadow="5"
        textAlign="center"
        padding="2em"
        mt="1em"
        mb="1em"
        borderRadius="0.5em"
        style={{ backgroundColor: "#efefef" }}
      >
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            label="Full Name"
            variant="outlined"
            size="medium"
            value={name}
            onClick={clearErrors}
            onChange={(e)=>setName(e.target.value)}
            fullWidth
          />
          <TextField
            required
            label="Phone"
            type="tel"
            variant="outlined"
            size="medium"
            value={phone}
            onClick={clearErrors}
            onChange={(e)=>setPhone(e.target.value)}
            fullWidth
          />
          
          
        </div>
        <br/>
        <div className="input-fields-arranger">

        <Typography color="error" align="left">
            {nameError}
          </Typography>
          <Typography color="error" align="left">
            {phoneError}
          </Typography>
        </div>
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            size="medium"
            value={email}
            onClick={clearErrors}
            onChange={(e)=>setEmail(e.target.value)}
            fullWidth
          /> 
        </div>
        <br/>
        <Typography color="error" align="center" >
            {emailError}
          </Typography>
        <br />
        <div className="button-input-fields-arranger">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => handleAddUserSubmit(
              name, email, phone, 
              setNameError, setEmailError, setPhoneError, 
              dispatch, clearErrors)}
          >
            Add
          </Button>
          <Button variant="contained" color="secondary" size="large" onClick={clearInputs}>
            Clear
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default firestoreConnect(
  [
    {collection: 'users'}
  ]
  )(AddUser);
