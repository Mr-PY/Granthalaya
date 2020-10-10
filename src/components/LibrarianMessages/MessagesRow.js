import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const MessagesRow = ({ row, reply, setReply }) => {
  const [open, setOpen] = useState(false);
  const classes = makeStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  });

  return (
    <>
      {console.log(`MessagesRow: ${reply}`)}
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
        <TableCell
          component="th"
          scope="row"
          align="right"
          style={{ width: 50 }}
        >
          {row.messageId}
        </TableCell>
        <TableCell style={{ width: 200 }}>{row.senderName}</TableCell>
        <TableCell style={{ width: 200 }}>{row.senderEmail}</TableCell>
        <TableCell style={{ width: 100 }}>{row.messageDate}</TableCell>
        <TableCell style={{ width: 50 }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TelegramIcon />}
            onClick={() => setReply(!reply)}
          >
            Reply
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                <u>Message</u>
              </Typography>
              <Typography>{row.messageBody}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default MessagesRow;
