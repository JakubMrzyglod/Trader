import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeSuppolier} from '../../Store/Actions.js';
import {Grid, TextField, Hidden} from '@material-ui/core'

class Suppolier extends React.Component{
    ChangeSuppolier = (name) => e =>{
        this.props.ChangeSuppolier(name, e.target.value)
    }
    render(){
    const {Name, TaxNumber, ZipCode, City, Adress, Date, DocNumber} = this.props.Suppolier;
    return(
<Grid container spacing={32}>
<Grid item xs={12} sm={6} md={6} lg={4}>
    <TextField label="Nazwa" margin="normal" fullWidth value={Name} onChange={this.ChangeSuppolier('Name')} />
</Grid>
<Grid item xs={12} sm={6} md={6} lg={2}>
    <TextField label="NIP" margin="normal" fullWidth value={TaxNumber} onChange={this.ChangeSuppolier('TaxNumber')}/> 
</Grid>
<Grid item xs={12} sm={2} md={2} lg={1}>
    <TextField label="Kod P." margin="normal" fullWidth fullWidth value={ZipCode} onChange={this.ChangeSuppolier('ZipCode')} />
</Grid>
<Grid item xs={12} sm={5} md={5} lg={2}>
    <TextField label="Miast" margin="normal" fullWidth fullWidth value={City} onChange={this.ChangeSuppolier('City')}  />
</Grid>
<Grid item xs={12} sm={5} md={5} lg={3}>
    <TextField label="Adres" margin="normal" fullWidth fullWidth value={Adress} onChange={this.ChangeSuppolier('Adress')}  />
</Grid>
<Hidden olny="xs">
<Grid item xs={12} sm={8} md={8} lg={10}>
</Grid></Hidden>
<Grid item xs={6} sm={2} md={2} lg={1}>
    <TextField label="Data" margin="normal"   fullWidth  fullWidth value={Date} onChange={this.ChangeSuppolier('Date')} /> 
</Grid>
<Grid item xs={6} sm={2} md={2} lg={1}>
    <TextField label="Nr Dok." margin="normal" fullWidth fullWidth value={DocNumber} onChange={this.ChangeSuppolier('DocNumber')}  />
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