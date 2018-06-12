import React from 'react';
import { ListItem, ListItemText, Button} from '@material-ui/core';

class List extends React.Component {

  render() {
      let data= [
          {"id":1, "Name": "imie"},
          {"id":1, "Name": "imie"},
          {"id":1, "Name": "imie"},
          {"id":1, "Name": "imie"},
          {"id":1, "Name": "imie"}
      ]
    return (
     <div>
         <Button onClick={this.props.change}>Edytuj</Button>
        {data.map(row=>{
            return(
             <ListItem button >
             <ListItemText primary={row.Name} secondary={row.id} />
             </ListItem>)
        })}
     </div>
    );
  }
}

export default List;
