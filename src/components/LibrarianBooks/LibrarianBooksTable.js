import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import QueueIcon from '@material-ui/icons/Queue'
import useTable from '../useTable/useTable'
import BookRow from './BookRow'
import AddBook from './AddBook'


const useStyles = makeStyles(theme=>({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
  pageContent: {
    margin: `${theme.spacing(2)} ${theme.spacing(5)}`,
    padding: theme.spacing(3)
  },
  toolbar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  searchInput: {
      width: '75%'
  },
  button:{
    width: '150px',
    height: '55px',
  },
}))

const headCells = [
  { id: 'dropDown', label: ' ', disableSorting: true },
  { id: 'book_title', label: 'Title' },
  { id: 'book_author', label: 'Author' },
  { id: 'book_department', label: 'Where To Find' },
  { id: 'book_total', label: 'Total' },
  { id: 'book_available', label: 'Available' },
  { id: 'book_added_on', label: 'Added On'},
  { id: 'book_actions', label: 'Actions', disableSorting: true },
]
const LibrarianBooksTable = ({ books }) => {
  
  const classes = useStyles()
  const [addBookOpen, setAddBookOpen] = useState(false)
  const [filteredValues, setFilteredValues] = useState(books)  
  
  const searchFilter = e => {
    let search = e.target.value
    const temp = books.filter(book =>
        book.book_title.toLowerCase().includes(search.toLowerCase()) || 
        book.book_author.toLowerCase().includes(search.toLowerCase())||
        book.book_department.toLowerCase().includes(search.toLowerCase()))
    setFilteredValues(temp)
  }      
  
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    emptyRows
  } = useTable( books, headCells, filteredValues, 'book_title')
  

  return ( 
    <>
      <Paper className={classes.pageContent}>
        <Toolbar className={classes.toolbar}>
          <TextField
            label="Search Books"
            variant="outlined"
            size="medium"
            className={classes.searchInput}
            InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                  {<SearchIcon/>}
                </InputAdornment>
              )
            }}
            onChange={searchFilter}
          />
          <div className={classes.button}>
            <Button  
              color="primary" 
              variant="contained"
              size="large"
              className={classes.button}
              onClick={()=>setAddBookOpen(true)}
              startIcon={<QueueIcon/>}
            >
              Add Book
            </Button>
            <AddBook
              books={books} 
              addBookOpen={addBookOpen}
              setAddBookOpen={setAddBookOpen}
            />
          </div>
        </Toolbar>
        <TblContainer>
          <TblHead/>
          <TableBody>
            {books && recordsAfterPagingAndSorting().map((book) => {
              return <BookRow book={book} key={book.id}/>
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: (53 * emptyRows) }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </TblContainer>
        <TblPagination/>
      </Paper>
    </>
  )
}

export default LibrarianBooksTable;
