import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import LinearProgress from '@material-ui/core/LinearProgress';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {firestoreConnect} from 'react-redux-firebase';
import handleAddBookSubmit from '../../helpers/bookFormHandler';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    height: "55px",
  },
}));
const AddBook = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [department, setDepartment] = useState('');
  const [rack, setRack] = useState('');
  const [row, setRow] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const [barCode, setBarCode] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [imageError, setImageError] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [departmentError, setDepartmentError] = useState('');
  const [rackError, setRackError] = useState('');
  const [rowError, setRowError] = useState('');
  const [totalUnitsError, setTotalUnitsError] = useState('');
  const [barCodeError, setBarCodeError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const imageTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const dispatch = useDispatch();

  const books = useSelector(state=> state.firestore.ordered.books );
  
  const bookId = () =>{
    if(!books){
      return 0;
    }
    else{
      return books.length + 1
    }
  }
  
  const clearInputs = () =>{
    setTitle('');
    setAuthor('');
    setImage(null);
    setDepartment('');
    setRack('');
    setRow('');
    setTotalUnits('');
    setDescription('');
    setBarCode('');
  }

  
  const clearErrors = () =>{
    setTitleError('');
    setAuthorError('');
    setImageError(null);
    setDepartmentError('');
    setRackError('');
    setRowError('');
    setTotalUnitsError('');
    setDescriptionError('');
    setBarCodeError('');
  }

  const handleImageVerification = (e) =>{
    const selected = e.target.files[0];
    if ( selected && imageTypes.includes(selected.type)){
      setImage(selected); 
      setImageError('');
    }
    else{ 
      setImage(null); 
      setImageError('File not supported');
    }
  }

  return (
    <Container maxWidth="md">
      <Box
        className="add-book-box"
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
            label="Book Title"
            variant="outlined"
            size="medium"
            value={title}
            onClick={clearErrors}
            onChange={(e)=>setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            required
            label="Book Author"
            variant="outlined"
            size="medium"
            value={author}
            onClick={clearErrors}
            onChange={(e)=>setAuthor(e.target.value)}
            fullWidth
          />
        </div>
        <br/>
        <div className="input-fields-arranger">
          <Typography color="error" align="left">
            {titleError}
          </Typography>
          <Typography color="error" align="left">
            {authorError}
          </Typography>
        </div>
        <br />
        <div className="input-fields-arranger">
          <TextField
            label="Add Image"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            size="medium"
            value = {image ? image.name : " "}
            fullWidth
          />
          
          <input
            accept="image/*"
            className={classes.input}
            id="book-image-upload"
            type="file"
            onChange ={handleImageVerification}
          />
          <label htmlFor="book-image-upload">
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              component="span"
              startIcon={<PhotoCamera />}
            >
              Add
            </Button>
          </label>
        </div>
        <br/>
        <div className="input-fields-arranger" style={uploading ? {display:'block'} : {display:'none'}}>
          <LinearProgress variant="determinate" value={progress} />
        </div>
        <div className="input-fields-arranger">
          <Typography color="error" align="left">
            {imageError}
          </Typography>
        </div>
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            label="Department"
            variant="outlined"
            size="medium"
            value={department}
            onClick={clearErrors}
            onChange={(e)=>setDepartment(e.target.value)}
            fullWidth
          />
          <TextField
            required
            label="Rack"
            variant="outlined"
            size="medium"
            value={rack}
            onClick={clearErrors}
            onChange={(e)=>setRack(e.target.value)}
            fullWidth
          />
        </div>
        <br/>
        <div className="input-fields-arranger">
          <Typography color="error" align="left">
            {departmentError}
          </Typography>
          <Typography color="error" align="left">
            {rackError}
          </Typography>
        </div>
        <br/>
        <div className="input-fields-arranger">
          <TextField
            required
            label="Row"
            variant="outlined"
            size="medium"
            value={row}
            onClick={clearErrors}
            onChange={(e)=>setRow(e.target.value)}
            fullWidth
          />
          <TextField
            required
            abel="Total Units"
            variant="outlined"
            size="medium"            
            value={totalUnits}
            onClick={clearErrors}
            onChange={(e)=>setTotalUnits(e.target.value)}
            fullWidth
          />
          <TextField
          required
          label="Bar Code"
          variant="outlined"
          size="medium"            
          value={barCode}
          onClick={clearErrors}
          onChange={(e)=>setBarCode(e.target.value)}
          fullWidth
        />
        </div>
        <br/>
        <div className="input-fields-arranger">
          <Typography color="error" align="left">
            {rowError}
          </Typography>
          <Typography color="error" align="left">
            {totalUnitsError}
          </Typography>
          <Typography color="error" align="left">
            {barCodeError}
          </Typography>
        </div>
        <br/>
        <TextField
          label="Book Description"
          multiline
          rows={4}
          variant="outlined"
          size="medium"
          value={description}
          onClick={clearErrors}
          onChange={(e)=>setDescription(e.target.value)}
          fullWidth
        />
        <br/>
        <div className="input-fields-arranger">
          <Typography color="error" align="left">
            {descriptionError}
          </Typography>
        </div>
        <div className="input-fields-arranger">
          <Typography color="error" align="left">
            {uploadError}
          </Typography>
        </div>
        <br/>
        <div className="button-input-fields-arranger">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => handleAddBookSubmit(
              bookId(), title, author, image, url, setProgress, setUrl, setUploading,
              department, rack, row, totalUnits, description, barCode,
              setTitleError, setAuthorError, setImageError, setUploadError,
              setDepartmentError, setRackError, setRowError,
              setTotalUnitsError, setDescriptionError, setBarCodeError,
              dispatch, clearInputs, clearErrors)}
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
    {collection: 'books'}
  ]
  )(AddBook);
