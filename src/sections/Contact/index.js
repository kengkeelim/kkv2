import React, { Component } from "react";
import Button from "../../components/Button";
import "./Contact.css";

class Contact extends Component {
  render() {
    const waMsg = "Hi KK, I got your number from your website, would like to";
    return (
      <section id="contact">
        <div className="container">
          I'm available for hire. Open for collaboration and project.
          <a
            href={`https://wa.me/60174830933?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button buttonClass="button primarybtn" CTA="Let's have a chat!" />
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
