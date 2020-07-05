import { render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import postCard from './comment.component';

const testComment = {
  gilded: true,
  text:
    "I’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
  author: "ReallyRickAstley",
  created: 1592410647,
  awards: { gid_1: 28, gid_2: 19, gid_3: 10 },
  id: "haucpf",
  ups: 336487,
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
      render(<postCard post={testComment} />, container);

      expect(
        container.querySelector("[data-testid='author']").textContent
      ).toEqual(testComment.commentTotal);

      expect(
        container.querySelector('[data-testid="ups"]').textContent
      ).toEqual(testComment.ups);

      expect(
        container.querySelector('[data-testid="text"]').textContent
      ).toEqual(testComment.title);
    });
  });
});
