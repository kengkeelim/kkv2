import React, { Component } from "react";
import "./Introduction.css";

class Introduction extends Component {
  render() {
    return (
      <header id="home">
        <div className="container">
          <div className="text-start text-shadow--dark font-white">
            <h1>A Business Consultant</h1>
            <div className="divider--white"></div>
            <p className="font-white">
              I help my clients generate leads and optimize business operations.
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Introduction;
