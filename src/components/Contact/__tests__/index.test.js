import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // First test
  it('renders', () => {
    render(<ContactForm />);
  });

  // Second test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
