import React, { useEffect } from 'react';
import { throttle } from 'throttle-debounce';

import Loader from './loader';

export const withInfiniteScroll = (Component) => (props) => {
  useEffect(() => {
    const onScroll = throttle(900, () => {
      if (
        window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 500 &&
        props.items.length
      ) {
        props.fetchMoreItems && props.fetchMoreItems();
      }
    });

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
