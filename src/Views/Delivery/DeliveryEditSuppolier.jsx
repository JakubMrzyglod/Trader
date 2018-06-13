import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeSuppolier} from '../../Store/Actions.js';
import {Grid, TextField, Hidden} from '@material-ui/core'

class Suppolier extends React.Component{
    render(){
    const {Name, TaxNumber} = this.props.Suppolier;
    const {value, ChangeSuppolier} = this.props;
    return(
<Grid container spacing={32}>
<Grid item xs={12} sm={6} md={6} lg={4}>
    <TextField label="Nazwa" margin="normal" fullWidth value={Name} onChange={ChangeSuppolier('Name')} />
</Grid>
<Grid item xs={12} sm={6} md={6} lg={2}>
    <TextField label="NIP" margin="normal" fullWidth value={TaxNumber} /> 
</Grid>
<Grid item xs={12} sm={2} md={2} lg={1}>
    <TextField label="Kod P." margin="normal" fullWidth  />
</Grid>
<Grid item xs={12} sm={5} md={5} lg={2}>
    <TextField label="Miast" margin="normal" fullWidth   />
</Grid>
<Grid item xs={12} sm={5} md={5} lg={3}>
    <TextField label="Adres" margin="normal" fullWidth   />
</Grid>
<Hidden olny="xs">
<Grid item xs={12} sm={8} md={8} lg={10}>
</Grid></Hidden>
<Grid item xs={6} sm={2} md={2} lg={1}>
    <TextField label="Data" margin="normal"   fullWidth /> 
</Grid>
<Grid item xs={6} sm={2} md={2} lg={1}>
    <TextField label="Nr Dok." margin="normal" fullWidth />
</Grid>
</Grid>
    )
}
}
const mapStateToProps = state => {
    return{
        Suppolier: state.Delivery.Suppolier,
        value: state.Delivery.value
    }
  };

const mapDispatchToProps = {ChangeSuppolier};

export default connect(mapStateToProps, mapDispatchToProps)(Suppolier);