import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { RootStyle, TableStyle } from '../../lib/styles';

const styles = {
  root: RootStyle,
  table: TableStyle,
  tableWrapper: {
    overflowX: 'auto',
  },
  clickable: {
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

class TodosPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, todos } = this.props;
    console.log(todos);

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            Your Tasks
          </Grid>
        </Grid>
      </div>
    );
  }
}

TodosPage.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
};

export default withStyles(styles)(TodosPage);
