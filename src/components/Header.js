import React from "react";
import socialIcon from "./../img/social-media-icon.png"

function Header(){
  return (
    <React.Fragment>
      <h1>Social Media Clone</h1>
      <img src={socialIcon} alt = "Social media icon" width="5%"/>
    </React.Fragment>
  )
}

export default Header;