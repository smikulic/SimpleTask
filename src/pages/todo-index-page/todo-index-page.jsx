import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import {
  hoverSectionColor,
  secondaryColor,
  primaryColor,
  alertColor,
  textColor,
  hoverPointer,
  headingStyle,
} from '../../lib/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  heading: headingStyle,
  todoTitle: {
    flex: 1,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    color: textColor,
    fontWeight: '600',
  },
  todoWrapper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: 100,
    position: 'relative',
  },
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
  completed: {
    color: secondaryColor,
  },
  active: {
    color: theme.palette.text.secondary,
  },
  input: {
    border: 0,
    outline: 0,
    padding: theme.spacing.unit,
    fontSize: '0.9rem',
    width: '80%',
  },
  submit: {
    color: primaryColor,
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  addTaskWrapper: {
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
  todoHoverSection: {
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
  completeTask: {
    display: 'inline-block',
    textAlign: 'center',
    width: '50%',
    color: secondaryColor,
    height: '30px',
    borderRight: '1px solid white',
  },
  undoTask: {
    display: 'inline-block',
    textAlign: 'center',
    width: '50%',
    color: alertColor,
    height: '30px',
    borderRight: '1px solid white',
  },
  edit: {
    display: 'inline-block',
    textAlign: 'center',
    width: '50%',
  },
  hoverPointer: hoverPointer,
});

class TodosPage extends Component {
  constructor() {
    super();

    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleShowTodoSection = this.handleShowTodoSection.bind(this);
    this.handleOnTodoMouseEnter = this.handleOnTodoMouseEnter.bind(this);
    this.handleOnTodoMouseLeave = this.handleOnTodoMouseLeave.bind(this);

    this.state = {
      todoSectionActive: false,
      todoHoverSectionActive: undefined,
      name: '',
    }
  }

  handleShowTodoSection() {
    this.setState({ todoSectionActive: true });
  }
  
  handleTodoSubmit() {
    this.setState({ todoSectionActive: false });
    
    const newTodo = {
      id: this.props.todos.length + 1,
      name: this.state.name,
      completed: false,
    };

    this.props.todoCreate(newTodo);
  }

  handleOnTodoMouseEnter(todo) {
    this.setState({
      todoSectionActive: false,
      todoHoverSectionActive: todo,
    });
  }

  handleOnTodoMouseLeave() {
    //this.setState({ todoHoverSectionActive: undefined });
  }

  onNameChange = event => this.setState({ name: event.target.value });

  render() {
    const { classes, todos } = this.props;
    let active = 0;

    todos.forEach(todo => !todo.completed ? active++ : undefined);

    const activeTasksMessage = active ? `You have ${active} active tasks` : 'Well done!'
    const overviewStatusStyle = active ? classes.overviewStatusActive : classes.overviewStatusCompleted;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="display1" color="inherit" className={classes.heading}>Your tasks</Typography>
            <Paper className={overviewStatusStyle}>
              <Typography variant="title" color="inherit" className={classes.heading}>Complete all tasks</Typography>
              <Typography variant="subheading" color="inherit" className={classes.heading}>{activeTasksMessage}</Typography>
            </Paper>
          </Grid>
          { todos &&
            todos.map(todo => {
              return (
                <Grid item xs={4} key={todo.id}>
                  <Paper
                    className={classes.todoWrapper}
                    onMouseEnter={this.handleOnTodoMouseEnter.bind(this, todo.id)}
                    onMouseLeave={this.handleOnTodoMouseLeave}
                  >
                    <Typography variant="title" className={classes.todoTitle}>{todo.name}</Typography>
                    {
                      todo.completed ? (
                        <Typography variant="body2" className={classes.completed}>Completed</Typography>
                      ) : (
                        <Typography variant="body2" className={classes.active}>Active</Typography>
                      )
                    }
                    { this.state.todoHoverSectionActive === todo.id && (
                      <Typography variant="body2" className={classes.todoHoverSection}>
                        { todo.completed && (
                          <div
                            className={classes.undoTask}
                          >
                            <span className={classes.hoverPointer}>Undo</span>
                          </div>
                        )}
                        { !todo.completed && (
                          <div
                            className={classes.completeTask}
                          >
                            <span className={classes.hoverPointer}>Complete</span>
                          </div>
                        )}
                        <div
                          className={classes.edit}
                        >
                          <span className={classes.hoverPointer}>Edit</span>
                        </div>
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              )
            })
          }
          <Grid item xs={4}>
            <Paper className={classes.todoWrapper}>
              <div className={classes.center}>
                { !this.state.todoSectionActive && (
                  <div
                    className={classes.addTaskWrapper}
                    onClick={this.handleShowTodoSection}
                  >
                    <AddIcon />
                    <span className={classes.addTask}>Add task</span>
                  </div>
                )}
                { this.state.todoSectionActive && (
                  <div className={classes.center}>
                    <input
                      type="text"
                      onChange={this.onNameChange}
                      className={classes.input}
                      placeholder="Enter task name...."
                    />
                    <Typography
                      variant="body2"
                      className={classes.submit}
                      onClick={this.handleTodoSubmit}
                    >
                      Save
                    </Typography>
                  </div>
                )}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TodosPage.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  todoCreate: PropTypes.func.isRequired,
};

export default withStyles(styles)(TodosPage);
