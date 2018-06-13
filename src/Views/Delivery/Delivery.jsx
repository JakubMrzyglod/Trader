import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import DeliveryList from './DeliveryList';
import DeliveryEdit from './DeliveryEdit';
import {connect} from "react-redux";
import Data from "../../Data/Delivery";
import {DeliveryFetched} from '../../Store/Actions.js';


class Delivery extends React.Component {
  
  componentDidMount() {
    this.props.DeliveryFetched(Data); }
  
  render(){
    return (
      <Card>
        <CardHeader/>
          <CardContent>
           { this.props.EditOpen
            ?<DeliveryEdit />
            :<DeliveryList />}
          </CardContent>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return{
    EditOpen: state.Delivery.EditOpen
  }};

const mapDispatchToProps = {DeliveryFetched};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);