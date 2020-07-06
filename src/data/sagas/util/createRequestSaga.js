import { call, put } from 'redux-saga/effects';

import { endLoading, startLoading } from '../../redux/loading/actions';
import { createRequestActionTypes } from '../../redux/util';

export const createRequestSaga = (type, request, dataInterface) => {
  return function* (action) {
    yield put(startLoading(type));
    const [ACTION, ACTION_SUCCESS, ACTION_FAILURE] = createRequestActionTypes(
      type
    );
    try {
      const response = yield call(request, action.payload);
      if (response.data || response.length) {
        yield put({
          type: ACTION_SUCCESS,
          payload: dataInterface(response.data || response),
        });
      }
    } catch (error) {
      console.log(error);
      //TODO: Handle Errors
    }
    yield put(endLoading(type));
  };
};
