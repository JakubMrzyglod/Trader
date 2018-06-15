import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {EditClose } from '../../Store/Actions.js';
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
import Summary from './Summary.js';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit*1,
    },
  });

 
class DeliveryEdit extends React.Component {
    render(){
        const {classes, ToggleView} = this.props;
        
    return (
        <div>
            <Suppolier />
            <Details />
            <NewProduct />
            <ProductsList/>
            <Summary />
         
        <Button variant="raised" color="primary" className={classes.button}>Zapisz</Button>            
        <Button variant="Inlined" color="default" className={classes.button} onClick={ToggleView}>Anuluj</Button>            
        </div>
        
  );
}
}

DeliveryEdit.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  


const mapStateToProps = state => {
    return{}
  };

const mapDispatchToProps = {EditClose};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DeliveryEdit));