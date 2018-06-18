import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import DeliveryList from './DeliveryList';
import DeliveryEdit from './DeliveryEdit';
import {connect} from "react-redux";
import Data from "../../Data/Delivery";
import Products from "../../Data/Warehouse";
import {DeliveryFetched, EditClose} from '../../Store/Actions.js';


class Delivery extends React.Component {
  state={
    Open: false
  }
  componentDidMount() {
    this.props.DeliveryFetched(Data); }
  ToggleView=()=>{
    this.setState({Open:!this.state.Open});

    
  }
  render(){
    return (
      <Card>
        <CardHeader/>
          <CardContent>
           { this.state.Open
            ?<DeliveryEdit ToggleView={this.ToggleView} />
            :<DeliveryList ToggleView={this.ToggleView} />}
          </CardContent>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return{
    EditOpen: state.Delivery.EditOpen
  }};

const mapDispatchToProps = {DeliveryFetched, EditClose};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);