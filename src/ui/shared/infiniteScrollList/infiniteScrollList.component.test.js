import 'jest-canvas-mock';

import { render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { ComponentList } from './infiniteScrollList.component';

const testPosts = [
  {
    author: "ReallyRickAstley",
    commentTotal: 16789,
    created: 1592410647,
    gildings: { gid_1: 28, gid_2: 19, gid_3: 10 },
    id: "haucpf",
    title:
      "I’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
    ups: 336487,
  },
  {
    author: "ReallyRickAstley2",
    commentTotal: 16788,
    created: 1592410648,
    gildings: { gid_1: 28, gid_2: 19, gid_3: 10 },
    id: "haucpf1",
    title:
      "I’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
    ups: 336487,
  },
];

describe("(Component) ComponentList", () => {
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
        <ComponentList items={testPosts} Component={() => <div />} />,
        container
      );
    });
  });
});
