import React from 'react';
import {connect} from "react-redux";
import {List, ListItem, ListItemText, Grid, TextField, InputAdornment} from '@material-ui/core';


class Summary extends React.Component {
  
  render(){
      const {ValueSummary, TaxValueSummary} = this.props.Delivery
    return (
        <List>
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
                   <Grid item xs={12} sm={2} md={2} lg={2}><TextField fullWidth  disabled value={ValueSummary}
                   InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                   </Grid>
                   <Grid item xs={12} sm={2} md={2} lg={2}><TextField fullWidth  disabled value={TaxValueSummary}
                   InputProps={{endAdornment:<InputAdornment position="end">zł</InputAdornment>}}/>
                   </Grid>
               </Grid>} />
           </ListItem>
       </List>
    );
  }
}
const mapStateToProps = state => {
  return{
    Delivery: state.Delivery.Delivery
  }};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);