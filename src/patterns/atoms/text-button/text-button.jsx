import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  alertColor,
  secondaryColor,
  hoverPointerStyle,
  buttonActionStyle,
} from '../../../lib/styles';

const styles = {
  undoActionStyle: buttonActionStyle(alertColor),
  completeActionStyle: buttonActionStyle(secondaryColor),
  editActionStyle: {
    display: 'inline-block',
    textAlign: 'center',
    width: '50%',
  },
  hoverPointerStyle,
};

class TaskHoverSection extends Component {
  render() {
    const {
      type,
      classes,
      handleOnClick,
    } = this.props;

    let buttonText, buttonStyle;

    switch(type) {
      case 'undo':
        buttonText = 'Undo';
        buttonStyle = classes.undoActionStyle;
        break;
      case 'complete':
        buttonText = 'Complete';
        buttonStyle = classes.completeActionStyle;
        break;
      case 'edit':
      default:
        buttonText = 'Edit';
        buttonStyle = classes.editActionStyle;
    };
    

    return (
      <div className={buttonStyle} onClick={handleOnClick}>
        <span className={classes.hoverPointerStyle}>
          {buttonText}
        </span>
      </div>
    );
  }
}

TaskHoverSection.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskHoverSection);
