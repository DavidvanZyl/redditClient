import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Awards from './awards.component';

const testAwards = [
  {
    id: "asdfadsf",
    name: "test",
    count: 3,
    icon_url: "testurl",
  },
  {
    id: "asdfadsf2",
    name: "test2",
    count: 1,
    icon_url: "testurl2",
  },
];

describe("(Component) Awards", () => {
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
      render(<Awards awards={testAwards} />, container);
    });
  });
});
