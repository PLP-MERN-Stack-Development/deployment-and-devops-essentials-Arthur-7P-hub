import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('App Integration Test', () => {
  it('renders header text correctly', () => {
    render(<App />);
    expect(screen.getByText(/mern testing app/i)).toBeInTheDocument();
  });
});
