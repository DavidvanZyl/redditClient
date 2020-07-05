import { createRequestActionTypes } from '../util';

const action_startLoading = "START_LOADING";
const action_endLoading = "END_LOADING";

export const [
  START_LOADING,
  START_LOADING_SUCCESS,
  START_LOADING_FAILURE,
] = createRequestActionTypes(action_startLoading);

export const [
  END_LOADING,
  END_LOADING_SUCCESS,
  END_LOADING_FAILURE,
] = createRequestActionTypes(action_endLoading);
