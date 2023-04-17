import React from "react";
import PropTypes from "prop-types";

function UserBio(props){
  return (
    <React.Fragment>
      <div class="user-bio-container">
        <hr/>
        <aside>
        <h3>{props.userName}</h3>
        <p>User Bio Test</p>
        </aside>
      </div>
    </React.Fragment>
  );
}


  export default UserBio;