import React from 'react';
import {HashRouter, Route,Switch} from 'react-router-dom';



import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component'



function App() {
  return (
    <div>
     <Switch>
       <Route exact path="/" component={HomePage}></Route>
       <Route path="/shop" component={Shop}></Route>
     </Switch>
    </div>
  );
}

export default App;
