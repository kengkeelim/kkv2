import React, { Component } from "react";

import NavBar from "../../components/NavBar";
import Introduction from "../../sections/Introduction";
import Profile from "../../sections/Profile";
import Work from "../../sections/Work";
import Contact from "../../sections/Contact";
import Footer from "../../components/Footer";

class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Introduction />
        <Profile />
        <Work />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Main;
