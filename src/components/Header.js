import React from "react";
import socialMediaImage from "./../img/social-media-icon.png"

function Header(){
  return (
    <React.Fragment>
      <h1>Social Media</h1>
      <img src={headerImage} alt = "Social media icon" />
    </React.Fragment>
  )
}

export default Header;