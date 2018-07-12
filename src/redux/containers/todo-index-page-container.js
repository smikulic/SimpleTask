import { connect } from 'react-redux';
import {
  todoCreate,
  todoUpdate,
} from '../actions/todo-actions';
import TaskIndexPage from '../../pages/task-index-page';

const mapStateToProps = state => ({
  todos: state.appState.todos,
})

const mapDispatchToProps = dispatch => ({
  todoCreate: params => dispatch(todoCreate(params)),
  todoUpdate: params => dispatch(todoUpdate(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndexPage);
