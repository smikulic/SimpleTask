import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { textColor, secondaryColor } from '../../../lib/styles';

const styles = theme => ({
  taskTitleStyle: {
    flex: 1,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    color: textColor,
    fontWeight: '600',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  completedStatusStyle: {
    color: secondaryColor,
  },
  activeStatusStyle: {
    color: theme.palette.text.secondary,
  },
});

class TaskSection extends Component {
  render() {
    const {
      classes,
      currentTask,
    } = this.props;

    return (
      <span>
      <Typography variant="title" className={classes.taskTitleStyle}>
        {currentTask.name}
      </Typography>
      {
        currentTask.completed ? (
          <Typography variant="body2" className={classes.completedStatusStyle}>
            Completed
          </Typography>
        ) : (
          <Typography variant="body2" className={classes.activeStatusStyle}>
            Active
          </Typography>
        )
      }
      </span>
    );
  }
}

TaskSection.propTypes = {
  classes: PropTypes.object.isRequired,
  currentTask: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskSection);
