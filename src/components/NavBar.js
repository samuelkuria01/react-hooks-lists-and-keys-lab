import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
      <a href="#home" key={home}>home</a>
      <a href="#about" key={about}>projects</a>
      <a href="#projects" key={projects}>projects</a>
  </nav>;
}

export default NavBar;
