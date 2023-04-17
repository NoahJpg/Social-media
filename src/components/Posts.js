import React from "react";
import PropTypes from "prop-types";

function Posts(props){
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
    </React.Fragment>
  )
}

Posts.propTypes = {
  userName: propTypes.string.isRequired,
  postText: PropTypes.string.isRequired
}

export default Posts;