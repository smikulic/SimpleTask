import { connect } from 'react-redux';
import { todoCreate } from '../actions/todo-actions';
import TodoIndexPage from '../../pages/todo-index-page';

const mapStateToProps = state => ({
  todos: state.appState.todos,
})

const mapDispatchToProps = dispatch => ({
  todoCreate: params => dispatch(todoCreate(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndexPage);
