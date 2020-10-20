import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { setSnackbar } from "../../redux";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      // "& > * + *": {
      //   marginTop: theme.spacing(3)
      // }
    }
  })
);

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

const CustomizedSnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
  const snackbarType = useSelector(state => state.snackbar.snackbarType);
  const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(false, snackbarType, snackbarMessage));
  };

    return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={ SlideTransition }
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={snackbarType}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar
