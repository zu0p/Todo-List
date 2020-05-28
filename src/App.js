import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Home, Mypage, Todo, Signup, LoginPage } from './pages';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="zu0p">
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="contents">
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/user" component={Mypage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
