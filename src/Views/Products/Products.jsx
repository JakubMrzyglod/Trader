import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {Input, Button} from 'semantic-ui-react';
import {Change, AddProduct, ProductsFetched} from '../../Store/Actions.js';
import {connect} from "react-redux";
import Data from "../../Data/Warehouse.json";




class Pdoducts extends React.Component  {
  componentDidMount() {
    this.props.ProductsFetched(Data.Products); }

  Change = name => evetn =>{
    this.props.Change(name, evetn.target.value)
  }
  AddProduct=()=>{
    this.props.AddProduct()
  }
  render(){
    const {Products, Product, Change} = this.props
  return (
    <div>
      <Grid container spacing={32}>
        <Grid item>
          <Input value={Product.Name} onChange={this.Change('Name')} />
        </Grid>
        <Grid item>
          <Input value={Product.Category} onChange={this.Change('Category')} />
        </Grid>
        <Grid item>
          <Input value={Product.Price} onChange={this.Change('Price')} />
        </Grid>
        <Grid item>
        <Button variant="raised" color="primary" onClick={this.AddProduct}>Zapisz</Button>
        <Button variant="raised" color="primary" onClick={this.AddProduct}>Zapisz</Button>
        <Button variant="raised" color="primary" onClick={this.AddProduct}>Zapisz</Button>
        <Button variant="raised" color="primary" onClick={this.AddProduct}>Zapisz</Button>
        </Grid>
      </Grid>
      <Grid container spacing={32}>
      {Products.map(item=>{
        return(
        <Grid container spacing={32}>
          <Grid item>
          {item.Name}
          </Grid>
          <Grid item>
          {item.Category}
          </Grid>
          <Grid item>
          {item.Price}
          </Grid>
          <Grid item>
          {item.Quantity}
          </Grid>
          <Grid item>
          {item.id}
          </Grid>
        </Grid>)
      })}
      </Grid>
    </div>
  );
}
}
const mapStateToProps = state => {
  return{
    Products: state.Products.Products,
    Product: state.Products.Product, 
    Open: state.Products.Open
  }};

const mapDispatchToProps = {Change, AddProduct, ProductsFetched};

export default connect(mapStateToProps, mapDispatchToProps)(Pdoducts);