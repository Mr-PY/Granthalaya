import React, { useState } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import TelegramIcon from "@material-ui/icons/Telegram"
import CloseIcon from "@material-ui/icons/Close"


const ReplyMessage = ({ sendReplyOpen, setSendReplyOpen, message }) => {
  
  const [replyButton, setReplyButton] = useState(false);

  const handleClose = () => {
    setSendReplyOpen(false)
  }

  return (
    <Dialog
      open={sendReplyOpen}
      onClose={handleClose}
      maxWidth='md'
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="title" style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
             Send Reply to User Message
          </Typography>
          <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Fade in={sendReplyOpen}>
          <Container maxWidth="md">
            <br />
            <div className="input-fields-arranger">
              <TextField
                label="To"
                value={message.sender_email}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
                size="medium"
                fullWidth
              />
            </div>
            <br />
            <br />
            <TextField
              label="Thier Message"
              value={message.message_body}
              InputProps={{
                readOnly: true,
              }}
              multiline
              rows={3}
              variant="filled"
              size="medium"
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Your Reply"
              placeholder="Enter your Reply to the user's message here."
              multiline
              rows={4}
              variant="outlined"
              size="medium"
              fullWidth
            />
            <br />
            <br />
            <div className="button-input-fields-arranger">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<TelegramIcon />}
              >
                Send
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

export default ReplyMessage
