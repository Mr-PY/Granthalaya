import React from "react";
import "./BookDetails.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

const BookDetails = () => {
  const history = useHistory();
  return (
    <div className="book-details-wrapper">
      <Container className="book-details-container">
        <div className="close-btn">
          <Button
            variant="contained"
            className="close-btn"
            color="secondary"
            size="large"
            onClick={() => history.goBack()}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </div>

        <br />
        <div className="book-grid-desktop">
          <div className="book-img-container"></div>
          <div className="where-to-find">
            <Typography variant="h6" color="textPrimary">
              You can find it here:
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Section: <b>Computer Science</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rack: <b>2</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Row: <b>3</b>
            </Typography>
          </div>

          <div className="popup-book-details">
            <Typography className="book-title" color="textPrimary" variant="h5">
              <b>ADVANCED JAVA PROGRAMMING</b>
            </Typography>
            <Typography
              className="book-author"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              George F Luger
            </Typography>
            <Typography
              className="available"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              Available Units: 5
            </Typography>
          </div>
          <div className="book-description">
            <hr />
            <br />
            <Typography variant="h6" component="p">
              Book Description:
            </Typography>
            <br />
            <Typography variant="body1" color="textSecondary" component="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              porro itaque nisi omnis at ea repellat nihil et eveniet ratione
              voluptatum nesciunt culpa, dolore aliquid, dignissimos autem velit
              laboriosam mollitia. Dolor quae accusamus minima, libero quos
              alias repellat voluptas magnam tempora ducimus? In, consectetur
              libero animi est quam, placeat assumenda laborum harum velit
              similique molestias, vitae rem nihil ea vero. Sint perspiciatis
              aliquid placeat aperiam pariatur iusto! Praesentium cumque quos,
              quibusdam expedita laborum nihil dolorem maiores sunt magnam qui
              vel voluptatem fugit tempore. Ipsum impedit, consequatur tempora
              placeat eos nobis. Distinctio tempora architecto sit beatae in
              temporibus, quaerat, quo eum laborum voluptatibus libero omnis
              sint, pariatur minus at. Quos corrupti veritatis labore amet
              excepturi perspiciatis deserunt, officia quisquam necessitatibus
              consequatur! A dolorum id quibusdam similique numquam autem
              impedit omnis, sunt quisquam sint optio inventore. Animi, fugiat
              explicabo earum, necessitatibus dolor suscipit quos aut harum,
              eaque dolorem officiis accusantium obcaecati optio! Nihil
              repudiandae impedit reprehenderit tenetur optio expedita
              laboriosam ratione dolorem! Quasi dolorum harum sequi beatae
              ducimus, aspernatur quo maiores, optio provident quos nobis saepe
              nesciunt aut quod minus? Aperiam, velit! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Dolorem porro itaque nisi omnis
              at ea repellat nihil et eveniet ratione voluptatum nesciunt culpa,
              dolore aliquid, dignissimos autem velit laboriosam mollitia. Dolor
              quae accusamus minima, libero quos alias repellat voluptas magnam
              tempora ducimus? In, consectetur libero animi est quam, placeat
              assumenda laborum harum velit similique molestias, vitae rem nihil
              ea vero. Sint perspiciatis aliquid placeat aperiam pariatur iusto!
              Praesentium cumque quos, quibusdam expedita laborum nihil dolorem
              maiores sunt magnam qui vel voluptatem fugit tempore. Ipsum
              impedit, consequatur tempora placeat eos nobis. Distinctio tempora
              architecto sit beatae in temporibus, quaerat, quo eum laborum
              voluptatibus libero omnis sint, pariatur minus at. Quos corrupti
              veritatis labore amet excepturi perspiciatis deserunt, officia
              quisquam necessitatibus consequatur! A dolorum id quibusdam
              similique numquam autem impedit omnis, sunt quisquam sint optio
              inventore. Animi, fugiat explicabo earum, necessitatibus dolor
              suscipit quos aut harum, eaque dolorem officiis accusantium
              obcaecati optio! Nihil repudiandae impedit reprehenderit tenetur
              optio expedita laboriosam ratione dolorem! Quasi dolorum harum
              sequi beatae ducimus, aspernatur quo maiores, optio provident quos
              nobis saepe nesciunt aut quod minus? Aperiam, velit! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Dolorem porro itaque
              nisi omnis at ea repellat nihil et eveniet ratione voluptatum
              nesciunt culpa, dolore aliquid, dignissimos autem velit laboriosam
              mollitia. Dolor quae accusamus minima, libero quos alias repellat
              voluptas magnam tempora ducimus? In, consectetur libero animi est
              quam, placeat assumenda laborum harum velit similique molestias,
              vitae rem nihil ea vero. Sint perspiciatis aliquid placeat aperiam
              pariatur iusto! Praesentium cumque quos, quibusdam expedita
              laborum nihil dolorem maiores sunt magnam qui vel voluptatem fugit
              tempore. Ipsum impedit, consequatur tempora placeat eos nobis.
              Distinctio tempora architecto sit beatae in temporibus, quaerat,
              quo eum laborum voluptatibus libero omnis sint, pariatur minus at.
              Quos corrupti veritatis labore amet excepturi perspiciatis
              deserunt, officia quisquam necessitatibus consequatur! A dolorum
              id quibusdam similique numquam autem impedit omnis, sunt quisquam
              sint optio inventore. Animi, fugiat explicabo earum,
              necessitatibus dolor suscipit quos aut harum, eaque dolorem
              officiis accusantium obcaecati optio! Nihil repudiandae impedit
              reprehenderit tenetur optio expedita laboriosam ratione dolorem!
              Quasi dolorum harum sequi beatae ducimus, aspernatur quo maiores,
              optio provident quos nobis saepe nesciunt aut quod minus? Aperiam,
              velit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorem porro itaque nisi omnis at ea repellat nihil et eveniet
              ratione voluptatum nesciunt culpa, dolore aliquid, dignissimos
              autem velit laboriosam mollitia. Dolor quae accusamus minima,
              libero quos alias repellat voluptas magnam tempora ducimus? In,
              consectetur libero animi est quam, placeat assumenda laborum harum
              velit similique molestias, vitae rem nihil ea vero. Sint
              perspiciatis aliquid placeat aperiam pariatur iusto! Praesentium
              cumque quos, quibusdam expedita laborum nihil dolorem maiores sunt
              magnam qui vel voluptatem fugit tempore. Ipsum impedit,
              consequatur tempora placeat eos nobis. Distinctio tempora
              architecto sit beatae in temporibus, quaerat, quo eum laborum
              voluptatibus libero omnis sint, pariatur minus at. Quos corrupti
              veritatis labore amet excepturi perspiciatis deserunt, officia
              quisquam necessitatibus consequatur! A dolorum id quibusdam
              similique numquam autem impedit omnis, sunt quisquam sint optio
              inventore. Animi, fugiat explicabo earum, necessitatibus dolor
              suscipit quos aut harum, eaque dolorem officiis accusantium
              obcaecati optio! Nihil repudiandae impedit reprehenderit tenetur
              optio expedita laboriosam ratione dolorem! Quasi dolorum harum
              sequi beatae ducimus, aspernatur quo maiores, optio provident quos
              nobis saepe nesciunt aut quod minus? Aperiam, velit! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Dolorem porro itaque
              nisi omnis at ea repellat nihil et eveniet ratione voluptatum
              nesciunt culpa, dolore aliquid, dignissimos autem velit laboriosam
              mollitia. Dolor quae accusamus minima, libero quos alias repellat
              voluptas magnam tempora ducimus? In, consectetur libero animi est
              quam, placeat assumenda laborum harum velit similique molestias,
              vitae rem nihil ea vero. Sint perspiciatis aliquid placeat aperiam
              pariatur iusto! Praesentium cumque quos, quibusdam expedita
              laborum nihil dolorem maiores sunt magnam qui vel voluptatem fugit
              tempore. Ipsum impedit, consequatur tempora placeat eos nobis.
              Distinctio tempora architecto sit beatae in temporibus, quaerat,
              quo eum laborum voluptatibus libero omnis sint, pariatur minus at.
              Quos corrupti veritatis labore amet excepturi perspiciatis
              deserunt, officia quisquam necessitatibus consequatur! A dolorum
              id quibusdam similique numquam autem impedit omnis, sunt quisquam
              sint optio inventore. Animi, fugiat explicabo earum,
              necessitatibus dolor suscipit quos aut harum, eaque dolorem
              officiis accusantium obcaecati optio! Nihil repudiandae impedit
              reprehenderit tenetur optio expedita laboriosam ratione dolorem!
              Quasi dolorum harum sequi beatae ducimus, aspernatur quo maiores,
              optio provident quos nobis saepe nesciunt aut quod minus? Aperiam,
              velit!
            </Typography>
          </div>
          <div className="borrow-btn">
            <Link to="#" className="link-tag">
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
              >
                BORROW
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
