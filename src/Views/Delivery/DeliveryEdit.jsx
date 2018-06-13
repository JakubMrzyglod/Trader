import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {EditClose } from '../../Store/Actions.js';
import Suppolier from './DeliveryEditSuppolier.jsx'

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
    render(){
        const {classes, EditClose} = this.props;
        
    return (
        <div>
            {/* DANE DOSTAWCY */}
            <Suppolier />

            {/* LISTA PRODUKTÓW */}
            {/* FORMULARZ DODAWANIA */}

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
            {/* LISTA */}

             {[].map(Item=>{
                return(
                    <ListItem button>
                    <ListItemText primary={
                    <Grid container spacing={32} >
                        <Grid item xs={12} sm={2} md={2} lg={4}>
                                <TextField fullWidth disabled/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                                <TextField fullWidth  disabled/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                                <TextField fullWidth disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                    </Grid>}
                    />
                    <ListItemSecondaryAction>
                        <IconButton color="secondary" >
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>

                )
            })} 
            {/* PODSUMOWANIE ZAMOWIENIA */}
             <ListItem>
                    <ListItemText primary={
                    <Grid container spacing={32} >
                        <Grid item xs={12} sm={2} md={2} lg={4}>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>Rezem:
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}><TextField fullWidth  disabled 
                        InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}><TextField fullWidth  disabled 
                        InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                    </Grid>} />
                </ListItem>
            </List>
         
        <Button variant="raised" color="primary" className={classes.button}>Zapisz</Button>            
        <Button variant="Inlined" color="default" className={classes.button} onClick={EditClose}>Anuluj</Button>            
        </div>
        
  );
}
}

DeliveryEdit.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
 const deliveryEdit = withStyles(styles)(DeliveryEdit);


const mapStateToProps = state => {
    return{
        //Suppoliers: state.Delviery.Suppoliers,
        // Deliveries: state.Delivery.Deliveries,
        // Products: state.Delivery.Products
    }
  };

const mapDispatchToProps = {EditClose};

export default connect(mapStateToProps, mapDispatchToProps)(deliveryEdit);