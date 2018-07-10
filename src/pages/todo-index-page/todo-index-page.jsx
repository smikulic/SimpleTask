import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { primaryColor, secondaryColor } from '../../lib/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    flex: 1,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
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
});

class TodosPage extends Component {
  constructor() {
    super();

    this.handleShowTodoSection = this.handleShowTodoSection.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);

    this.state = {
      todoSectionActive: false,
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
                  <Paper className={classes.paper}>
                    <div>
                      {todo.name}
                    </div>
                  </Paper>
                </Grid>
              )
            })
          }
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              { !this.state.todoSectionActive && (
                <div onClick={this.handleShowTodoSection}>
                  Add task
                </div>
              )}
              { this.state.todoSectionActive && (
                <div>
                  <div><input type="text" onChange={this.onNameChange} /></div>
                  <div onClick={this.handleTodoSubmit}>Save</div>
                </div>
              )}
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
