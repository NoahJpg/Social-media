import React from "react";
import Post from "./Post.js"

const mainPostList = [
  {
    userName: "Word Poster",
    blogPost: "Here are words for my daily post"   
  },
  {
    userName: "Text Poster",
    blogPost: "Here is text for my daily post"   
  },
  {
    userName: "Letters Poster",
    blogPost: "Here are some letters for my daily post"   
  }
]

function PostList(){
  return (
    <React.Fragment>
      <hr/>
      {mainPostList.map((post, index) =>
      <Post userName={post.userName}
        blogPost={post.blogPost}
        key={index}/>
      )}
    </React.Fragment>
  );
}


  export default PostList;