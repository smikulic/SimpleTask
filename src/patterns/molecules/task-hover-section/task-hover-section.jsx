import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../atoms/text-button';
import { hoverSectionColor } from '../../../lib/styles';

const styles = {
  taskHoverSectionStyle: {
    backgroundColor: hoverSectionColor,
    paddingTop: '30px',
    opacity: '0.85',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.2rem',
  },
};

class TaskHoverSection extends Component {
  render() {
    const {
      active,
      classes,
      currentTask,
      handleOnEdit,
      handleOnUndo,
      handleOnComplete,
    } = this.props;

    if (!active) {
      return null;
    }

    return (
      <Typography variant="body2" className={classes.taskHoverSectionStyle}>
        { currentTask.completed && (
          <TextButton type="undo" handleOnClick={handleOnUndo} />
        )}
        { !currentTask.completed && (
          <TextButton type="complete" handleOnClick={handleOnComplete} />
        )}
        <TextButton type="edit" handleOnClick={handleOnEdit} />
      </Typography>
    );
  }
}

TaskHoverSection.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  currentTask: PropTypes.object.isRequired,
  handleOnEdit: PropTypes.func.isRequired,
  handleOnUndo: PropTypes.func.isRequired,
  handleOnComplete: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskHoverSection);
