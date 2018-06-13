import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeProductValue} from '../../Store/Actions.js';
import {Grid, TextField,MenuItem, InputAdornment} from '@material-ui/core';

class NewProductEdit extends React.Component{
    ChangeProductValue = (name) => e =>{
        this.props.ChangeProductValue(name, e.target.value)
    }
    render(){
        const {Name, Price, Quantity, Tax, Value, TaxValue} = this.props.NewProduct;
    return(
        <Grid container spacing={32}>
                    <Grid item xs={12} sm={2} md={2} lg={4}>
                            <TextField label="Produkt" fullWidth value={Name} onChange={this.ChangeProductValue('Name')} />
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={1}>
                            <TextField label="Ilość" fullWidth value={Quantity} onChange={this.ChangeProductValue('Quantity')}  type="number" />
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2}>
                            <TextField label="Cena" fullWidth  value={Price} onChange={this.ChangeProductValue('Price')} type="number"
                            InputProps={{endAdornment: <InputAdornment position="end">zł</InputAdornment>}} />
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={1}> 
                            <TextField label="VAT" fullWidth select value={Tax} onChange={this.ChangeProductValue('Tax')}
                            InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}
                            >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={23}>23</MenuItem>
                            </TextField>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2}>
                            <TextField label="Wartość Netto" fullWidth
                            value={Value} onChange={this.ChangeProductValue('Value')}
                            InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}} disabled/>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2}>
                            <TextField label="Wartość VAT" fullWidth 
                            value={TaxValue} onChange={this.ChangeProductValue('TaxValue')}
                            InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}} disabled/>
                    </Grid>
                    </Grid>)
}}
const mapStateToProps = state => {
    return{
        NewProduct: state.Delivery.NewProduct
    }};

const mapDispatchToProps = {ChangeProductValue};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductEdit);