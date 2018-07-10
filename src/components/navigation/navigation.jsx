import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { RootStyle } from '../../lib/styles';

const styles = {
  root: RootStyle,
  flex: {
    flex: 1,
  },
  name: {
    color: '#2EA6EF',
    fontWeight: '600',
  },
  user: {
    float: 'right',
    fontSize: '0.9rem',
  },
};

class Navigation extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <span className={classes.name}>SimpleTask</span>
              <span className={classes.user}>Hello, User!</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
