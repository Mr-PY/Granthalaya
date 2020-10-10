import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const BookRow = (props) => {
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
          {row.bookId}
        </TableCell>
        <TableCell style={{ width: 200 }}>{row.bookName}</TableCell>
        <TableCell style={{ width: 150 }}>{row.bookAuthor}</TableCell>
        <TableCell style={{ width: 200 }}>{row.whereToFind}</TableCell>
        <TableCell align="right" style={{ width: 50 }}>
          {row.totalBooks}
        </TableCell>
        <TableCell align="right" style={{ width: 50 }}>
          {row.availableBooks}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                <u>Description</u>
              </Typography>
              <Typography>{row.bookDescription}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BookRow;
