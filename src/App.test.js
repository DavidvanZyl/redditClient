import 'jest-canvas-mock';

import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe("App", () => {
  it("renders successfully", () => {
    const container = render(<App />);
    expect(container).toBeTruthy();
  });
});
