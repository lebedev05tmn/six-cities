import React from "react";
import CommentItem from "./comment-item";

const CommentList = (props) => {
  const {currentData} = props;
  const {comments} = currentData;
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <CommentItem data={comment} key={comment.id} />
      ))}
    </ul>
  );
};

export default CommentList;
