import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'semantic-ui-react';


export class City extends React.Component{
    constructor(){
        super()
        this.state={
            Value:'adfsafdfdd'
        }
    }
    handleInputChange = e => {
        this.setState({Value: e.target.value})
    }
    render() {
        return(
            <Input
            type="text"
            placeholder="Title"
            className="form-control"
            name="title"
            value={this.state.Value}
            onChange={this.handleInputChange} />
        )
    }
}