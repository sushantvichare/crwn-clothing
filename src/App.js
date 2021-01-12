import React,{useEffect} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {createStructuredSelector} from 'reselect';

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in and sign-up page/sign-inandsign-uppage"; 
import CheckoutPage from './pages/checkout/checkout.component';


import {connect} from 'react-redux';

import {selectCurrentUser} from './redux/user/user-selectors';

import {checkUserSession} from './redux/user/user-actions';


const App=({checkUserSession,currentUser})=>{
  
  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])



  
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/signin" render={()=>currentUser? (<Redirect to='/' />) :(<SignInAndSignUp/>)}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  


  }

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())  
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
