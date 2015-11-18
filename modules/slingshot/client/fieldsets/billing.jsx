import React from "react";
import Input from "./../components/input"
import Validation from "./../components/validation"


const BillingInfo = React.createClass({
  render() {

    return (
      
      <div>
      
        <fieldset>
        
          <legend>Billing Information</legend>
          
          <Input
            name="Card Number"
            validation={Validation.creditCard}
          />
          
          <div className="grid">
          
            <div className="grid__item one-half one-whole@handheld">
          
              <Input
                name="Expiry"
                validation={Validation.creditExpiry}
              />
              
            </div>
            
            <div className="grid__item one-half one-whole@handheld">
              
              <Input
                name="CVV"
                validation={Validation.creditCVV}
              />
            
            </div>
          
          </div>
          
        </fieldset>
        
        <a href="" className="btn--secondary push-right push-double-bottom">
          Previous
        </a>
          
        <a href="" className="btn--filled push-double-bottom">
          Next
        </a>
        
        <p className="smallprint">By clicking submit you agree to our <a href="">Terms & Conditions</a></p>
        
      </div>
      
    );

  }
});


export default BillingInfo