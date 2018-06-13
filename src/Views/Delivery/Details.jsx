import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeDeliveryInfo} from '../../Store/Actions.js';
import {Grid, TextField, Hidden} from '@material-ui/core'

class Detiles extends React.Component{
    HandleChangeInput = (name) => e =>{
        this.props.ChangeDeliveryInfo(name, e.target.value)
    }
    render(){
    const {Date, DocNumber} = this.props.Delivery;
    return(
        <Grid container spacing={32}>
        <Hidden olny="xs">
<Grid item xs={12} sm={9} md={9} lg={9}>
</Grid></Hidden>
<Grid item xs={6} sm={1} md={1} lg={1}>
    <TextField label="Data" margin="normal"   fullWidth  fullWidth value={Date} onChange={this.HandleChangeInput('Date')} /> 
</Grid>
<Grid item xs={6} sm={2} md={2} lg={2}>
    <TextField label="Nr Dok." margin="normal" fullWidth fullWidth value={DocNumber} onChange={this.HandleChangeInput('DocNumber')}  />
</Grid>
</Grid>
    )
}
}
const mapStateToProps = state => {
    return{
        Delivery: state.Delivery.Delivery,
    }
  };

const mapDispatchToProps = {ChangeDeliveryInfo};

export default connect(mapStateToProps, mapDispatchToProps)(Detiles);