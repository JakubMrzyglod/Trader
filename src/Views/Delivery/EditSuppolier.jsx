import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeSuppolier} from '../../Store/Actions.js';
import {Grid, TextField, Hidden} from '@material-ui/core';
import SuppolierInput from './SuppolierInput';

class Suppolier extends React.Component{
    ChangeSuppolier = (name) => e =>{
        this.props.ChangeSuppolier(name, e.target.value)
    }
    render(){
    const {Name, TaxNumber, ZipCode, City, Adress, Date, DocNumber} = this.props.Suppolier;
    return(
<Grid container spacing={32}>
<Grid item xs={12} sm={6} md={6} lg={4}>
    <SuppolierInput />
    {/* <TextField label="Nazwa" margin="normal" fullWidth value={Name} onChange={this.ChangeSuppolier('Name')} /> */}
</Grid>
<Grid item xs={12} sm={6} md={6} lg={2}>
    <TextField label="NIP" fullWidth value={TaxNumber} onChange={this.ChangeSuppolier('TaxNumber')}/> 
</Grid>
<Grid item xs={12} sm={2} md={2} lg={1}>
    <TextField label="Kod P." fullWidth fullWidth value={ZipCode} onChange={this.ChangeSuppolier('ZipCode')} />
</Grid>
<Grid item xs={12} sm={5} md={5} lg={2}>
    <TextField label="Miast" fullWidth fullWidth value={City} onChange={this.ChangeSuppolier('City')}  />
</Grid>
<Grid item xs={12} sm={5} md={5} lg={3}>
    <TextField label="Adres" fullWidth fullWidth value={Adress} onChange={this.ChangeSuppolier('Adress')}  />
</Grid>
</Grid>
    )
}
}
const mapStateToProps = state => {
    return{
        Suppolier: state.Delivery.Suppolier,
    }
  };

const mapDispatchToProps = {ChangeSuppolier};

export default connect(mapStateToProps, mapDispatchToProps)(Suppolier);