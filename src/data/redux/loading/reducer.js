import produce from 'immer';
import { handleActions } from 'redux-actions';

import { END_LOADING, START_LOADING } from './actionTypes';

const initialState = {};

export const loadingReducer = handleActions(
  {
    [START_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft[action.payload] = true;
      }),
    [END_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft[action.payload] = false;
      }),
  },
  initialState
);
