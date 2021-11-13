import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import About from "./pages/about/About";
import Dashboard from "./pages/Dashboard/DashBoard/Dashboard";
import Explores from "./pages/Explores/Explores";


import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Notfound from "./pages/notFound/Notfound";
import Purchases from "./pages/Purchase/Purchases";
import Register from "./pages/Register/Register";
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
          <Route path="/explores">
            <Explores></Explores>
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
          <PrivateRoute path="/purchase/:id">
            <Purchases></Purchases>
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
