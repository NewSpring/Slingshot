import React from "react";


const Input = React.createClass({

  componentWillMount() {

    if (this.props.id) {
      this.labelFor = this.props.id;
    } else if (this.props.name) {
      this.labelFor = this.props.name;
    } else {
      this.labelFor = this.props.label;
    }

    this.labelName = this.props.label ? this.props.label : this.props.name;
    this.Placeholder = this.props.placeholder ? this.props.placeholder : this.props.label;

    const regex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
    const userAgent = navigator.userAgent;

    this.tabIndex = regex.test(userAgent) ? -1 : 0;

  },

  validate: function validate() {
    const value = event.target.value;
    if (this.props.validation && typeof(this.props.validation) === "function") {

      this.replaceState({
        validating: this.props.validation(value)
      });
    }
  },

  disabled: function disabled() {
    if (this.props.disabled) {
      return disabled;
    }
  },

  renderHelpText(message) {
    if (this.state && !this.state.validating) {
      return (
        <span className="input__status">
          {this.props.validationErrorMessage}
        </span>
      );
    }

  },

  render() {

    return (
      <div>

        <label htmlFor={this.labelFor}>
          {this.labelName}
        </label>

        <input
          type={this.props.type}
          placeholder={this.Placeholder}
          name={this.labelName}
          className={this.props.class}
          tabIndex={this.tabIndex}
          disabled={this.disabled()}
          onBlur={this.validate}
        />

        {this.renderHelpText()}

      </div>
    );

  }

})


export default Input
