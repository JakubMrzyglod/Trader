import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'semantic-ui-react';

export class Surname extends React.Component{
    constructor(){
        super()
        this.state={
            Value:'kjhajlhjkas'
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