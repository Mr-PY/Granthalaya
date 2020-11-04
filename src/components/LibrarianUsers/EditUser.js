import React from "react"
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Fade from '@material-ui/core/Fade'
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"

const EditUser = (props) => {
  const {editUserOpen, setEditUserOpen} = props

  const handleClose = () => {
    setEditUserOpen(false)
  }

  return (
    
    <Dialog
      open={editUserOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      // classes={{paper: classes.dialogBackground}}
    >
      <DialogTitle id="alert-dialog-title">
        <div className="title" style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
             Edit User Details
          </Typography>
          <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Fade in={editUserOpen}>
          <Container>
              <br />
              <div className="input-fields-arranger">
                <TextField
                  label="User Id"
                  variant="outlined"
                  size="medium"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ height: "57px" }}
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </div>
              <br />
              <br />
              <div className="input-fields-arranger">
                <TextField
                  required
                  label="Full Name"
                  variant="outlined"
                  size="medium"
                  fullWidth
                />
                <TextField
                  required
                  label="Phone"
                  variant="outlined"
                  size="medium"
                  fullWidth
                />
              </div>
              <br />
              <br />
              <div className="input-fields-arranger">
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  size="medium"
                  fullWidth
                />
              </div>
              <br />
              <br />
              <div className="button-input-fields-arranger">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button variant="contained" color="secondary" size="large">
                  Cancel
                </Button>
              </div>
              <br/>
          </Container>
        </Fade>
      </DialogContent>
    </Dialog>
    
  )
}

export default EditUser
