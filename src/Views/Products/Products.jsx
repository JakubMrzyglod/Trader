import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Name} from './Name.jsx';
import {Surname} from './Surname';
import {City} from './City';
import Adress from './Adress';
import {ZipCode} from './ZipCode';
import {Input} from 'semantic-ui-react';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Pdoducts extends React.Component  {
  // constructor(){
  //   super()
  //   this.state={
  //     Value1:'kafjadfh',
  //     Value2:'kafjadfh',
  //     Value3:'kafjadfh',
  //     Value4:'kafjadfh',
  //     Value5:'kafjadfh',
  //     Value6:'kafjadfh',
  //     Value7:'kafjadfh',
  //     Value8:'kafjadfh',
  //     Value9:'kafjadfh',
  //     Value10:'kafjadfh',
  //     Value11:'kafjadfh',
  //     Value12:'kafjadfh',
  //     Value13:'kafjadfh',
  //     Value14:'kafjadfh',
  //     Value15:'kafjadfh',
  //   }
  // }
  // handleInputChange1 =e=> {this.setState({Value1:e.target.value})}
  // handleInputChange2 =e=> {this.setState({Value2:e.target.value})}
  // handleInputChange3 =e=> {this.setState({Value3:e.target.value})}
  // handleInputChange4 =e=> {this.setState({Value4:e.target.value})}
  // handleInputChange5 =e=> {this.setState({Value5:e.target.value})}
  // handleInputChange6 =e=> {this.setState({Value6:e.target.value})}
  // handleInputChange7 =e=> {this.setState({Value7:e.target.value})}
  // handleInputChange8 =e=> {this.setState({Value8:e.target.value})}
  // handleInputChange9 =e=> {this.setState({Value9:e.target.value})}
  // handleInputChange10 =e=> {this.setState({Value10:e.target.value})}
  // handleInputChange11 =e=> {this.setState({Value11:e.target.value})}
  // handleInputChange12 =e=> {this.setState({Value12:e.target.value})}
  // handleInputChange13 =e=> {this.setState({Value13:e.target.value})}
  // handleInputChange14 =e=> {this.setState({Value14:e.target.value})}
  // handleInputChange15 =e=> {this.setState({Value15:e.target.value})}
  render(){
  return (
    <div>
      <Card>
        <CardContent>
        <Name />
        <Surname />
        <City />
        <ZipCode />
        <Adress />
        <Name />
        <Surname />
        <City />
        <ZipCode />
        <Adress />
        <Name />
        <Surname />
        <City />
        <ZipCode />
        <Adress />
        
        {/* <Input
            type="text"
            placeholder="Title"
            value={this.state.Value1}
            onChange={this.handleInputChange1} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value2}
            onChange={this.handleInputChange2} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value3}
            onChange={this.handleInputChange3} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value4}
            onChange={this.handleInputChange4} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value5}
            onChange={this.handleInputChange5} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value6}
            onChange={this.handleInputChange6} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value7}
            onChange={this.handleInputChange7} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value8}
            onChange={this.handleInputChange8} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value9}
            onChange={this.handleInputChange9} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value10}
            onChange={this.handleInputChange10} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value11}
            onChange={this.handleInputChange11} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value12}
            onChange={this.handleInputChange12} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value13}
            onChange={this.handleInputChange13} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value14}
            onChange={this.handleInputChange14} />
            <Input
            type="text"
            placeholder="Title"
            
            
            value={this.state.Value15}
            onChange={this.handleInputChange15} /> */}
            </CardContent>
      </Card>
    </div>
  );
}
}

Pdoducts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pdoducts);