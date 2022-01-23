import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '..';

afterEach(cleanup);

describe('Portfolio component', () => {
  // First test
  it('renders', () => {
    render(<Portfolio />);
  });

  // Second test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Portfolio />);
    expect(asFragment()).toMatchSnapshot();
  });
});
