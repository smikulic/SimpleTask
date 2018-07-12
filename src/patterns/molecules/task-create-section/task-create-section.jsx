import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import {
  inputStyle,
  primaryColor,
  submitButtonStyle,
} from '../../../lib/styles';

const styles = theme => ({
  centerStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  addTaskWrapperStyle: {
    cursor: 'pointer',
    '&:hover': {
      color: primaryColor,
      textDecoration: 'underline',
    }
  },
  addTask: {
    float: 'right',
    marginTop: '3px',
    textDecoration: 'inherit',
  },
  inputStyle: inputStyle(theme),
  submitButtonStyle,
});

class TaskCreateSection extends Component {
  render() {
    const {
      active,
      classes,
      handleOnNameChange,
      handleOnCreateSubmit,
      handleOnShowCreateSection,
    } = this.props;

    return (
      <div className={classes.centerStyle}>
        { !active && (
          <div
            className={classes.addTaskWrapperStyle}
            onClick={handleOnShowCreateSection}
          >
            <AddIcon />
            <span className={classes.addTask}>
              Add task
            </span>
          </div>
        )}
        { active && (
          <div className={classes.centerStyle}>
            <input
              type="text"
              onChange={handleOnNameChange}
              className={classes.inputStyle}
              placeholder="Enter task name...."
            />
            <Typography
              variant="body2"
              className={classes.submitButtonStyle}
              onClick={handleOnCreateSubmit}
            >
              Save
            </Typography>
          </div>
        )}
      </div>
    );
  }
}

TaskCreateSection.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleOnNameChange: PropTypes.func.isRequired,
  handleOnCreateSubmit: PropTypes.func.isRequired,
  handleOnShowCreateSection: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskCreateSection);
