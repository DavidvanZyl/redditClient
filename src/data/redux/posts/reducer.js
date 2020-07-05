import produce from 'immer';
import { handleActions } from 'redux-actions';

import { GET_ALL_POSTS_SUCCESS, GET_POST_SUCCESS } from './actionTypes';

const initialState = {
  posts: null,
  after: null,
  before: null,
  count: null,
  selectedPost: {
    post: null,
    comments: null,
  },
};

export const postsReducer = handleActions(
  {
    [GET_ALL_POSTS_SUCCESS]: (
      state,
      { payload: { posts, after, before, count } }
    ) =>
      produce(state, (draft) => {
        draft.posts = draft.posts ? [...draft.posts, ...posts] : posts;
        draft.after = after;
        draft.before = before;
        draft.count = draft.count + count;
      }),
    [GET_POST_SUCCESS]: (state, { payload: { post, comments } }) =>
      produce(state, (draft) => {
        draft.selectedPost.post = post;
        draft.selectedPost.comments = comments;
      }),
  },
  initialState
);
