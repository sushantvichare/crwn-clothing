import React,{useEffect} from "react";
import { Route } from "react-router";
import { connect } from "react-redux";



import { fetchCollectionStart } from "../../redux/shop/shop.actions";



import CollectionPageContainer from "../collection/collection.container";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";



const Shop=({match,fetchCollectionStart})=>{
  
  useEffect(()=>{
    fetchCollectionStart()
  },[fetchCollectionStart])
  


    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        ></Route>
      </div>
    );

}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});



export default connect(null, mapDispatchToProps)(Shop);
