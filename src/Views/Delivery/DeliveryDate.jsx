import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

function DeliveryDate(props) {
  const { classes } = props;
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()<10?0:''}${today.getMonth()}-${today.getDay()<10?0:''}${today.getDay()}`.trim();
  return (
    // <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Data"
        type="date"
        value={date}
        margin="normal"
        fullWidth
      />
    // {/* </form> */}
  );
}

DeliveryDate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeliveryDate);