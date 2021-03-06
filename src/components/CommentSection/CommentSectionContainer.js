// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  let [commentState, setcommentState] = useState();
  // console.log(props.comments)
  return (
    <div>
      {props.comments.map(e => {
        return <Comment comment={e} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
