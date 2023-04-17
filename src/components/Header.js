import React from "react";
import socialIcon from "./../img/social-media-icon.png"

function Header(){
  return (
    <React.Fragment>
      <h1>Social Media Clone</h1>
      <img src={socialIcon} alt = "Social media icon" width="5%"/>
      <button type="button">Home</button>
      <button type="button">Notifications</button>
      <button type="button">Messages</button>

      <button type="button"> Search</button>
      <button type="button"> Tweet</button>
      <hr />
    </React.Fragment>
  )
}

export default Header;