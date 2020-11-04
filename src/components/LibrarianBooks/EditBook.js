import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
import CloseIcon from "@material-ui/icons/Close"
import EditIcon from "@material-ui/icons/Edit"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import handleEditBookSubmit from '../../helpers/editBookHandler'

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
  editBookImage:{
    height: "100px",
    width: "80px",
    backgroundSize: "contain",
  }
}))

const EditBook = ({ editBookOpen, setEditBookOpen, book }) => {
  const classes = useStyles()
  const imageTypes = ['image/png', 'image/jpeg', 'image/jpg']
  const [url, setUrl] = useState('')
  const [barCode, setBarCode] = useState('')
  const [barCodeError, setBarCodeError] = useState('')
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')
  const [author, setAuthor] = useState('')
  const [authorError, setAuthorError] = useState('')
  const [row, setRow] = useState('')
  const [rowError, setRowError] = useState('')
  const [rack, setRack] = useState('')
  const [rackError, setRackError] = useState('')
  const [totalUnits, setTotalUnits] = useState('')
  const [totalUnitsError, setTotalUnitsError] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState(null)
  const [imageError, setImageError] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const handleClose = () => {
    setUrl(book.book_image)
    setEditBookOpen(false)
  }

  const clearInputs = () => {

  }
  const clearErrors = () => {
    setBarCodeError('')
    setTitleError('')
    setAuthorError('')
    setRowError('')
    setRackError('')
    setTotalUnitsError('')
    setDescriptionError('')
    setUploadError('')
    setImageError('')
  }

  const handleImageAdd = (e) => {
    const selected = e.target.files[0]
    const imageReader = new FileReader()

    imageReader.onload = () =>{
        if(imageReader.readyState === 2){
            setUrl(imageReader.result)
        }
    }
    
    imageReader.readAsDataURL(selected)

    if ( selected && imageTypes.includes(selected.type)){
      setImage(selected) 
      setImageError('')

    }
    else{ 
      setImage(null) 
      setImageError('File not supported')
    }
  }
 
  useEffect(() => {
    setTitle(book.book_title)
    setBarCode(book.book_bar_code)
    setAuthor(book.book_author)
    setRow(book.book_row)
    setRack(book.book_rack)
    setTotalUnits(book.book_total)
    setDescription(book.book_description)
    setUrl(book.book_image)
  }, [book, editBookOpen])  

  return (
    <Dialog
      open={editBookOpen}
      onClose={handleClose}
      maxWidth='md'
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="title" style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
            Edit Book
          </Typography>
          <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Fade in={editBookOpen}>
            <Container maxWidth="md">
              <div className="input-fields-arranger">
                <Avatar 
                  alt="Book Image" 
                  variant="square"
                  src= {url}
                  className = {classes.editBookImage}
                />
                <input
                    accept="image/*"
                    id="edit-image-upload"
                    className={classes.input}
                    type="file"
                    onChange ={handleImageAdd}
                />          
                <label htmlFor="edit-image-upload">
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<PhotoCamera />}
                  >
                    Update
                  </Button>
                </label>
                <Typography style={{opacity:0, cursor: 'default' }}>
                  {'Empty'}
                </Typography>
                <TextField
                  label="Barcode"
                  placeholder={barCode}
                  variant="outlined"
                  size="medium"
                  error={barCodeError ? true: false}
                  helperText={barCodeError}
                  fullWidth
                  onClick={clearErrors}
                  onChange={(e)=>setBarCode(e.target.value)}
                />
              </div>
              <div className="input-fields-arranger" 
                style={imageError ? {display:'block'} : {display:'none'}}
              >
                <Typography color="error" align="left">
                  {imageError}
                </Typography>
              </div>
              <div className="input-fields-arranger" 
                style={uploadError ? {display:'block'} : {display:'none'}}
              >
                <Typography color="error" align="left">
                  {uploadError}
                </Typography>
              </div>
              <br/>
              <div className="input-fields-arranger">
                <TextField
                  label="Book Title"
                  variant="outlined"
                  size="medium"
                  placeholder={title}
                  error={titleError ? true : false}
                  helperText={titleError}
                  onClick={clearErrors}
                  onChange={(e)=>setTitle(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Author"
                  variant="outlined"
                  size="medium"
                  placeholder={author}
                  error={authorError ? true : false}
                  helperText={authorError}
                  onClick={clearErrors}
                  onChange={(e)=>setAuthor(e.target.value)}
                  fullWidth
                />
              </div>
              <br />
            <div className="input-fields-arranger">
              <TextField
                label="Row"
                variant="outlined"
                size="medium"
                placeholder={row}
                error={rowError ? true : false}
                helperText={rowError}
                onClick={clearErrors}
                onChange={(e)=>setRow(e.target.value)}
                fullWidth
              />
              <TextField
                label="Rack"
                variant="outlined"
                size="medium"
                placeholder={rack}
                error={rackError ? true : false}
                helperText={rackError}
                onClick={clearErrors}
                onChange={(e)=>setRack(e.target.value)}
                fullWidth
              />
              <TextField
                label="Total Units"
                variant="outlined"
                size="medium"
                placeholder={totalUnits}
                error={totalUnitsError ? true : false}
                helperText={totalUnitsError}
                onClick={clearErrors}
                onChange={(e)=>setTotalUnits(e.target.value)}
                fullWidth
              />
            </div>
            <br />
            <TextField
              label="Book Description"
              multiline
              rows={6}
              variant="outlined"
              size="medium"
              placeholder={description}
              error={descriptionError ? true : false}
              helperText={descriptionError}
              onClick={clearErrors}
              onChange={(e)=>setDescription(e.target.value)}
              fullWidth
            />
            <br/>
            <br/>
            <div className="input-fields-arranger" style={uploading ? {display:'block'} : {display:'none'}}>
              <LinearProgress variant="determinate" value={progress} />
              <br/>
            </div> 
            <div className="button-input-fields-arranger">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<EditIcon />}
                disabled={ uploading ? true : false }
                onClick={() => handleEditBookSubmit(
                  book.id, barCode, title, author, row, 
                  rack, totalUnits, description, url, image, book,
                  setUploading, setLoading, setProgress, setUrl, setEditBookOpen,
                  setBarCodeError, setTitleError,  setAuthorError, setRowError,
                  setRackError, setTotalUnitsError, setDescriptionError, setUploadError,
                  dispatch, clearInputs, clearErrors
                )}
              >
                Edit
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </Container>
        </Fade>
      </DialogContent>
    </Dialog>
  )
}

export default EditBook
