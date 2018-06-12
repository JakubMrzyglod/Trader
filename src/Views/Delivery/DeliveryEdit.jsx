import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AddDelivery } from '../../Store/Actions.js';

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
      margin: theme.spacing.unit*2,
    },
  });

 
class DeliveryEdit extends React.Component {
    render(){
        const { classes, EditToggle, Order, ChangeValue, AddItem, DeleteItem, EditItem} = this.props;
        
    return (
        <div>
            {/* DANE DOSTAWCY */}
            <Grid container spacing={32}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField id="Name" label="Nazwa" margin="normal" fullWidth value={Order.SuppolierName} onChange={ChangeValue('SuppolierName')}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                    <TextField id="TaxNmber" label="NIP" margin="normal" value={Order.SuppolierTaxNumber} onChange={ChangeValue('SuppolierTaxNumber')} fullWidth /> 
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField id="ZipCode" label="Kod P." margin="normal" fullWidth value={Order.SuppolierZipCode} onChange={ChangeValue('SuppolierZipCode')}/>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={2}>
                    <TextField id="City" label="Miast" margin="normal" fullWidth value={Order.SuppolierCity} onChange={ChangeValue('SuppolierCity')} />
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={3}>
                    <TextField id="Asress" label="Adres" margin="normal" fullWidth value={Order.SuppolierAdress} onChange={ChangeValue('SuppolierAdress')} />
                </Grid>
            </Grid>
            <Grid container spacing={32}>
                <Hidden olny="xs">
                <Grid item xs={12} sm={8} md={8} lg={10}>
                </Grid></Hidden>
                <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField id="Date" label="Data" margin="normal" value={Order.DocNumber} onChange={ChangeValue('DocNumber')} fullWidth /> 
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField id="DocNumber" label="Nr Dok." margin="normal" fullWidth value={Order.Date} onChange={ChangeValue('DocNumber')}/>
                </Grid>
            </Grid>

            {/* LISTA PRODUKTÓW */}
            {/* FORMULARZ DODAWANIA */}

          <List>
            <ListItem>
            <ListItemText primary={
            <Grid container spacing={32}>
            <Grid item xs={12} sm={2} md={2} lg={4}>
                    <TextField label="Produkt" fullWidth value={Order.EditName} onChange={ChangeValue('EditName')}/>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField label="Ilość" fullWidth value={Order.EditQuantity} onChange={ChangeValue('EditQuantity')} type="number" />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField label="Cena" fullWidth value={Order.EditPrice} onChange={ChangeValue('EditPrice')} type="number"
                     InputProps={{endAdornment: Order.EditPrice?<InputAdornment position="end">zł</InputAdornment>:''}} />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={1}>
                    <TextField label="VAT" fullWidth value={Order.EditTax} onChange={ChangeValue('EditTax')} select 
                    InputProps={{endAdornment: Order.EditTax?<InputAdornment position="end">%</InputAdornment>:''}}
                    >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    </TextField>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField label="Wartość Netto" fullWidth
                    value={Order.EditPrice && Order.EditQuantity?Order.EditPrice*Order.EditQuantity:''}
                    InputProps={{endAdornment: Order.EditPrice && Order.EditQuantity?<InputAdornment position="end">zł</InputAdornment>:''}} disabled/>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
                    <TextField label="Wartość VAT" fullWidth 
                    value={Order.EditPrice && Order.EditQuantity&&Order.EditTax?Order.EditPrice*Order.EditQuantity*Order.EditTax/100:''}
                     InputProps={{endAdornment: Order.EditPrice && Order.EditQuantity && Order.EditTax?<InputAdornment position="end">zł</InputAdornment>:''}} disabled/>
            </Grid>
            </Grid>} />
            <ListItemSecondaryAction>
                        <IconButton color="primary" onClick={AddItem}>
                            <Add />
                        </IconButton>
                    </ListItemSecondaryAction>
            </ListItem>
            {/* LISTA */}

             {this.props.Products.map(Item=>{
                return(
                    <ListItem button onClick={EditItem(Item.id)}>
                    <ListItemText primary={
                    <Grid container spacing={32} >
                        <Grid item xs={12} sm={2} md={2} lg={4}>
                                <TextField fullWidth value={Item.Name} disabled/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                                <TextField fullWidth value={Item.Quantity} disabled/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth value={Item.Price} disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1}>
                                <TextField fullWidth value={Item.Tax} disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth value={Item.Value} disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                                <TextField fullWidth value={Item.TaxValue} disabled 
                                InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                    </Grid>}
                    />
                    <ListItemSecondaryAction>
                        <IconButton color="secondary" onClick={DeleteItem(Item.id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>

                )
            })} 
            {/* PODSUMOWANIE ZAMOWIENIA */}
             {Order.DeliveryValue?
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
                        <Grid item xs={12} sm={2} md={2} lg={2}><TextField fullWidth value={Order.DeliveryValue} disabled 
                        InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}><TextField fullWidth value={Order.DeliveryTaxValue} disabled 
                        InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                        </Grid>
                    </Grid>} />
                </ListItem>
            :''}
            </List>
         
        <Button variant="raised" color="primary" className={classes.button}>Zapisz</Button>            
        <Button variant="Inlined" color="default" className={classes.button} onClick={EditToggle}>Anuluj</Button>            
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
        Deliveries: state.Delivery.Deliveries,
        Products: state.Delivery.Products
    }
  };

const mapDispatchToProps = {AddDelivery};

export default connect(mapStateToProps, mapDispatchToProps)(deliveryEdit);