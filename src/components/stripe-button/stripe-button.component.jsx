import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
const StripeCheckoutButton = ({price, currentUser}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IIQqSKBqzDVMA79BsIqsJq4gVRVWZz2GKMya6onkvK9ulnXQXXNKpoUFpugPLcGqvDENAGehAsw5uhJEJybe0AD00Vzq5aTB7';
    console.log(currentUser);
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }
    return (
        <StripeCheckout 
          name={currentUser.displayName}
          label='Pay Now'
          image='https://sendeyo.com/up/d/f3eb2117da'
          stripeKey={publishableKey}
          description={`Your total is $${price}`}
          shippingAddress
          billingAddress
          panelLabel='Pay Now'
          token={onToken}
        />
    )
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(StripeCheckoutButton);