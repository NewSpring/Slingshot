import React from "react";

const Label = React.createClass({

  render() {
    return (
      <label htmlFor={this.props.labelFor}>
        {this.props.labelName}
      </label>
    )
  }
});


const Input = React.createClass({

  componentWillMount(){
    this.setState({
      active: false,
      focused: false,
      error: false,
      value: '',
      status: ''
    })
  },

  validate: function validate(event) {
    const value = event.target.value;

    if (!value) {
      this.setState({
        active: false,
        error: false
      })
    }

    this.setState({
      focused: false
    })

    if (this.props.validation && typeof(this.props.validation) === "function") {
      this.setState({
        error: !this.props.validation(value)
      });

    }
  },

  focus: function(event){
    this.setState({
      active: true,
      error: false,
      focused: true
    })
  },

  setStatus: function(message) {
    this.props.status = message;
  },

  disabled: function disabled() {
    if (this.props.disabled) {
      return disabled;
    }
  },

  renderHelpText(message) {

    if ((this.state.error && this.props.errorText) || this.state.status) {

      return (
        <span className="input__status push-top">
          {this.props.errorText || this.state.status}
        </span>
      );
    }

  },

  render() {
    let inputclasses = [
      "input"
    ];
    if (this.state.active) { inputclasses.push("input--active") }
    if (this.state.focused) { inputclasses.push("input--focused") }
    if (this.state.error) { inputclasses.push("input--alert") }
    if (this.props.classes) { inputclasses.push(this.props.classes) }

    return (
      <div className={inputclasses.join(" ")}>
        {(() => {
          if (!this.props.hideLabel){
            return (
              <Label
                labelFor={
                  this.props.id || this.props.label || this.props.name
                }
                labelName={
                  this.props.label || this.props.name
                }
              />
            )
          }
        })()}

        {(() => {
          if (this.props.helpText){
            return (
              <span className="input__help push-half-bottom text-left">
                <small>
                  {this.props.helpText}
                </small>
              </span>
            )
          }
        })()}

        <input
          ref={this.props.id || this.props.label || this.props.name}
          id={this.props.id || this.props.label || this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder || this.props.label}
          name={this.props.name || this.props.label }
          className={this.props.inputClass}
          disabled={this.disabled()}
          onBlur={this.validate}
          onFocus={this.focus}
          defaultValue={this.props.defaultValue}
        />

        {this.renderHelpText()}

      </div>
    );

  }

})


export default Input
