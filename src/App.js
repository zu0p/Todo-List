import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Main from './routes/Main'
import Login from './routes/Login'
import './App.css'


function App() {
  return (
    <div className="app">
      <HashRouter>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </HashRouter>
    </div>
  );
}

export default App;