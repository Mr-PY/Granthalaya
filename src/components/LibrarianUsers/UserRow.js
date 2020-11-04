import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import SearchIcon from "@material-ui/icons/Search"
import useTable from '../useTable/useTable'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditUser from "./EditUser"
import AssignBooksToUser from "./AssignBooksToUser"

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
  userName:{
    minWidth: '150px'
  },
  userEmail:{
    minWidth: '220px'
  },
  userPhone:{
    minWidth: '120px'
  },
  reservedLength:{
    minWidth: '50px'
  },
  borrowedLength:{
    minWidth: '50px'
  },
  joinedOn:{
    minWidth: '150px'
  },
  actions:{
    minWidth: '150px'
  }
})

const UserRow = ({ user, books }) => {
  const classes = useStyles()
  const [dropDown, setDropDown] = useState(false)
  // const [editUserOpen, setEditUserOpen] = useState(false)
  const [assignBookOpen, setAssignBookOpen] = useState(false)

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
        <TableCell className={classes.userName}>
          {user.user_name}
        </TableCell>
        <TableCell className={classes.userEmail}>
          {user.user_email}
        </TableCell>
        <TableCell className={classes.userPhone}>
          {user.user_phone}
        </TableCell>
        <TableCell className={classes.reservedLength}>
          {user.reserved_list.length}
        </TableCell>
        <TableCell className={classes.borrowedLength}>
          {user.borrowed_list.length}
        </TableCell>
        <TableCell className={classes.joinedOn}>
          {new Date(getDate(user.joined_on)).toLocaleDateString("en-gb")}
        </TableCell>
        <TableCell className={classes.actions}>
          {/* <IconButton 
            aria-label="edit user details"
            size="medium"
            onClick={()=>setEditUserOpen(true)}
          >
            <EditIcon/>
          </IconButton>
          <EditUser 
            user={user}
            editUserOpen={editUserOpen} 
            setEditUserOpen={setEditUserOpen}
          />&nbsp; */}
          <IconButton 
            aria-label="assign books to user"
            size="medium"
            color="primary"
            onClick={()=>setAssignBookOpen(true)}
          >
            <PostAddIcon user={ user }/>
          </IconButton>
          <AssignBooksToUser
            user={user}
            books={books}
            assignBookOpen={assignBookOpen} 
            setAssignBookOpen={setAssignBookOpen}
          />
        </TableCell>
      </TableRow>
    </>
  )
};

export default UserRow;
