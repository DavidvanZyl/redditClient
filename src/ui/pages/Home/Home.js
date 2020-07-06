import './Home.scss';

import usePosts from 'data/hooks/usePosts';
import React from 'react';

import PostCard from '../../components/postCard/postCard.component';
import { LazyLoadInfiniteList } from '../../shared/infiniteScrollList/infiniteScrollList.component';

const Home = (props) => {
  const { allPosts, fetchMorePosts, isPostsLoading } = usePosts();
  return (
    <div className="Home">
      <LazyLoadInfiniteList
        items={allPosts}
        fetchMoreItems={fetchMorePosts}
        isLoading={isPostsLoading}
        Component={PostCard}
        className="Home__posts"
      />
    </div>
  );
};

export default Home;
