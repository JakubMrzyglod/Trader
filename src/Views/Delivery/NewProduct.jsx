import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {AddProduct} from '../../Store/Actions.js';
import NewProductEdit from './NewProductEdit.jsx';
import {List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core'
import {Add} from '@material-ui/icons';

class NewProduct extends React.Component{
    render(){
    return(
        <List>
            <ListItem>
            <ListItemText primary={
            <NewProductEdit/>
            } />
            <ListItemSecondaryAction>
                        <IconButton color="primary" onClick={()=>this.props.AddProduct(2)}>
                            <Add />
                        </IconButton>
                    </ListItemSecondaryAction>
            </ListItem>
        </List>
    )
}
}
const mapStateToProps = state => {
    return{
    }
  };

const mapDispatchToProps = {AddProduct};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);