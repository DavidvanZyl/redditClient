import { createAction } from 'redux-actions';

import { GET_ALL_POSTS, GET_POST } from './actionTypes';

export const getAllPosts = createAction(GET_ALL_POSTS);
export const getPost = createAction(GET_POST);
