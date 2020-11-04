import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./pages/homePage";
import profilePage from "./pages/profilePage";
import contactusPage from "./pages/contactusPage";
import librarianPage from "./pages/librarianPage";
import loginPage from "./pages/loginPage";
import forgotpasswordPage from "./pages/forgotpasswordPage";
import signupPage from "./pages/signupPage";
import notfoundPage from "./pages/notfoundPage";
import BookDetails from "./components/BookDetails/BookDetails";
import CustomizedSnackbar from "./components/CustomizedSnackbar/CustomizedSnackbar"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-background"></div>
        <CustomizedSnackbar/>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/login" component={loginPage} />
          <Route exact path="/forgot-password" component={forgotpasswordPage} />
          <Route exact path="/signup" component={signupPage} />
          <Route exact path="/profile" component={profilePage} />
          <Route exact path="/contact-us" component={contactusPage} />
          <Route exact path="/librarian" component={librarianPage} />
          <Route exact path="/book-details:id" component={BookDetails} />
          <Route path="*" component={notfoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
