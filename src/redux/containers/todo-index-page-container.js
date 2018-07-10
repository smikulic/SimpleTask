import { connect } from 'react-redux';
import TodoIndexPage from '../../pages/todo-index-page';

const mapStateToProps = state => ({
  todos: state.appState.todos,
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndexPage);
