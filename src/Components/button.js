import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Button }from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function button(props) {
  const { classes, text } = props;
  return (
      <Button color="primary" className={classes.button}>
        {text}
      </Button>
  );
}

button.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(button);