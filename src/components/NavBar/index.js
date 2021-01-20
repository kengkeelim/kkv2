import React, { Component } from "react";
import logo from "../../assets/KK_Logo_Square_Black_Transparent-BG_1500x1500.png";
import "./NavBar.css";
import close from "../../assets/close--black.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      selectedLink: "home",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleToggle() {
    this.setState({
      isToggle: !this.state.isToggle,
    });

    if (!this.state.isToggle) {
      document.querySelector("nav").className = "";
    } else document.querySelector("nav").className = "navbar-background";
  }

  handleClick(id) {
    this.setState({
      selectedLink: id,
      isToggle: !this.state.isToggle,
    });
  }

  handleScroll = () => {
    const yPos = window.pageYOffset;
    const navbarHeight = window.innerHeight / 10;
    if (yPos > navbarHeight) {
      document.querySelector("nav").className = "navbar-background";
    } else {
      document.querySelector("nav").className = "";
    }
  };

  render() {
    const navArray = ["home", "about", "work", "contact"];
    console.log(this.state.selectedLink);
    return (
      <nav>
        <div className="navbar-container">
          <div className="navbar-intro">Hi, I'm KK.</div>
          <ul
            className={
              this.state.isToggle
                ? "navbar-items slideIn fadeIn"
                : "navbar-items"
            }
          >
            {navArray.map((navItem) => (
              <li
                onClick={() => this.handleClick(navItem)}
                className={this.state.selectedLink === navItem ? "active" : ""}
                key={navItem}
              >
                <a href={`#${navItem}`}>{navItem}</a>
              </li>
            ))}
          </ul>
          <div onClick={() => this.handleToggle()}>
            {this.state.isToggle ? (
              <img src={close} alt="close" className="menu" />
            ) : (
              <img src={logo} alt="KK Logo" className="menu" />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
