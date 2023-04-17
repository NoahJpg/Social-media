import React from 'react';
import Header from "./Header";
import UserBio from "./UserBio";
import UserName from "./UserName";
import PostList from "./PostList";
import LinkedProfiles from './LinkedProfiles';

function App(){
  return (
    <React.Fragment>
      <Header /> 
      <UserName />
      <UserBio />
      <PostList />
      <LinkedProfiles />
    </React.Fragment>
  );
}

export default App;
