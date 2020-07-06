import moment from 'moment';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import formatInteractionTotals from '../../../util/formatInteractionTotals';
import PostCard from './postCard.component';

const testPost = {
  author: "ReallyRickAstley",
  commentTotal: 16789,
  created: 1592410647,
  awards: [],
  id: "haucpf",
  title:
    "I’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
  ups: 336487,
  preview: {
    resolutions: [],
    source: {},
  },
};

describe("(Component) postCard", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders successfully", () => {
    act(() => {
      render(
        <BrowserRouter>
          <PostCard data={testPost} />
        </BrowserRouter>,
        container
      );

      expect(
        container.querySelector('[data-testid="meta"]').textContent
      ).toEqual(
        `Posted by u/${testPost.author} ${moment
          .unix(testPost.created)
          .fromNow()}`
      );

      expect(
        container.querySelector('[data-testid="ups"]').textContent
      ).toEqual(formatInteractionTotals(testPost.ups));

      expect(
        container.querySelector('[data-testid="title"]').textContent
      ).toEqual(testPost.title);
    });
  });
});
