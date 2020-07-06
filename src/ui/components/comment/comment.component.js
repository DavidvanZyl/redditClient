import './comment.component.scss';

import moment from 'moment';
import React from 'react';

import Awards from '../awards/awards.component';

const Comment = ({ data }) => {
  return (
    <div className="comment">
      <div className="comment__meta">
        <p className="comment__meta__name" data-testid="author">
          {data.author}
        </p>
        <p data-testid="ups">{` ${data.ups} points`}</p>
        <span className="comment__meta__space" />
        {`${moment.unix(data.created).fromNow()}`}
        <Awards awards={data.awards} />
      </div>
      <p className="comment__body" data-testid="text">
        {data.text}
      </p>
    </div>
  );
};

export default Comment;
