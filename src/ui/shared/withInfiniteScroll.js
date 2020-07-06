import React, { useEffect } from 'react';
import { throttle } from 'throttle-debounce';

import Loader from './loader';

export const withInfiniteScroll = (Component) => (props) => {
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
          (document.body.scrollHeight / 100) * 80 &&
        props.items.length &&
        !props.isLoading
      ) {
        props.fetchMoreItems && throttle(400, false, props.fetchMoreItems());
      }
    };

    window.addEventListener("scroll", onScroll, false);
    return () => window.removeEventListener("scroll", onScroll, false);
  }, [props]);

  return <Component {...props} />;
};

export const withLoading = (Component) => (props) => (
  <div className="Loader">
    <Component {...props} />
    {props.isLoading && <Loader />}
  </div>
);
