import React from "react";

import Input from "../components/input"
import Validation from "../components/validation"
import BillingInformation from "../fieldsets/billing"

const Form = React.createClass({

  render() {

    return (
      <section>
        
        <div className="grid text-center">
          
          <div className="grid__item one-third one-whole@handheld">
          
            <form>
            
              <BillingInformation />
              
            </form>
          
          </div>
          
        </div>

      </section>
    );

  }

})
export default Form