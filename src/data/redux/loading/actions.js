import { createAction } from 'redux-actions';

import { END_LOADING, START_LOADING } from './actionTypes';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);
export const endLoading = createAction(
  END_LOADING,
  (requestType) => requestType
);
