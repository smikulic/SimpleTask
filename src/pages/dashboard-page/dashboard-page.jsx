import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { PaperStyle, RootStyle } from '../../lib/styles';

const styles = theme => ({
  root: RootStyle,
  paper: PaperStyle(theme),
  link: {
    color: 'blue',
    textDecoration: 'none',
    marginTop: '1rem',
    display: 'block',
  },
});

class DashboardPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Welcome to Your Todo Overview!
              <Link to="/todos" className={classes.link}>
                <Button color="inherit">Todo Overview</Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardPage);
