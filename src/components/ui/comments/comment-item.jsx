import React from "react";
import {parseDate} from "../../../utils/utils";
import AppTypes from "../../../types/types";

const CommentItem = (props) => {
  const {username, comment, rating, date} = props.data;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src="img/avatar-max.jpg"
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name"> {username} </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {parseDate(date)}
        </time>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  data: AppTypes.comment,
};

export default CommentItem;
