import React from "react";
import PropTypes from "prop-types";

function UserName(props){
  return (
    <React.Fragment>
      <div class="user-name-container">
        <hr/>
        <aside>
        <h3>{props.userName}</h3>
        <p>UserName: FirstName LastName</p>
        </aside>
      </div>
    </React.Fragment>
  );
}

export default UserName;