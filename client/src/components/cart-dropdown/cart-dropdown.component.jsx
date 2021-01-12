import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router';

import {toggleCart} from '../../redux/cart/cart-actions';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart-selectors';

import './cart-dropdown.styles.scss';


const CartDropdown=({cartItems,history,toggleCart})=>(
  <div className='cart-dropdown'>

    <div className='cart-items'>
    {cartItems.length?
      (cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>)))
      :(<span className='empty-message'>Your cart is empty</span>)
    }
    </div>    

    <CustomButton onClick={()=>{history.push('/checkout');toggleCart();}}>GO TO CHECKOUT</CustomButton>

  </div>
   );

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems,

})

const mapDispatchToProps=dispatch=>({
  toggleCart:()=>dispatch(toggleCart())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));