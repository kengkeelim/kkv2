import React, { Component } from "react";
import "./Profile.css";

import profilePhoto from "../../assets/kk-profile-v4.png";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github-big-logo.svg";

class Profile extends Component {
  render() {
    return (
      <section id="about">
        <div className="container split">
          <div className="profile-wrapper">
            <div className="profile-photo-wrapper">
              <img
                src={profilePhoto}
                alt="KK profile"
                className="profile-photo"
              />
            </div>
            <div className="label">Kuala Lumpur, MY</div>
            <div className="icon-group">
              <a href="https://facebook.com/kengkee.lim">
                <div className="icon">
                  <img src={facebook} alt="Facebook" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kengkeelim/">
                <div className="icon">
                  <img src={linkedin} alt="Linkedin" />
                </div>
              </a>
              <a href="https://github.com/kengkeelim">
                <div className="icon">
                  <img src={github} alt="Github" />
                </div>
              </a>
            </div>
          </div>
          <div className="about-wrapper border-shadow--dark">
            <div className="summary-wrapper">
              <h2 className="font-dark text-start">Summary</h2>
              <p className="text-start">
                I established myself as a strong executor in operations with
                almost 3 years of experience in building the backbone of the
                product catalog from 0 to 200k product assortments and growing
                the team from 4 to 10 persons. I pride myself to be an
                all-rounder with experience and achievements from the various
                background - Marketing, Sales, Customer Service, and Human
                Resources.
              </p>
            </div>
            <div className="skills-wrapper">
              <h2>Skills</h2>
              <div className="all-skills">
                <div className="skill">Management</div>
                <div className="skill">Customer Service</div>
                <div className="skill">SOP Development</div>
                <div className="skill">Process Improvement</div>
                <div className="skill">Digital Marketing</div>
                <div className="skill">Front End Development</div>
              </div>
            </div>
            <div className="certifications-wrapper">
              <h2>Certifications</h2>
              <div className="all-cert-links">
                <div className="cert-link">
                  <a
                    href="https://skillshop.exceedlms.com/student/award/58830251"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Ads Search Certification
                  </a>
                </div>
                <div className="cert-link">
                  <a
                    href="https://www.credential.net/bifqx6ll"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Build Front-End Web Apps from Scratch
                  </a>
                </div>
                <div className="cert-link">
                  <a
                    href="https://www.datacamp.com/statement-of-accomplishment/course/58c539167b497501e9c7c2874cfc5d28f8537895"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Data Analysis with Spreadsheets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
