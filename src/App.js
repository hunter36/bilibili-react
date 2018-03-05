import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Search from './components/pages/Search';
import Space from './components/pages/Space';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

class App extends Component {
  componentDidMount(){
    window.onresize = function(){
      // window.location.reload();
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route exact path="/" render={()=><Redirect to="/main"/>}/>
          <Route path="/main" component={MainPage} />
          <Route exact path="/main" render={()=><Redirect to="/main/index"/>}/>
          <Route path="/search" component={Search} />
          <Route path="/space" component={Space} />
          <Route exact path="/space" render={()=><Redirect to="/space/history" />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
        
      </Router>
    );
  }
}

export default App;
