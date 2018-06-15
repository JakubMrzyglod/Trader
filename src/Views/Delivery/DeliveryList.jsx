import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {EditOpen, EditDelivery} from "../../Store/Actions.js";


import {List, ListItem, ListItemIcon, ListItemText, Divider, Hidden, Button, } from '@material-ui/core';
import {Table, TableBody, TableCell,TableHead, TableRow, Typography} from '@material-ui/core';



import { withStyles } from '@material-ui/core/styles';


class DeliveryList extends React.Component {
    render(){
    const {Deliveries, EditOpen, EditDelivery} = this.props;
    return (
        <div>
          <Button variant="raised" color="primary" onClick={EditOpen}>Dodaj Dostawę</Button>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dostawca</TableCell>
            <TableCell>Nr dokumentu</TableCell>
            <Hidden only="xs">
            <TableCell>Data</TableCell>
            <TableCell numeric>Wartość Netto</TableCell>
            <TableCell numeric>Vat</TableCell>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {Deliveries.map(Delivery => {
            return (
            <TableRow key={Delivery.id} hover onClick={()=>EditDelivery(Delivery.id)}>
                <TableCell>
                    {Delivery.Suppolier.Name}
                    <Typography variant="caption">
                        {`${Delivery.Suppolier.ZipCode} ${Delivery.Suppolier.City}`.trim()}
                    </Typography>
                    <Typography variant="caption">
                    {Delivery.Suppolier.Adress}
                    </Typography>
                </TableCell>
                <TableCell>{Delivery.DocNumber}</TableCell>
                <Hidden only="xs">
                <TableCell>{Delivery.Date}</TableCell>
                <TableCell numeric>{`${Delivery.Net} zł`.trim()}</TableCell>
                <TableCell numeric>{`${Delivery.Tax} zł`.trim()}</TableCell>
                </Hidden>
              </TableRow>
            );
          })}
        </TableBody>
      </Table></div>
  );
}
}




const mapStateToProps = state => {
    return{
        Deliveries: state.Delivery.Deliveries}
  };

const mapDispatchToProps = {EditOpen, EditDelivery};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryList);