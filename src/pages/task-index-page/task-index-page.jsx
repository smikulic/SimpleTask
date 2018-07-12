import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TaskOverview from '../../patterns/molecules/task-overview';
import TaskSection from '../../patterns/molecules/task-section';
import TaskEditSection from '../../patterns/molecules/task-edit-section';
import TaskHoverSection from '../../patterns/molecules/task-hover-section';
import TaskCreateSection from '../../patterns/molecules/task-create-section';
import { submitButtonStyle } from '../../lib/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  taskWrapperStyle: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: 100,
    position: 'relative',
  },
  submitButtonStyle,
});

class TaskIndexPage extends Component {
  constructor() {
    super();

    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleOnComplete = this.handleOnComplete.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnEditSubmit = this.handleOnEditSubmit.bind(this);
    this.handleOnCreateSubmit = this.handleOnCreateSubmit.bind(this);
    this.handleShowCreateSection = this.handleShowCreateSection.bind(this);

    this.state = {
      newTaskSectionActive: false,
      editTaskSectionActive: undefined,
      hoverTaskSectionActive: undefined,
      name: '',
    }
  }

  handleShowCreateSection() {
    this.setState({ newTaskSectionActive: true });
  }
  
  handleOnCreateSubmit() {
    this.setState({ newTaskSectionActive: false });
    const newTodo = {
      id: this.props.todos.length + 1,
      name: this.state.name,
      completed: false,
    };
    this.props.todoCreate(newTodo);
  }

  handleOnEditSubmit(todo) {
    this.setState({ editTaskSectionActive: false });
    const updatedTodo = {
      ...todo,
      name: this.state.name,
    };
    this.props.todoUpdate(updatedTodo);
  }

  handleOnComplete(todo) {
    const updatedTodo = {
      ...todo,
      completed: true,
    };
    this.props.todoUpdate(updatedTodo);
  }

  handleOnUndo(todo) {
    const updatedTodo = {
      ...todo,
      completed: false,
    };
    this.props.todoUpdate(updatedTodo);
  }

  handleOnMouseEnter(todoId) {
    this.setState({
      newTaskSectionActive: false,
      hoverTaskSectionActive: todoId,
    });
  }

  handleOnEdit(todo) {
    this.setState({ editTaskSectionActive: true });
    this.setState({
      newTaskSectionActive: false,
      name: todo.name,
      editTaskSectionActive: todo.id,
    });
  }

  handleOnMouseLeave() {
    this.setState({ hoverTaskSectionActive: undefined });
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
                    className={classes.taskWrapperStyle}
                    onMouseEnter={this.handleOnMouseEnter.bind(this, todo.id)}
                    onMouseLeave={this.handleOnMouseLeave}
                  >
                    <TaskSection currentTask={todo} />
                    <TaskHoverSection
                      active={this.state.hoverTaskSectionActive === todo.id && !this.state.editTaskSectionActive}
                      currentTask={todo}
                      handleOnEdit={this.handleOnEdit.bind(this, todo)}
                      handleOnUndo={this.handleOnUndo.bind(this, todo)}
                      handleOnComplete={this.handleOnComplete.bind(this, todo)}
                    />
                    <TaskEditSection
                      active={this.state.editTaskSectionActive === todo.id}
                      handleOnSubmit={this.handleOnEditSubmit.bind(this, todo)}
                      currentTaskValue={this.state.name}
                      handleOnNameChange={this.onNameChange}
                    />
                  </Paper>
                </Grid>
              )
            })
          }
          <Grid item xs={4}>
            <Paper className={classes.taskWrapperStyle}>
              <TaskCreateSection
                active={this.state.newTaskSectionActive}
                handleOnNameChange={this.onNameChange}
                handleOnCreateSubmit={this.handleOnCreateSubmit}
                handleOnShowCreateSection={this.handleShowCreateSection}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TaskIndexPage.propTypes = {
  todos: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  todoCreate: PropTypes.func.isRequired,
  todoUpdate: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskIndexPage);
