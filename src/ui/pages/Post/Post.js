import './Post.scss';

import React from 'react';

import usePosts from '../../../data/hooks/usePosts';
import Comment from '../../components/comment/comment.component';
import PostCard from '../../components/postCard/postCard.component';
import InfiniteScrollListComponent from '../../shared/infiniteScrollList/infiniteScrollList.component';
import Loader from '../../shared/loader';

const Post = ({ props }) => {
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
      <PostCard data={post} />
      <InfiniteScrollListComponent
        items={comments}
        Component={Comment}
        className="Post__comments"
      />
    </div>
  );
};

export default Post;
