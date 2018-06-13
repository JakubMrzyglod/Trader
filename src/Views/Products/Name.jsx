import React from 'react';
import {Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class Name extends React.Component{
    constructor(){
        super()
        this.state={
            Value1:'hhh',
            Value2:'dafdsfadf',
            Value3:'dafdsfadf',
            Value4:'dafdsfadf',
            Value5:'dafdsfadf'
        }
    }
    handleInputChange1 = name =>  e => {
        this.setState({[name]: e.target.value})
    }
    handleInputChange2 = e => {
        this.setState({Value2: e.target.value})
    }
    handleInputChange3 = e => {
        this.setState({Value3: e.target.value})
    }
    handleInputChange4 = e => {
        this.setState({Value4: e.target.value})
    }
    handleInputChange5 = e => {
        this.setState({Value5: e.target.value})
    }
    render() {
        return(
            <div>
            <Input
            type="text"
            placeholder="jeden"
            className="form-control"
            name="jeden"
            value={this.state.Value1}
            onChange={this.handleInputChange1('Value1')} />

            <Input
            type="text"
            placeholder="jeden"
            className="form-control"
            name="jeden"
            value={this.state.Value2}
            onChange={this.handleInputChange2} />

            <Input
            type="text"
            placeholder="jeden"
            className="form-control"
            name="jeden"
            value={this.state.Value3}
            onChange={this.handleInputChange3} />
            <Input
            type="text"
            placeholder="jeden"
            className="form-control"
            name="jeden"
            value={this.state.Value4}
            onChange={this.handleInputChange4} />
            <Input
            type="text"
            placeholder="jeden"
            className="form-control"
            name="jeden"
            value={this.state.Value5}
            onChange={this.handleInputChange5} />
            </div>
        )
    }
}