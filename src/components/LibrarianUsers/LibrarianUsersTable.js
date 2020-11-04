import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import Toolbar from '@material-ui/core/Toolbar'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import SearchIcon from "@material-ui/icons/Search"
import useTable from '../useTable/useTable'
import UserRow from "./UserRow"

const useStyles = makeStyles(theme=>({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
  table:{
    minWidth: "960px",
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
      width: '100%'
  },
  buttons:{
    width: '30%',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-evenly'
  },
  button:{
    height: 55,
    '& *':{
      fontSize: '28px',
    }
  }
}))

const headCells = [
  { id: 'dropDown', label: ' ', disableSorting: true },
  { id: 'user_name', label: 'Name' },
  { id: 'user_email', label: 'Email' },
  { id: 'user_phone', label: 'Phone' },
  { id: 'reserved_list', label: 'Reserved' },
  { id: 'borrowed_list', label: 'Borrowed'},
  { id: 'joined_on', label: 'Joined On'},
  { id: 'actions', label: 'Actions', disableSorting: true},
]

const LibrarianUsersTable = ({ users }) => {
  const classes = useStyles()
  const books = useSelector(state => state.firestore.ordered.books)
  const [filteredValues, setFilteredValues] = useState(users)
  let temporarySearchResults = ''
  console.log("Filtered values are: ", filteredValues)

  let searchFilter = (e) => {
    let search = e.target.value
    temporarySearchResults = users.filter(user =>
      user.user_name.toLowerCase().includes(search.toLowerCase()) || 
      user.user_email.toLowerCase().includes(search.toLowerCase())||
      user.user_phone.toLowerCase().includes(search.toLowerCase()))
    setFilteredValues(temporarySearchResults)
  }  

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    emptyRows
  } = useTable( users, headCells, filteredValues, 'user_name')
  
  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar className={classes.toolbar}>
          <TextField
              label="Search Users"
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
        </Toolbar>
        <TblContainer>
          <TblHead/>
          <TableBody>
            {users && recordsAfterPagingAndSorting().map((user) => {
              return <UserRow user={user} key={user.id} books={books}/>
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


export default firestoreConnect(
  [
    {collection: 'books'}
  ]
)(LibrarianUsersTable)
