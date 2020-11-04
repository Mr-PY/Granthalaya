import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TelegramIcon from "@material-ui/icons/Telegram"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ReplyMessage from './ReplyMessage'

const MessageRow = ({ message }) => {
  const [open, setOpen] = useState(false)
  const [sendReplyOpen, setSendReplyOpen] = useState(false)
  
  const classes = makeStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  })

  const getDate = date => {
    const dateInSeconds =  date ? date.seconds * 1000 : 0
    return dateInSeconds
  }

  return(
    <>
      <TableRow className={classes.root}>
        <TableCell style={{ width: 30 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          {message.sender_email}
        </TableCell>
        <TableCell>
          {message.message_type}
        </TableCell>
        <TableCell>
          {new Date(getDate(message.sent_on)).toLocaleDateString("en-gb")}
        </TableCell>
        <TableCell style={{ width: 50 }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TelegramIcon />}          
            onClick={()=>setSendReplyOpen(true)}
          >
            Reply
          </Button>
          <ReplyMessage
            sendReplyOpen={sendReplyOpen}
            setSendReplyOpen={setSendReplyOpen}
            message={message}
          />
        </TableCell>
      </TableRow> 
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
              <u>Message</u>
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                {message.message_body}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default MessageRow
