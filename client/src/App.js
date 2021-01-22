import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user-selectors";

import { checkUserSession } from "./redux/user/user-actions";

import Spinner from "./components/spinner";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
  const Shop = lazy(() => import("./pages/shop/shop.component"));
  const SignInAndSignUp = lazy(() =>
    import("./pages/sign-in and sign-up page/sign-inandsign-uppage")
  );
  const CheckoutPage = lazy(() =>
    import("./pages/checkout/checkout.component")
  );

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            ></Route>
            <Route exact path="/checkout" component={CheckoutPage}></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
