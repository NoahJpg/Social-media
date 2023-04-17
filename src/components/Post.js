import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
      <p>{props.blogPost}</p>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired
}

export default Post;
