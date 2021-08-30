import 'fontsource-roboto';
import './App.css';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { API_BASEURL } from './constants';

// import { API_LOGIN } from './constants';
// import { API_REGISTER } from './constants';

import { getAuthState } from "./redux/selectors";
import Article from './components/Article';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TodoApp from './components/TodoApp';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => {
  return {
    auth: getAuthState(state)
  };
};

class App extends React.Component {

  componentDidMount() {
    this.setupAuth();
  }

  setupAuth() {
    axios.defaults.baseURL = API_BASEURL;
    if (this.props.auth.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.props.auth.token}`;
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/articles">
            <Article />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/todos">
            <TodoApp />
          </Route>
          <PrivateRoute path="/" auth={this.props.auth}>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

// export default App;
export default connect(mapStateToProps)(App);