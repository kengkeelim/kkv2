import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return <div className={this.props.buttonClass}>{this.props.CTA}</div>;
  }
}

export default Button;
