import React from "react"
import "./Book.css"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "200px",
    height: "200px",
    maxWidth: "320px",
    padding: 0,
    margin:0,
    backgroundImage: 'radial-gradient(circle, #ffffff 0%, #ecf6ff 10%, #e0f0ff 30%, #d0e7fd 40%, #c0dffc 60%, #b0d8fd 80%, #a0d0fa 100%)',
    // backgroundImage: 'linear-gradient(-50deg, rgba(121, 194, 243, 1) 22.6%, rgb(160, 214, 250) 40%, rgb(204, 233, 252) 60%, rgb(255, 210, 210) 80%, rgb(255, 214, 214) 100%)',
    // backgroundImage: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
  },
}))

const setMaxTextCharacters = (text) => {
  const maxCharacters = 25
  const textLength = text.length
  const slicedText = text.slice(0, maxCharacters)
  if(textLength > maxCharacters){
    return `${slicedText}.....`
  }
  return text.slice(0, maxCharacters)
}

const Book = ({book}) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent className="book-content">
        <div className="book-img">
          <img src={book.book_image} alt={book.book_title}/>
        </div>
        <div className="book-details">
          <Typography variant="h6" color="textSecondary" component="p" style={{lineHeight:"24px", paddingBottom:"10px"}}>
          {setMaxTextCharacters(book.book_title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {setMaxTextCharacters(book.book_author)}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Available Units: {book.book_available}
          </Typography>
        </div>
      </CardContent>
      <CardActions className="book-actions">
        <Button
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          disableElevation
          to={"/book-details" + book.id}
          component={Link}
          props={book.id}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Book
