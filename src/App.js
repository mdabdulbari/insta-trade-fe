import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import ContactUs from './ContactUs/ContactUs';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
import Login from './Login/Login';
import Register from './Register/Register';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/contactus" component={ContactUs} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
