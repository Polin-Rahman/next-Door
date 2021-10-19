import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import MenuBar from './Pages/Shared/MenuBar/MenuBar';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import Pharmacy from './Pages/Pharmacy/Pharmacy';
import Pathology from './Pages/Pathology/Pathology';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/pharmacy">
              <Pharmacy></Pharmacy>
            </PrivateRoute>
            <PrivateRoute path="/pathology">
              <Pathology></Pathology>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
