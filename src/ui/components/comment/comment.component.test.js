import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Comment from './comment.component';

const testComment = {
  gilded: true,
  text:
    "I’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
  author: "ReallyRickAstley",
  created: 1592410647,
  awards: [],
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

  it("(Component) Comment renders successfully", () => {
    act(() => {
      render(<Comment data={testComment} />, container);
    });

    expect(
      container.querySelector("[data-testid='author']").textContent
    ).toEqual(testComment.author);

    expect(container.querySelector('[data-testid="ups"]').textContent).toEqual(
      ` ${testComment.ups} points`
    );

    expect(container.querySelector('[data-testid="text"]').textContent).toEqual(
      testComment.text
    );
  });
});
