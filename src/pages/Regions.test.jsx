// src/pages/Regions.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Regions from './Regions';

describe('Regions Component', () => {
  test('renders the main heading', () => {
    render(<Regions />);
    const headingElement = screen.getByText(/REGIONS IN AUSTRALIA/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the welcome message', () => {
    render(<Regions />);
    const welcomeMessage = screen.getByText(/Welcome to the regions page!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders all three state names', () => {
    render(<Regions />);
    expect(screen.getByText('New South Wales')).toBeInTheDocument();
    expect(screen.getByText('Victoria')).toBeInTheDocument();
    expect(screen.getByText('Queensland')).toBeInTheDocument();
  });

  test('renders all three city names', () => {
    render(<Regions />);
    expect(screen.getByText('Sydney')).toBeInTheDocument();
    expect(screen.getByText('Melbourne')).toBeInTheDocument();
    expect(screen.getByText('Brisbane')).toBeInTheDocument();
  });

  test('renders images with correct alt text', () => {
    render(<Regions />);
    const sydneyImg = screen.getByAltText('sydney-image');
    const vicImg = screen.getByAltText('vic-image');
    const briImg = screen.getByAltText('bri-image');
    
    expect(sydneyImg).toBeInTheDocument();
    expect(vicImg).toBeInTheDocument();
    expect(briImg).toBeInTheDocument();
  });
});