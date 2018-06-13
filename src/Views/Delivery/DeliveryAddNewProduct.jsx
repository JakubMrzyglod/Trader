import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ChangeProductValue} from '../../Store/Actions.js';
import {List, ListItem, ListItemText, ListItemSecondaryAction, MenuItem, Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import {Add} from '@material-ui/icons';

class NewProduct extends React.Component{
    ChangeProductValue = (name) => e =>{
        this.props.ChangeProductValue(name, e.target.value)
    }
    render(){
    return(
        <List>
            <ListItem>
            <ListItemText primary={
            <Grid container spacing={32}>
            <Grid item xs={12} sm={2} md={2} lg={4}>
                    <TextField label="Produkt" fullWidth  />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField label="Ilość" fullWidth   type="number" />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField label="Cena" fullWidth   type="number"
                     InputProps={{endAdornment: <InputAdornment position="end">zł</InputAdornment>}} />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField label="VAT" fullWidth   select 
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
                    
                    InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}} disabled/>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField label="Wartość VAT" fullWidth 
                    
                     InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}} disabled/>
            </Grid>
            </Grid>} />
            <ListItemSecondaryAction>
                        <IconButton color="primary">
                            <Add />
                        </IconButton>
                    </ListItemSecondaryAction>
            </ListItem>
        </List>
    )
}
}
const mapStateToProps = state => {
    return{
        NewProduct: state.Delivery.NewProduct,
    }
  };

const mapDispatchToProps = {ChangeProductValue};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);