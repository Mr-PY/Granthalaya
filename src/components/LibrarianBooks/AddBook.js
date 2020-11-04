import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import LinearProgress from '@material-ui/core/LinearProgress'
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import CloseIcon from "@material-ui/icons/Close"
import handleAddBookSubmit from '../../helpers/bookFormHandler'


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
}))
const AddBook = ({books, addBookOpen, setAddBookOpen}) => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [department, setDepartment] = useState('')
  const [rack, setRack] = useState('')
  const [row, setRow] = useState('')
  const [totalUnits, setTotalUnits] = useState('')
  const [barCode, setBarCode] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState('')
  const [authorError, setAuthorError] = useState('')
  const [imageError, setImageError] = useState(null)
  const [uploadError, setUploadError] = useState('')
  const [departmentError, setDepartmentError] = useState('')
  const [rackError, setRackError] = useState('')
  const [rowError, setRowError] = useState('')
  const [totalUnitsError, setTotalUnitsError] = useState('')
  const [barCodeError, setBarCodeError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const imageTypes = ['image/png', 'image/jpeg', 'image/jpg']
  const dispatch = useDispatch()
  
  const clearInputs = () =>{
    setTitle('')
    setAuthor('')
    setImage(null)
    setDepartment('')
    setRack('')
    setRow('')
    setTotalUnits('')
    setDescription('')
    setBarCode('')
  }

  const clearErrors = () =>{
    setTitleError('')
    setAuthorError('')
    setImageError(null)
    setDepartmentError('')
    setRackError('')
    setRowError('')
    setTotalUnitsError('')
    setDescriptionError('')
    setBarCodeError('')
  }

  const handleImageVerification = (e) =>{
    const selected = e.target.files[0]
    if ( selected && imageTypes.includes(selected.type)){
      setImage(selected) 
      setImageError('')
    }
    else{ 
      setImage(null) 
      setImageError('File not supported')
    }
  }

  const handleClose = () => {
    setAddBookOpen(false)
  }

  return (
    <Dialog
      open={addBookOpen}
      onClose={handleClose}
      maxWidth='md'
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="title" style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
            Add a New Book
          </Typography>
          <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Fade in={addBookOpen}>
          <Container maxWidth="md">
            <div className="input-fields-arranger">
              <TextField
                required
                label="Book Title"
                variant="outlined"
                size="medium"
                value={title}
                error={titleError ? true: false}
                helperText={titleError}
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
                error={authorError ? true : false}
                helperText={authorError}
                onClick={clearErrors}
                onChange={(e)=>setAuthor(e.target.value)}
                fullWidth
              />
            </div>
            <br/>
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
            <div className="input-fields-arranger">
              <Typography color="error" align="left">
                {imageError}
              </Typography>
              <br />
            </div>
            <div className="input-fields-arranger">
              <TextField
                required
                label="Department"
                variant="outlined"
                size="medium"
                value={department}
                error={departmentError ? true : false}
                helperText={departmentError}
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
                error={rackError ? true : false}
                helperText={rackError}
                onClick={clearErrors}
                onChange={(e)=>setRack(e.target.value)}
                fullWidth
              />
            </div>
            <br/>
            <div className="input-fields-arranger">
              <TextField
                required
                label="Row"
                variant="outlined"
                size="medium"
                value={row}
                error={rowError ? true : false}
                helperText={rowError}
                onClick={clearErrors}
                onChange={(e)=>setRow(e.target.value)}
                fullWidth
              />
              <TextField
                required
                label="Total Units"
                variant="outlined"
                size="medium"   
                value={totalUnits}
                error={totalUnitsError ? true : false}
                helperText={totalUnitsError}    
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
              error={barCodeError ? true : false}
              helperText={barCodeError}
              onClick={clearErrors}
              onChange={(e)=>setBarCode(e.target.value)}
              fullWidth
            />
            </div>
            <br/>
            <TextField
              label="Book Description"
              multiline
              rows={6}
              variant="outlined"
              size="medium"
              value={description}
              error={descriptionError ? true : false}
              helperText={descriptionError}
              onClick={clearErrors}
              onChange={(e)=>setDescription(e.target.value)}
              fullWidth
            />
            <br/>
            <div className="input-fields-arranger">
              <Typography color="error" align="left">
                {uploadError}
              </Typography>
              <br/>
            </div>
            <div className="input-fields-arranger" style={uploading ? {display:'block'} : {display:'none'}}>
              <br/>
              <LinearProgress variant="determinate" value={progress} />
              <br/>
            </div>
            <div className="button-input-fields-arranger">
              <Button
                variant="contained"
                color="primary"
                size="large"
                disabled={uploading ? true : false}
                startIcon={<AddIcon />}
                onClick={() => handleAddBookSubmit(
                  author, barCode, department, description, image, 
                  rack, row, title, totalUnits, url,
                  setProgress, setUploading, setUrl,
                  setAuthorError, setBarCodeError, setDepartmentError, setDescriptionError,
                  setImageError, setRackError, setRowError, setTitleError, setTotalUnitsError,
                  setUploadError, setAddBookOpen, dispatch, clearInputs, clearErrors)}
              >
                Add
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                onClick={clearInputs}
              >
                Clear
              </Button>
            </div>
          </Container>
        </Fade>
      </DialogContent>
    </Dialog>
    
  )
}

export default AddBook
