import React, {useState} from "react"
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Fade from '@material-ui/core/Fade'
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography"
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import AddIcon from "@material-ui/icons/Add"
import CloseIcon from "@material-ui/icons/Close"
// import EditIcon from "@material-ui/icons/Edit"

const AssignBooksToUser = (props) => {
    const { assignBookOpen, setAssignBookOpen, user, books } = props
    const [filteredValues, setFilteredValues] = useState(books)  

    const searchFilter = e => {
        let search = e.target.value
        const temp = books.filter(book =>
            book.book_title.toLowerCase().includes(search.toLowerCase()) || 
            book.book_author.toLowerCase().includes(search.toLowerCase())||
            book.book_department.toLowerCase().includes(search.toLowerCase()))
        setFilteredValues(temp)
    } 

    const handleClose = () => {
        setAssignBookOpen(false)
        setFilteredValues(books)
    }

    return (
        <Dialog
            open={assignBookOpen}
            maxWidth="md"
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            <div className="title" style={{display: "flex"}}>
                <Typography variant="h6" component="div" style={{flexGrow: 1}}>
                    Assign Books To The User
                </Typography>
                <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
            </div>
            </DialogTitle>
            <DialogContent dividers>
                <Fade in={assignBookOpen}>
                    <Container className="assign-books-container">
                        <br />
                        <div className="input-fields-arranger">
                            <TextField
                                label="Selected User"
                                value={user.user_name}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                fullWidth
                                size="medium"
                            />
                        </div>
                        <br />
                        <br />
                        <div className="input-fields-arranger">
                        <TextField
                            label="Search Books"
                            variant="outlined"
                            size="medium"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        {<SearchIcon/>}
                                    </InputAdornment>
                                )
                            }}
                            fullWidth
                            onChange={searchFilter}
                        />
                        </div>
                        <br />
                        <br />
                        <div className="input-fields-arranger assign-books-books-list">
                            {books && filteredValues.map((book) => {
                                return (
                                    <Card className="assign-books-book-card" key={book.id}>
                                        <CardContent className="profile-book-content">
                                            <div className="assign-books-book-img">
                                                <img src={book.book_image} alt={book.book_title}/>
                                            </div>
                                            <div className="profile-book-details">
                                                <Typography variant="h6" color="textPrimary" component="p" style={{lineHeight:"24px", paddingBottom:"10px"}}>
                                                    {book.book_title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" component="p" >
                                                    {book.book_author}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        <div className="profile-book-btns">
                                            <Button
                                            variant="contained"
                                            disabled={book.book_available === 0 ? true : false}
                                            size="large"
                                            color="primary"
                                            startIcon={<AddIcon/>}
                                            // onClick={  () => handleBookReturn(id, profile, book, books, dispatch)}
                                            >
                                                Assign
                                            </Button>
                                        </div>
                                    </Card>
                                )
                            })}
                            
                        </div>
                        <br />
                    </Container>
                </Fade>
            </DialogContent>
      </Dialog>    
    )
}

export default AssignBooksToUser
