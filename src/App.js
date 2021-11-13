import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import About from "./pages/about/About";
import Dashboard from "./pages/Dashboard/DashBoard/Dashboard";


import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Notfound from "./pages/notFound/Notfound";
import Register from "./pages/Register/Register";

import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import PrivateRoute from "./privateRoute/PrivateRoute";



function App() {

  return (
    <AuthContext>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>

      </BrowserRouter>
    </AuthContext >
  );
}

export default App;
