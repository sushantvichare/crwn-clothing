import React, { Component} from 'react';

import SHOP_DATA from './shop-data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';



class Shop extends Component {

    constructor(props){
        super();
        
        this.state={
            collection:SHOP_DATA
        }

    }

    render(){
        return <div>
        {this.state.collection.map(({id,...otherProps})=><CollectionPreview key={id} {...otherProps}></CollectionPreview>)}

        </div>    
    
    
    
    
    }




}

export default Shop;