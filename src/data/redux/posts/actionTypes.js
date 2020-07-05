import { createRequestActionTypes } from '../util';

const action_getAllPosts = "GET__ALL_POSTS";
const action_getPost = "GET__POST";

export const [
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
] = createRequestActionTypes(action_getAllPosts);

export const [
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
] = createRequestActionTypes(action_getPost);
