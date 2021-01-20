import React, { Component } from "react";
import "./Work.css";
import workExperience from "./workExperience";
import Button from "../../components/Button";

class Work extends Component {
  render() {
    return (
      <section className="work" id="work">
        <div className="work-wrapper">
          <div className="work-title">
            <h2>My Work</h2>
          </div>
          <div className="work-all-experiences">
            {workExperience.map((work) => {
              return (
                <div className="work-experience">
                  <h3>{work.projectName}</h3>
                  <p>{work.projectDetails}</p>
                  <a href={work.websiteURL}>
                    <Button buttonClass="button secondarybtn" CTA="View More" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
