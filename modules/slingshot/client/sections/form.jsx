import React from "react";

import Input from "../components/input"
import Validation from "../components/validation"
import PersonalInformation from "../fieldsets/personal"

const Form = React.createClass({

  render() {

    return (
      <section>
        
        <form>
          
          <PersonalInformation />
          
        </form>

      </section>
    );

  }

})
export default Form