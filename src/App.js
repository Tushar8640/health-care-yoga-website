import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Blog from "./Pages/Contact/Contact.";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import Register from "./Pages/Register/Register";
import ContextProvider from "./Context/ContextProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "./Pages/Details/Details";
import Contact from "./Pages/Contact/Contact.";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route exact path="*">
            <h1>Not found</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ContextProvider>
  );
}

export default App;
