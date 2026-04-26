// src/pages/News.test.jsx
import { render, screen } from '@testing-library/react';
import News from './News';

describe('News Component', () => {
  test('renders the section title "LATEST NEWS"', () => {
    render(<News />);
    const titleElement = screen.getByText(/LATEST NEWS/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all three news items', () => {
    render(<News />);
    
    // Check for all three news titles
    const title1 = screen.getByText(/New Rental Regulations Announced/i);
    const title2 = screen.getByText(/Customer Stories: Finding the Perfect Home/i);
    const title3 = screen.getByText(/Top 10 Rental Properties in Sydney/i);
    
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  });

  test('renders author and date for each news item', () => {
    render(<News />);
    
    // Check for admin authors
    const adminElements = screen.getAllByText(/Admin/i);
    expect(adminElements.length).toBe(3);
    
    // Check for dates
    const dateElements = screen.getAllByText(/2024-08-06/i);
    expect(dateElements.length).toBe(3);
  });

  
});