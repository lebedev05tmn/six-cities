import React from "react";
import CommentItem from "./comment-item";

const CommentList = (props) => {
  const {currentData} = props;
  return (
    <ul className="reviews__list">
      {currentData.map((comment, index) => (
        <CommentItem data={comment} key={`user-comment-` + index} />
      ))}
    </ul>
  );
};

export default CommentList;
