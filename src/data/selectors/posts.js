import { createSelector } from 'reselect';

import { GET_ALL_POSTS, GET_POST } from '../redux/posts/actionTypes';

export const postsState = ({ posts }) => posts;

export const selectAllPosts = createSelector(
  postsState,
  (state) => state.posts
);

export const selectLastPostId = createSelector(
  postsState,
  (state) => state.after
);

export const selectTotalFetched = createSelector(
  postsState,
  (state) => state.count
);

export const selectSelectedPost = createSelector(
  postsState,
  (state) => state.selectedPost
);

export const isPostsLoading = ({ loading }) => loading[GET_ALL_POSTS];
export const isPostLoading = ({ loading }) => loading[GET_POST];
