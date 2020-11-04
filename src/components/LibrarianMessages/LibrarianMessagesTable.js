import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import Toolbar from '@material-ui/core/Toolbar'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import SearchIcon from "@material-ui/icons/Search"
import useTable from '../useTable/useTable'
import MessageRow from "./MessageRow"


const useStyles = makeStyles(theme=>({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
      width: '100%'
  }
}))

const headCells = [
  { id: 'dropDown', label: ' ', disableSorting: true },
  { id: 'sender_email', label: 'Email' },
  { id: 'message_type', label: 'Type' },
  { id: 'sent_on', label: 'Sent On'},
  {id: 'Reply', label: 'Send Reply', disableSorting: true }
]

const LibrarianMessagesTable = ({ messages }) => {

  const classes = useStyles()
  const [filteredValues, setFilteredValues] = useState(messages)

  const searchFilter = e => {
      let search = e.target.value
      const temp = messages.filter(message =>message.sender_email.toLowerCase().includes(search.toLowerCase()) )
      setFilteredValues(temp)
  }

  const {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting,
      emptyRows
  } = useTable( messages, headCells, filteredValues, 'sent_on')

  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <TextField
            label="Search Messages"
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
            {recordsAfterPagingAndSorting().map((message) => (
              <MessageRow message={message} key={message.id}/>
            ))}
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

export default LibrarianMessagesTable
