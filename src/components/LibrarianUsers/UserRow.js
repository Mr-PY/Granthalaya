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

const UserRow = (props) => {
  const { row } = props;
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
          {row.userId}
        </TableCell>
        <TableCell style={{ width: 200 }}>{row.userName}</TableCell>
        <TableCell style={{ width: 200 }}>{row.userEmail}</TableCell>
        <TableCell style={{ width: 100 }}>{row.userPhone}</TableCell>
        <TableCell align="right" style={{ width: 50 }}>
          {row.booksBorrowed}
        </TableCell>
        <TableCell style={{ width: 50 }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TelegramIcon />}
          >
            Notify
          </Button>
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
                <u>Borrowed Books</u>
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
                  {row.borrowedBooksDetails.map((borrowedBooksRow) => (
                    <TableRow key={borrowedBooksRow.date}>
                      <TableCell component="th" scope="row">
                        {borrowedBooksRow.id}
                      </TableCell>
                      <TableCell>{borrowedBooksRow.name}</TableCell>
                      <TableCell align="right">
                        {borrowedBooksRow.date}
                      </TableCell>
                      <TableCell align="right">
                        {borrowedBooksRow.daysLeft}
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