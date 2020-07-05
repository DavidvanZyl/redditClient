import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getAllPosts, getPost } from '../redux/posts/actions';
import * as postSelectors from '../selectors/posts';

export default function usePosts() {
  const dispatch = useDispatch();
  const allPosts = useSelector(postSelectors.selectAllPosts);
  const lastPostFetched = useSelector(postSelectors.selectLastPostId);
  const totalFetched = useSelector(postSelectors.selectTotalFetched);
  const selectedPost = useSelector(postSelectors.selectSelectedPost);
  const isPostsLoading = useSelector(postSelectors.isPostsLoading);
  const isPostLoading = useSelector(postSelectors.isPostLoading);

  const [numberToFetch, setNumberToFetch] = useState(20);

  const { subReddit, postId } = useParams();

  const fetchPost = useCallback(() => {
    if (subReddit && postId) {
      dispatch(getPost({ subReddit, postId }));
    }
  }, [postId, dispatch, subReddit]);

  const fetchPosts = useCallback(
    (NPosts, subReddit, lastPostFetched, totalFetched) => {
      if (subReddit) {
        dispatch(
          getAllPosts({ NPosts, subReddit, lastPostFetched, totalFetched })
        );
      }
    },
    [dispatch]
  );

  const fetchMorePosts = () =>
    fetchPosts(numberToFetch, subReddit, lastPostFetched, totalFetched);

  useEffect(() => {
    if (subReddit && postId) {
      fetchPost(postId);
    }
  }, [fetchPost, postId, subReddit]);

  useEffect(() => {
    if (numberToFetch && subReddit) {
      fetchPosts(numberToFetch, subReddit, lastPostFetched, totalFetched);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, numberToFetch, subReddit]);

  return {
    allPosts,
    fetchPost,
    fetchPosts,
    fetchMorePosts,
    isPostsLoading,
    isPostLoading,
    setNumberToFetch,
    numberToFetch,
    lastPostFetched,
    totalFetched,
    selectedPost,
  };
}
