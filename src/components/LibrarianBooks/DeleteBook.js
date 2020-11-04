import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import DeleteIcon from "@material-ui/icons/Delete"
import handleDeleteBook from "../../helpers/deleteBookHandler"

const DeleteBook = ({ deleteBookOpen, setDeleteBookOpen, book }) => {
  const [deleting, setDeleting] = useState(false)
  const dispatch = useDispatch()

  const handleClose = () => {
    setDeleteBookOpen(false)
  }

  return (
    <Dialog
      open={deleteBookOpen}
      onClose={handleClose}
      maxWidth='sm'
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="title" style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
             Delete Book?
          </Typography>
          <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Fade in={deleteBookOpen}>
          <Container maxWidth="md">
            <Typography>
              Are you sure that you want to delete below book?
            </Typography>
            <br />
            <div className="input-fields-arranger">
              <TextField
                label="Book Title"
                value={book.book_title}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
                size="medium"
                fullWidth
              />
            </div>
            <br />
            <div className="input-fields-arranger">
              <TextField
                label="Author"              
                value={book.book_author}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
                size="medium"
                fullWidth
              />
            </div>
            <br />
            <div className="button-input-fields-arranger">
              <Button
                variant="contained"
                color="secondary" 
                size="large"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteBook(book,
                  setDeleting, setDeleteBookOpen, dispatch)}
                >
                Delete
              </Button>
              <Button 
                variant="contained" 
                color="default"
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

export default DeleteBook
