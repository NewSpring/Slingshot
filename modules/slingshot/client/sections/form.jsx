import React from "react";

import Input from "../components/input"
import Validation from "../components/validation"

const Form = React.createClass({

  render() {

    return (
      <section>
        
        <form>
          <Input 
            label="First Name"
            validation={Validation.notNull}
            errorText="Please enter a valid first name"
          />
        
          <Input 
            label="Email"
            validation={Validation.email}
            errorText="Please enter a valid email address"
          />
          
          <Input 
            label="Credit Card Number"
            validation={Validation.creditCard}
            errorText="Please enter a valid credit card number"
          />
          
          <Input 
            label="Expiration Date"
            validation={Validation.creditExpiry}
            errorText="Please enter a valid expiration date"
          />
          
          <Input 
            label="Short Name"
            validation={Validation.azureSubdomain}
            errorText="Please enter a valid email address"
          />
        </form>

      </section>
    );

  }

})
export default Form