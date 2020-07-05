import { takeLatest } from 'redux-saga/effects';

import { commentsInterface } from '../../interfaces/comments';
import { postsInterface } from '../../interfaces/posts';
import { GET_ALL_POSTS, GET_POST } from '../../redux/posts/actionTypes';
import PostsService from '../../services/posts/postsService';
import { createRequestSaga } from '../util/createRequestSaga';

export const getAllPostsSaga = createRequestSaga(
  GET_ALL_POSTS,
  PostsService.getNPostsFromSub,
  postsInterface
);

export const getPostSaga = createRequestSaga(
  GET_POST,
  PostsService.getPost,
  commentsInterface
);

export function* watchForPostsRequests() {
  yield takeLatest(GET_ALL_POSTS, getAllPostsSaga);
  yield takeLatest(GET_POST, getPostSaga);
}
