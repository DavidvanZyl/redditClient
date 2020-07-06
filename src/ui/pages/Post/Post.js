import './Post.scss';

import React from 'react';
import { generatePath, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';
import usePosts from '../../../data/hooks/usePosts';
import Comment from '../../components/comment/comment.component';
import PostCard from '../../components/postCard/postCard.component';
import { LazyLoadInfiniteList } from '../../shared/infiniteScrollList/infiniteScrollList.component';
import Loader from '../../shared/loader';

const Post = ({ props }) => {
  const { subReddit } = useParams();
  const {
    selectedPost: { post, comments },
    isPostLoading,
  } = usePosts();
  return isPostLoading || !post ? (
    <div className="Loader">
      <Loader />
    </div>
  ) : (
    <div className="Post">
      <div className="Post__header">
        <Link to={generatePath(routes.HOME, { subReddit })}>{"< Back"}</Link>
      </div>
      <PostCard data={post} />
      <LazyLoadInfiniteList
        items={comments}
        Component={Comment}
        className="Post__comments"
      />
    </div>
  );
};

export default Post;
