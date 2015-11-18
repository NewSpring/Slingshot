import React from "react";
import Input from "./../components/input"
import Validation from "./../components/validation"


const PersonalInfo = React.createClass({
  render() {

    return (
      
      <div>
      
        <fieldset>
        
          <legend>Personal Information</legend>
          
          <Input
            name="First Name"
            validation={Validation.alpha}
          />
          
          <Input
            name="Last Name"
            validation={Validation.alpha}
          />
          
          <Input
            name="Email Address"
            validation={Validation.email}
          />
          
        </fieldset>
        
        <a href="" className="btn push-double-bottom">
          Previous
        </a>
          
        <a href="" className="btn--filled push-double-bottom">
          Next
        </a>
        
      </div>
      
    );

  }
});


export default PersonalInfo