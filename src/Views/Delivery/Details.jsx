import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeDeliveryInfo} from '../../Store/Actions.js';
import {Grid, TextField, Hidden} from '@material-ui/core';

class Details extends React.Component{
    HandleChangeInput = (name) => e =>{
        this.props.ChangeDeliveryInfo(name, e.target.value)
    }
    render(){
    const {date, DocNumber, Year, DeliveryNote} = this.props.Details;
    return(
        <Grid container spacing={32}>
        <Hidden olny="xs">
<Grid item xs={12} sm={5} md={6} lg={6}>
</Grid></Hidden>
<Grid item xs={12} sm={2} md={2} lg={2}>
<TextField label="Nr Dok." margin="normal" fullWidth value={DocNumber} onChange={this.HandleChangeInput('DocNumber')}  />    
</Grid>
<Grid item xs={6} sm={3} md={2} lg={2}>
    {/* <DeliveryDate /> */}
    <TextField
        id="date"
        label="Data"
        type="date"
        value="25-05-2018"
        margin="normal"
        fullWidth
        onChange={this.HandleChangeInput('date')}
        value={date}
      />
</Grid>
<Grid item xs={6} sm={2} md={2} lg={2}>
<TextField label="PZ" margin="normal" fullWidth value={`${Year}/${DeliveryNote}`} />
</Grid>
</Grid>
    )
}
}
const mapStateToProps = state => {
    return{
        Details: state.Delivery.Details,
    }
  };

const mapDispatchToProps = {ChangeDeliveryInfo};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

