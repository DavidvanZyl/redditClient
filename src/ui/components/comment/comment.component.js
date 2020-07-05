import './comment.component.scss';

import moment from 'moment';
import React from 'react';

const Comment = ({ data }) => {
  return (
    <div className="comment">
      <p className="comment__meta">
        <div className="comment__meta__name">{data.author}</div>
        {` ${data.ups} points`}
        <span />
        {`${moment.unix(data.created).fromNow()}`}
      </p>
      <p className="comment__body">{data.text}</p>
    </div>
  );
};

export default Comment;
