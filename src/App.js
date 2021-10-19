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

function App() {
  return (
    <div>
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
          <Route path="/pharmacy">
            <Pharmacy></Pharmacy>
          </Route>
          <Route path="/pathology">
            <Pathology></Pathology>
          </Route>
          <Route path="/servicedetails">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;