import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {RemoveProduct, EditProduct} from '../../Store/Actions.js';
import {List, ListItem, ListItemText, ListItemSecondaryAction, Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons';

class ProductsList extends React.Component{
    render(){
       const {Products} = this.props
    return(
        <List>
             {Products.map(Product=>{
                return(
                    <ListItem button 
                    onClick={()=>this.props.EditProduct(Product.id)}
                    >
                    <ListItemText primary={
                    <Grid container spacing={32} >
                        <Grid item xs={12} sm={2} md={2} lg={4}>
                                <TextField fullWidth disabled value={Product.Name} />
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                                <TextField fullWidth disabled value={Product.Quantity}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth disabled value={Product.Price}
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                                <TextField fullWidth disabled value={Product.Tax}
                                InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth disabled value={Product.Value}
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth disabled value={Product.TaxValue}
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                    </Grid>}
                    />
                    <ListItemSecondaryAction>
                        <IconButton color="secondary" 
                        onClick={()=>this.props.RemoveProduct(Product)}
                        >
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>

                )
            })} 
            </List>
    )
}}
const mapStateToProps = state => {
    return{
        Products: state.Delivery.Products,
        Fake: state.Delivery.Fake}
  };

const mapDispatchToProps = {RemoveProduct, EditProduct};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);