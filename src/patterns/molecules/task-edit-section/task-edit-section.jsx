import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { submitButtonStyle, inputStyle } from '../../../lib/styles';

const styles = theme => ({
  taskEditSectionStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  submitButtonStyle,
  inputStyle: inputStyle(theme),
});

class TaskEditSection extends Component {
  render() {
    const {
      active,
      classes,
      handleOnSubmit,
      currentTaskValue,
      handleOnNameChange,
    } = this.props;

    if (!active) {
      return null;
    }

    return (
      <div className={classes.taskEditSectionStyle}>
        <input
          type="text"
          onChange={handleOnNameChange}
          className={classes.inputStyle}
          value={currentTaskValue}
        />
        <Typography
          variant="body2"
          className={classes.submitButtonStyle}
          onClick={handleOnSubmit}
        >
          Save
        </Typography>
      </div>
    );
  }
}

TaskEditSection.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  currentTaskValue: PropTypes.string.isRequired,
  handleOnNameChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskEditSection);
