import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteBook from './DeleteBook'
import EditBook from './EditBook'

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#efefef',
    }
  },
  dropDown:{
    maxWidth: '50px'
  },
  bookTitle:{
    minWidth: '220px'
  },
  bookAuthor:{
    minWidth: '220px'
  },
  whereToFind:{
    minWidth: '150px'
  },
  totalBooks:{
    minWidth: '50px'
  },
  availableBooks:{
    minWidth: '50px'
  },
  addedOn:{
    minWidth: '150px'
  },
  action:{
    minWidth: '150px'
  }
})

const BookRow = ({book}) => {
  const classes = useStyles()
  const [dropDown, setDropDown] = useState(false)
  const [editBookOpen, setEditBookOpen] = useState(false)
  const [deleteBookOpen, setDeleteBookOpen] = useState(false)


  const getDate = date => {
    const dateInSeconds =  date ? date.seconds * 1000 : 0
    return dateInSeconds
  }
  
  return(
    <>
      <TableRow className={classes.root}>
        <TableCell className={classes.dropDown}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setDropDown(!dropDown)}
          >
            {dropDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.bookTitle}>
          {book.book_title}
        </TableCell>
        <TableCell className={classes.bookAuthor}>
          {book.book_author}
        </TableCell>
        <TableCell className={classes.whereToFind}>
          Department:<br/>{book.book_department},<br/> Rack: {book.book_rack}, Row: {book.book_row}
        </TableCell>
        <TableCell className={classes.totalBooks}>
          {book.book_total}
        </TableCell>
        <TableCell className={classes.availableBooks}>
          {book.book_available}
        </TableCell>
        <TableCell className={classes.addedOn}>
          {new Date(getDate(book.book_added_on)).toLocaleDateString("en-gb")}
        </TableCell>
        <TableCell className={classes.action}>
          <IconButton
            aria-label="edit book"
            size="medium"
            onClick={()=>setEditBookOpen(true)}
          >
            <EditIcon />
          </IconButton>
          <EditBook 
            book={book} 
            editBookOpen={editBookOpen}
            setEditBookOpen={setEditBookOpen}
          />&nbsp;
          <IconButton
            aria-label="delete book"
            size="medium"
            color="secondary"
            onClick={()=>setDeleteBookOpen(true)}
          >
            <DeleteIcon />
          </IconButton>
          <DeleteBook 
            book={book} 
            deleteBookOpen={deleteBookOpen}
            setDeleteBookOpen={setDeleteBookOpen}
          />
        </TableCell>
      </TableRow >  
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={dropDown} timeout="auto" unmountOnExit>
            <Box margin={1} >
              <Typography variant="h6" gutterBottom component="div">
              <u>Description</u>
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                {book.book_description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> 
    </>         
  )
}

export default BookRow
