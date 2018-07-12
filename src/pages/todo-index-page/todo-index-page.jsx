import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import TaskOverview from '../../components/task-overview';
import {
  hoverSectionColor,
  secondaryColor,
  primaryColor,
  alertColor,
  textColor,
  hoverPointer,
} from '../../lib/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
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
  todoEditSection: {
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
  },
});

class TodosPage extends Component {
  constructor() {
    super();

    this.handleTodoEdit = this.handleTodoEdit.bind(this);
    this.handleTodoComplete = this.handleTodoComplete.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleTodoEditSubmit = this.handleTodoEditSubmit.bind(this);
    this.handleShowTodoSection = this.handleShowTodoSection.bind(this);
    this.handleOnTodoMouseEnter = this.handleOnTodoMouseEnter.bind(this);
    this.handleOnTodoMouseLeave = this.handleOnTodoMouseLeave.bind(this);

    this.state = {
      todoNewSectionActive: false,
      todoEditSectionActive: undefined,
      todoHoverSectionActive: undefined,
      name: '',
    }
  }

  handleShowTodoSection() {
    this.setState({ todoNewSectionActive: true });
  }
  
  handleTodoSubmit() {
    this.setState({ todoNewSectionActive: false });
    
    const newTodo = {
      id: this.props.todos.length + 1,
      name: this.state.name,
      completed: false,
    };

    this.props.todoCreate(newTodo);
  }

  handleTodoEditSubmit(todo) {
    this.setState({ todoEditSectionActive: false });
    
    const updatedTodo = {
      id: todo.id,
      name: this.state.name,
      completed: todo.completed,
    };

    this.props.todoUpdate(updatedTodo);
  }

  handleTodoComplete(todo) {
    const updatedTodo = {
      ...todo,
      completed: true,
    };
    this.props.todoUpdate(updatedTodo);
  }

  handleTodoUndo(todo) {
    const updatedTodo = {
      ...todo,
      completed: false,
    };
    this.props.todoUpdate(updatedTodo);
  }

  handleOnTodoMouseEnter(todoId) {
    this.setState({
      todoNewSectionActive: false,
      todoHoverSectionActive: todoId,
    });
  }

  handleTodoEdit(todo) {
    this.setState({ todoEditSectionActive: true });
    this.setState({
      todoNewSectionActive: false,
      name: todo.name,
      todoEditSectionActive: todo.id,
    });
  }

  handleOnTodoMouseLeave() {
    this.setState({ todoHoverSectionActive: undefined });
  }

  onNameChange = event => this.setState({ name: event.target.value });

  render() {
    const { classes, todos } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <TaskOverview todos={todos} />
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
                    { this.state.todoHoverSectionActive === todo.id && !this.state.todoEditSectionActive && (
                      <Typography variant="body2" className={classes.todoHoverSection}>
                        { todo.completed && (
                          <div
                            className={classes.undoTask}
                            onClick={this.handleTodoUndo.bind(this, todo)}
                          >
                            <span className={classes.hoverPointer}>Undo</span>
                          </div>
                        )}
                        { !todo.completed && (
                          <div
                            className={classes.completeTask}
                            onClick={this.handleTodoComplete.bind(this, todo)}
                          >
                            <span className={classes.hoverPointer}>Complete</span>
                          </div>
                        )}
                        <div
                          className={classes.edit}
                          onClick={this.handleTodoEdit.bind(this, todo)}
                        >
                          <span className={classes.hoverPointer}>Edit</span>
                        </div>
                      </Typography>
                    )}
                    { this.state.todoEditSectionActive === todo.id && (
                      <div className={classes.todoEditSection}>
                        <input
                          type="text"
                          onChange={this.onNameChange}
                          className={classes.input}
                          value={this.state.name}
                        />
                        <Typography
                          variant="body2"
                          className={classes.submit}
                          onClick={this.handleTodoEditSubmit.bind(this, todo)}
                        >
                          Save
                        </Typography>
                      </div>
                    )}
                  </Paper>
                </Grid>
              )
            })
          }
          <Grid item xs={4}>
            <Paper className={classes.todoWrapper}>
              <div className={classes.center}>
                { !this.state.todoNewSectionActive && (
                  <div
                    className={classes.addTaskWrapper}
                    onClick={this.handleShowTodoSection}
                  >
                    <AddIcon />
                    <span className={classes.addTask}>Add task</span>
                  </div>
                )}
                { this.state.todoNewSectionActive && (
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
  todoUpdate: PropTypes.func.isRequired,
};

export default withStyles(styles)(TodosPage);
