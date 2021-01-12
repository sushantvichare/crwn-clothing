import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
 


const StripeCheckoutButton =({ price })=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51I6U3zDBLf6PobgaqriJOPIWhlg1P2aURstzSVBxEUyd14WMrUBFltICoU6Sq34LZRjTTtdnyhAxeOWDHFRCu1Vy00JsJOnmwe'

    const onToken=token=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                
                amount:priceForStripe,
                token
                } }).then(response=>{
                    alert('Payment Successful');
                }).catch(error=>{
                    console.log('Payment Error:',error);
                    alert('There is an issue with payment');
                });
    }
    return(
        <StripeCheckout 
        lable='Pay Now' 
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description ={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        ></StripeCheckout>
        )

}

export default StripeCheckoutButton;