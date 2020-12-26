import React from 'react';
import {HashRouter, Route,Switch} from 'react-router-dom';

import './pages/homepage/homepage.compopnent'

import './App.css';
import HomePage from './pages/homepage/homepage.compopnent';

function Hats(){
  return<div>
    <h1>Hats</h1>
  </div>
}

function App() {
  return (
    <div>
     <Switch>
       <Route exact path="/" component={HomePage}></Route>
       <Route path="/shop/hats" component={Hats}></Route>
     </Switch>
    </div>
  );
}

export default App;
