import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../Views/Dashboard";
import Delivery from "../Views/Delivery/Delivery";
import Products from "../Views/Products/Products";


function Main() {
  return (
      <Switch>
        <Route exact path ='/' component={Dashboard}></Route>
        <Route exact path='/Dostawy' component={Delivery}></Route>
        <Route exact path='/Produkty' component={Products}></Route>
      </Switch>
    )
  }

export default Main;
  