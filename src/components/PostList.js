import React from "react";
import Posts from "./Posts"

const mainPostList = [
  {
    username: "Word Poster",
    postText: "Here are words for my daily post"   
  },
  {
    username: "Text Poster",
    postText: "Here is text for my daily post"   
  },
  {
    username: "Letters Poster",
    postText: "Here are some letters for my daily post"   
  }
]

function PostList(){
  function TicketList(){
    return (
      <React.Fragment>
        <hr/>
        {mainTicketList.map((post, index) =>
        <post username={post.names}
          postText={post.postText}
          key={index}/>
        )}
      </React.Fragment>
    );
  }
}

  export default PostList;