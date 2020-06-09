import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import Default from './components/Default/Default';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Productlist from './components/Productlist/Productlist';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route  exact path="/" component={Productlist} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  )
}


export default App;
