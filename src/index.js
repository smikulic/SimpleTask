import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
//import rootReducer from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
//import { todoIndexEnter } from './redux/actions/todo-actions';
//import TodoIndexPageContainer from './redux/containers/todo-index-page-container';
import DashboardPage from './pages/dashboard-page';
import App from './App';
import history from './lib/history';

const store = createStore(
  //rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          {/* <Route path='/todos' component={TodoIndexPageContainer} onEnter={store.dispatch(todoIndexEnter())} /> */}
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
