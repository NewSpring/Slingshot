import React from "react";
import Input from "./../components/input"
import Validation from "./../components/validation"


const ChurchInfo = React.createClass({
  render() {

    return (
      
      <div>
      
        <fieldset>
        
          <legend>Church Information</legend>
          
          <Input
            name="Church Name"
            validation={Validation.alphaNumeric}
          />
          
          <Input
            name="Short Name"
            validation={Validation.azureSubdomain}
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


export default ChurchInfo