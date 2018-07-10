import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { RootStyle, primaryColor } from '../../lib/styles';

const styles = theme => ({
  root: RootStyle,
  flex: {
    flex: 1,
  },
  name: {
    color: primaryColor,
    fontWeight: '600',
  },
  user: {
    float: 'right',
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
  },
  appBar: {
    backgroundColor: 'white',
  },
});

class Navigation extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
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
