import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./app.css";
const App = () => {
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading home...</div>}>
              <HomePage />
            </Suspense>
          </Route>
          <Route exact path="/contact">
            <Suspense fallback={<div>Loading Contact...</div>}>
              <ContactPage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
