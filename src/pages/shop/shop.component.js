import React from "react";
import {Route} from "react-router";


import CollectionPage from '../collection/collection.component';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"

const Shop =({match})=>(

  <div className='shop-page'>
  <Route exact path={`${match.path}`} component={CollectionsOverview} ></Route>
  <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
</div>

)



export default Shop;
