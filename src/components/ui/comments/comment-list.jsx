import React from "react";
import CommentItem from "./comment-item";
import AppTypes from "../../../types/types";

const CommentList = (props) => {
  const {currentData} = props;
  return (
    <ul className="reviews__list">
      {currentData.map((comment, index) => (
        <CommentItem commentData={comment} key={`user-comment-` + index} />
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  currentData: AppTypes.commentList,
};

export default CommentList;
