import './postCard.component.scss';

import moment from 'moment';
import React from 'react';
import { generatePath, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';
import Awards from '../awards/awards.component';

const PostCard = ({ data }) => {
  let { subReddit } = useParams();
  const isLinkPost =
    !data.preview.resolutions && !data.preview.resolutions?.length && data.url;
  return (
    <Link
      className="postCard"
      to={generatePath(routes.POST, { subReddit, postId: data.id })}
    >
      <div className="postCard__meta">
        <p className="postCard__meta__author" data-testid="meta">
          {`Posted by u/${data.author} ${moment.unix(data.created).fromNow()}`}
        </p>
        <Awards awards={data.awards} />
      </div>
      <h1 className="postCard__title" data-testid="title">
        {data.title}
      </h1>
      {isLinkPost ? (
        <a className="postCard__url" href={data.url}>{`${data.url.slice(
          0,
          25
        )}...`}</a>
      ) : (
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
      )}
      <div className="postCard__interactions">
        <p className="postCard__interactions__interaction">
          <i className="icon icon-upvote" />
          <span data-testid="ups">{formatInteractionTotals(data.ups)}</span>
        </p>
        <span className="postCard__interactions__interaction">
          <i className="icon icon-comment" />
          <p data-testid="commentTotal">{`${formatInteractionTotals(
            data.commentTotal
          )} Comments`}</p>
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
