import { all } from 'redux-saga/effects';

import { watchForPostsRequests } from './posts/postsSaga';

export default function* rootSaga() {
  yield all([watchForPostsRequests()]);
}
