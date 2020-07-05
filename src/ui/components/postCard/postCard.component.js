import './postCard.component.scss';

import moment from 'moment';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const PostCard = ({ data }) => {
  let match = useRouteMatch();
  return (
    <Link className="postCard" to={`${match.url}/${data.id}`}>
      <p className="postCard__meta">
        {`Posted by u/${data.author} ${moment.unix(data.created).fromNow()}`}
      </p>
      <h1 className="postCard__title">{data.title}</h1>
      <img
        className="postCard__image"
        srcSet={data.preview.resolutions
          .map((src) => `${src.url} ${src.width}w`)
          .join(", ")}
        src={data.preview.source.url}
        alt={"Post preview"}
        sizes="(max-width: 400px) 300px,
        (max-width: 600px) 480px,
        (max-width: 800px) 600px,
        (max-width: 1000px) 800px
        1000px"
      />
      <div className="postCard__interactions">
        <span className="postCard__interactions__interaction">
          <i className="icon icon-upvote" />
          {formatInteractionTotals(data.ups)}
        </span>
        <span className="postCard__interactions__interaction">
          <i className="icon icon-comment" />
          {`${formatInteractionTotals(data.commentTotal)} Comments`}
        </span>
      </div>
    </Link>
  );
};

const formatInteractionTotals = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export default PostCard;
