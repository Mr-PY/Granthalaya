import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import "./BookDetails.css";
import { Link, useHistory } from "react-router-dom";

const BookDetails = () => {
  const history = useHistory();
  return (
    <>
      <Container className="book-details-container">
        <Button
          variant="outlined"
          className="close-btn"
          color="secondary"
          size="large"
          onClick={() => history.goBack()}
        >
          <i className="fas fa-times">&nbsp;Close </i>
        </Button>

        <br />
        <div className="book-top-row">
          <img
            className="book-img"
            src={require("../assets/books/advanced_java.jpg")}
            alt="Advanced Java Book"
          />
          <div className="where-to-find">
            <Typography variant="h6" color="textPrimary">
              You can find it here:
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Section: <br />
              Computer Science
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rack: 2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Row: 3
            </Typography>
          </div>
        </div>

        <div className="popup-book-details">
          <Typography className="book-title" color="textPrimary" variant="h5">
            <b>ADVANCED JAVA PROGRAMMING</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            by George F Luger
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Available Units: 5
          </Typography>
        </div>
        <hr />
        <div className="book-description">
          <Typography variant="h6" component="p">
            Book Description:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            porro itaque nisi omnis at ea repellat nihil et eveniet ratione
            voluptatum nesciunt culpa, dolore aliquid, dignissimos autem velit
            laboriosam mollitia. Dolor quae accusamus minima, libero quos alias
            repellat voluptas magnam tempora ducimus? In, consectetur libero
            animi est quam, placeat assumenda laborum harum velit similique
            molestias, vitae rem nihil ea vero. Sint perspiciatis aliquid
            placeat aperiam pariatur iusto! Praesentium cumque quos, quibusdam
            expedita laborum nihil dolorem maiores sunt magnam qui vel
            voluptatem fugit tempore. Ipsum impedit, consequatur tempora placeat
            eos nobis. Distinctio tempora architecto sit beatae in temporibus,
            quaerat, quo eum laborum voluptatibus libero omnis sint, pariatur
            minus at. Quos corrupti veritatis labore amet excepturi perspiciatis
            deserunt, officia quisquam necessitatibus consequatur! A dolorum id
            quibusdam similique numquam autem impedit omnis, sunt quisquam sint
            optio inventore. Animi, fugiat explicabo earum, necessitatibus dolor
            suscipit quos aut harum, eaque dolorem officiis accusantium
            obcaecati optio! Nihil repudiandae impedit reprehenderit tenetur
            optio expedita laboriosam ratione dolorem! Quasi dolorum harum sequi
            beatae ducimus, aspernatur quo maiores, optio provident quos nobis
            saepe nesciunt aut quod minus? Aperiam, velit!
          </Typography>
        </div>
      </Container>
      <div className="borrow-button">
        <Link to="#" className="link-tag">
          <Button
            variant="contained"
            size="large"
            color="primary"
            fullWidth
            disableElevation
          >
            BORROW
          </Button>
        </Link>
      </div>
    </>
  );
};

export default BookDetails;
