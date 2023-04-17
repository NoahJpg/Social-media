import React from "react";
import PropTypes from "prop-types";

function UserBio(props){
  return (
    <React.Fragment>
      <div class="user-bio-container">
        <hr/>
        <aside>
        <h3>{props.userName}</h3>
        <p>UserBio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Nunc consequat interdum varius sit amet. Varius morbi enim nunc faucibus a pellentesque. Nullam ac tortor vitae purus faucibus. Augue neque gravida in fermentum et sollicitudin ac.</p>
        </aside>
      </div>
    </React.Fragment>
  );
}


  export default UserBio;