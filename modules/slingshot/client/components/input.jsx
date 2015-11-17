import React from "react";


const Input = React.createClass({

  componentWillMount() {

    if (this.props.id) {
      this.labelFor = this.props.id;
    } else if (this.props.name) {
      this.labelFor = this.props.name;
    } else if (this.props.label) {
      this.labelFor = this.props.label;
    }

    if (this.props.label) {
      this.labelName = this.props.label;
    } else if (this.props.name) {
      this.labelName = this.props.name;
    }

    if (this.props.placeholder) {
      this.Placeholder = this.props.placeholder;
    } else if (this.props.label) {
      this.Placeholder = this.props.label;
    }

    const regex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
    const userAgent = navigator.userAgent;

    if (regex.test(userAgent)) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }

  },

  validate: function validate() {
    const value = event.target.value;
    if (this.props.validation && typeof(this.props.validation) === "function") {

      this.replaceState({
        validating: this.props.validation(value)
      });
    }
  },

  disabled() {
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
