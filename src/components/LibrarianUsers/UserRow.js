import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import calculateRemainingTime from '../../helpers/RemainingTimeCalculater'

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const UserRow = ({user, profile}) => {

  const [open, setOpen] = useState(false);
  const classes = useStyles()

  const getDate = (date) => {
    const dateInSeconds =  date ? date.seconds * 1000 : 0
    return dateInSeconds
  }

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell style={{ maxWidth: 30 }}>
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
          style={{ minWidth: 200 }}
        >
          {user.id}
        </TableCell>
        <TableCell style={{ width: 200 }}>{user.user_name}</TableCell>
        <TableCell style={{ width: 200 }}>{user.user_email}</TableCell>
        <TableCell style={{ width: 100 }}>{user.user_phone}</TableCell>
        <TableCell align="right" style={{ width: 80 }}>
          {user.reserved_list.length}
        </TableCell>
        <TableCell align="right" style={{ width: 80 }}>
          {user.borrowed_list.length}
        </TableCell>
        <TableCell align="center" style={{ maxWidth: 150 }}>
          {new Date(getDate(user.joined_on)).toLocaleDateString("en-gb")}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: "5em" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                Reserved Books
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Slno</TableCell>
                    <TableCell>Book Title</TableCell>
                    <TableCell align="right">Reserved On</TableCell>
                    <TableCell align="right">Time Left</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.reserved_list.map((reserved_book) => (
                    <TableRow key={reserved_book.book_id}>
                      <TableCell component="th" scope="row">
                        {reserved_book.book_id}
                      </TableCell>
                      <TableCell>{reserved_book.book_title}</TableCell>
                      <TableCell align="right">
                        {new Date(getDate(reserved_book.reserved_on)).toLocaleDateString("en-gb")}
                      </TableCell>
                      <TableCell align="right">
                        {calculateRemainingTime(profile, reserved_book.reserved_on, 'reserved')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                Borrowed Books
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Slno</TableCell>
                    <TableCell>Book Title</TableCell>
                    <TableCell align="right">Borrowed On</TableCell>
                    <TableCell align="right">Days Left</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.borrowed_list.map((borrowed_book) => (
                    <TableRow key={borrowed_book.book_id}>
                      <TableCell component="th" scope="row">
                        {borrowed_book.book_id}
                      </TableCell>
                      <TableCell>{borrowed_book.book_title}</TableCell>
                      <TableCell align="right">
                      {new Date(getDate(borrowed_book.borrowed_on)).toLocaleDateString("en-gb")}
                      </TableCell>
                      <TableCell align="right">
                        {calculateRemainingTime(profile, borrowed_book.borrowed_on, 'borrowed')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserRow;
