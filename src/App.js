import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import SignupComponent from "./components/SignupComponent";
import NotFoundComponent from "./components/NotFoundComponent";
import homepage from "./pages/homepage";
import contactus from "./pages/contactus";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/contact-us" component={contactus} />
          <Route exact path="/login" component={LoginComponent} />
          <Route
            exact
            path="/forgot-password"
            component={ForgotPasswordComponent}
          />
          <Route exact path="/signup" component={SignupComponent} />
          <Route exact path="/book-details" component={BookDetails} />
          <Route path="*" component={NotFoundComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
