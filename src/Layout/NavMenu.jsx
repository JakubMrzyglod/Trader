import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import {Drafts, LocalShipping, Dashboard} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  navlink: {
    textDecoration:"none",
  }
});

function NavMenu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <NavLink  to="/" className={classes.navlink}>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>
        <NavLink  to="/Dostawy" className={classes.navlink}>
        <ListItem button >
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText primary="Dostawy" />
        </ListItem>
        </NavLink>
        <NavLink  to="/Produkty" className={classes.navlink}>        
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Produkty" />
        </ListItem>
        </NavLink>
      </List>
    </div>
  );
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMenu);