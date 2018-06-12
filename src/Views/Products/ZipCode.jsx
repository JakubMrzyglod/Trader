import React from 'react';
import {Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class ZipCode extends React.Component{
    constructor(){
        super()
        this.state={
            Value:'adfadfad'
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