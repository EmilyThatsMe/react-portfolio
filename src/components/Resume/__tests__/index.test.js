import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);

describe('Resume component', () => {
  // First test
  it('renders', () => {
    render(<Resume />);
  });

  // Second test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });
});
