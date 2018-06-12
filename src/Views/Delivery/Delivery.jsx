import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core'
import DeliveryList from './DeliveryList';
import DeliveryEdit from './DeliveryEdit';
import {connect} from "react-redux";
import {DeliveryFetched} from "../../Store/Actions.js";
import Data from "../../Data/Delivery.json";

class Delivery extends React.Component {
  state={
    EditOpen:false,
    Products:[],  
  }
  componentDidMount() {
    this.props.DeliveryFetched(Data); }
  EditToggle=()=>{
    this.setState({
      EditOpen: !this.state.EditOpen,
        id:0,
        DocNumber:'',
        Date:'',
        Net:'',
        Tax:'',
        SuppolierId:'', 
        SuppolierName:'',
        SuppolierAdress:'',
        SuppolierCity:'',
        SuppolierZipCode:'',
        SuppolierTaxNumber:'',
        Products:[],     
        EditName:'',
        EditQuantity:'',
        EditPrice:'',
        EditTax:'',
        EditValue:'',
        EditTaxValue:'',
        DeliveryValue:0,
        DeliveryTaxValue:0
    })
  }
  ChangeValue = name => event =>{
    this.setState({[name]:event.target.value})
  }
  EditOrder = Delivery => () => {
    this.setState({
      EditOpen: !this.state.EditOpen,
        id:Delivery.id,
        DocNumber:Delivery.DocNumber,
        Date:Delivery.Date,
        Net:Delivery.Net,
        Tax:Delivery.Tax,
        SuppolierId:Delivery.Suppolier.id, 
        SuppolierName:Delivery.Suppolier.Name,
        SuppolierAdress:Delivery.Suppolier.Adress,
        SuppolierCity:Delivery.Suppolier.City,
        SuppolierZipCode:Delivery.Suppolier.ZipCode,
        SuppolierTaxNumber:Delivery.Suppolier.TaxNumber,
        Products:Delivery.Products,
        EditId:0,
        EditName:'r',
        EditQuantity:'',
        EditPrice:'',
        EditTax:'',
        DeliveryValue:Delivery.Net,
        DeliveryTaxValue:Delivery.Tax
      })
  }
  DeleteItem = id => () =>{
    this.setState({Products: this.state.Products.filter(Product => Product.id !== id)})
  }
  EditItem = id => () =>{
    this.state.Products.map(Item =>{
      if(Item.id === id) 
      this.setState({EditId: Item.id, EditName:Item.Name, EditQuantity:Item.Quantity, 
        EditPrice:Item.Price, EditTax:Item.Tax, EditValue:Item.Value, EditTaxValue:Item.TaxValue
      })
    })
    this.setState({Products: this.state.Products.filter(Product => Product.id !== id)})
  }
  sort = (Products) => Products.sort((t1, t2) => (t1.id < t2.id ? -1 : 1));  
  AddItem = () =>{
    let stock = [];
    this.state.Products.map(item =>{stock.push(item)})
    let id = this.state.EditId;
    if(id=== 0) this.state.Products.map(i=> id=i.id+1);
    stock.push({"id": id, "Name": this.state.EditName, "Price": this.state.EditPrice, "Quantity": this.state.EditQuantity, 
  "Tax":this.state.EditTax, "Value":  this.state.EditPrice*this.state.EditQuantity, "TaxValue":this.state.EditPrice*this.state.EditQuantity*this.state.EditTax/100});
    this.setState({Products: this.sort(stock), EditId:0, EditName:'', 
    EditQuantity:'', EditPrice:'', EditTax:'', EditValue:'', EditTaxValue:'', DeleteryValue:0, DeliveryTaxValue:0});
  }
  render(){
    return (
      <div>
        <Card>
          <CardHeader  title="Dostawy" />
          <CardContent>
            {this.state.EditOpen
              ?<DeliveryEdit
              EditToggle={this.EditToggle}
              Order={this.state}
              ChangeValue={this.ChangeValue}
              AddToDelivery={this.AddToDelivery}
              EditItem={this.EditItem}
              DeleteItem={this.DeleteItem}
              AddItem={this.AddItem}
              />
              :<DeliveryList
              EditToggle={this.EditToggle}
              EditOrder={this.EditOrder}
              />}
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{}};

const mapDispatchToProps = {DeliveryFetched};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);