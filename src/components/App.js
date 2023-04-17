import React from 'react';
import Header from "./Header";
import PostList from "./PostList";
import UserBio from "./UserBio";
import LinkedProfiles from './LinkedProfiles';

function App(){
  return (
    <React.Fragment>
      <Header />
      <PostList />
      <UserBio />
      <LinkedProfiles />
    </React.Fragment>
  );
}

export default App;
