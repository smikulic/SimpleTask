import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { headingStyle, primaryColor, secondaryColor } from '../../../lib/styles';

const styles = theme => ({
  heading: headingStyle,
  overviewStatusActive: {
    padding: theme.spacing.unit * 2,
    color: 'white',
    backgroundColor: primaryColor,
  },
  overviewStatusCompleted: {
    padding: theme.spacing.unit * 2,
    color: 'white',
    backgroundColor: secondaryColor,
  },
});

class TaskOverview extends Component {
  render() {
    const { classes, todos } = this.props;
    let active = 0;

    todos.forEach(todo => !todo.completed ? active++ : undefined);

    const activeTasksMessage = active ? `You have ${active} active tasks` : 'Well done!'
    const overviewStatusStyle = active ? classes.overviewStatusActive : classes.overviewStatusCompleted;

    return (
      <Grid item xs={12}>
        <Typography variant="display1" color="inherit" className={classes.heading}>Your tasks</Typography>
        <Paper className={overviewStatusStyle}>
          <Typography variant="title" color="inherit" className={classes.heading}>Complete all tasks</Typography>
          <Typography variant="subheading" color="inherit" className={classes.heading}>{activeTasksMessage}</Typography>
        </Paper>
      </Grid>
    );
  }
}

TaskOverview.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
};

export default withStyles(styles)(TaskOverview);
