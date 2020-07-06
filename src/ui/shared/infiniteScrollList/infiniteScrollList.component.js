import './infiniteScrollList.component.scss';

import React from 'react';
import { compose } from 'redux';

import { withInfiniteScroll, withLoading } from '../withInfiniteScroll';

export const ComponentList = ({ items, Component, className }) => {
  return (
    <div className="InfiniteScrollList">
      <div className={className}>
        {items && items.map((item) => <Component key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export const LazyLoadInfiniteList = compose(
  withInfiniteScroll,
  withLoading
)(ComponentList);
