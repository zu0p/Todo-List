import React, {useState, useEffect} from 'react'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Main from './routes/Main'
import Login from './routes/Login'
import './App.css'

function App() {

  return (
    <div className="app">
      <HashRouter>
          {localStorage.getItem("token") ? 
            <Redirect exact to="/" /> 
          : 
            <Redirect to="/login" />
          }

          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;