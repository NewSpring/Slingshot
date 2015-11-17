import { Component } from "react";

export default class Input extends Component {

  constructor(props) {

    super(props);

    var labelFor;
    var labelName;
    var Placeholder;
    var className;
    var tabIndex;
    var regex;
    var userAgent;

    if (props.id) {
      this.labelFor = props.id;
    } else if (props.name) {
      this.labelFor = props.name;
    } else if (props.label) {
      this.labelFor = props.label;
    }

    if (props.label) {
      this.labelName = props.label;
    } else if (props.name) {
      this.labelName = props.name;
    }

    if (props.placeholder) {
      this.Placeholder = props.placeholder;
    } else if (props.label) {
      this.Placeholder = props.label;
    }

    var regex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
    var userAgent = navigator.userAgent;

    if (regex.test(userAgent)) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }


    this.setState({ validating: true });

  }

  doThings(){

  }

  validate(event) {
    if (this.props.validation && typeof(this.props.validation) === "function") {
      const value = event.target.value;
      this.replaceState({
        validating: this.props.validation(value)
      });
    }
  }

  disabled() {
    if (this.props.disabled) {
      return disabled;
    }
  }

  renderHelpText(message) {
    if (this.state.validating) {
      return (
        <span className="input__status">
          {message}
        </span>
      );
    } else {
      this.setState({validating: true});
    }

  }

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



      </div>
    );

  }

}