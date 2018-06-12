import React from 'react';
import {Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {handleInputChange} from "../../Store/Actions.js";
import {connect} from "react-redux";


class Adress extends React.Component{
    constructor(){
        super()
        this.state={
            Value:'this.props.Value'
        }
    }
    handleInputChange = e => {
        this.setState({Value: e.target.value})
    }
    render() {
        return(
            <Input
            placeholder="Title"
            label={{ basic: true, content: 'kg' }}
            labelPosition='right'
            value={this.state.Value}
            onChange={this.state.handleInputChange} />
        )
    }
}
const mapStateToProps = state => {
    return{
        Value: state.Delivery.Value
    }};
  
  const mapDispatchToProps = {handleInputChange};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Adress);