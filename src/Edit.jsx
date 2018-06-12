import React from 'react';
import TextField from '@material-ui/core/TextField';

class Edit extends React.Component {
    render() {
      const {ChangeValue, Name} = this.props;
    return (
     <div>
         <TextField         
         value={Name}
         onChange={ChangeValue}
         id="with-placeholder"
         label="With placeholder"
         placeholder="Placeholder"
         margin="normal"
        />
        <TextField         
         value={Tax}
         onChange={ChangeValue}
         id="with-placeholder"
         label="With placeholder"
         placeholder="Placeholder"
         margin="normal"
        /><TextField         
        value={Name}
        onChange={ChangeValue}
        id="with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        margin="normal"
       /><TextField         
       value={Name}
       onChange={ChangeValue}
       id="with-placeholder"
       label="With placeholder"
       placeholder="Placeholder"
       margin="normal"
      />
     </div>
    );
  }
}
export default Edit;