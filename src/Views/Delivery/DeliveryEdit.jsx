import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {EditClose, SaveDelivery } from '../../Store/Actions.js';
import Suppolier from './EditSuppolier.jsx';
import NewProduct from './NewProduct.jsx';
import Details from './Details.jsx';
import ProductsList from './ProductsList.jsx';
import Summary from './Summary.jsx';

import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField, InputAdornment,
    Button, IconButton,
    Hidden,
    Table, TableBody, TableCell,TableHead, TableRow,
    Typography,
    List, ListItem, ListItemText, ListItemSecondaryAction,
    MenuItem
} from '@material-ui/core';
import { Delete, Add } from '@material-ui/icons';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit*1,
    },
  });

  class DeliveryEdit extends React.Component {
      SaveDelivery =()=>{
        this.props.DeliveryId===0?this.props.SaveDelivery():this.props.UpdateDelivery();
          this.props.ToggleView();
      }
      render(){
        const {classes, ToggleView, SaveDelivery, DeliveryId} = this.props;
        
    return (
        <div>
            <Suppolier />
            <Details />
            <NewProduct />
            <ProductsList/>
            <Summary />
         
        <Button variant="raised" color="primary" className={classes.button} onClick={this.SaveDelivery}>Zapisz</Button>            
        <Button variant="Inlined" color="default" className={classes.button} onClick={ToggleView}>Anuluj</Button>            
        </div>
        
  );
}
}

DeliveryEdit.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  


const mapStateToProps = state => {
    return{DeliveryId: state.Delivery.DeliveryId}
  };

const mapDispatchToProps = {EditClose, SaveDelivery};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DeliveryEdit));