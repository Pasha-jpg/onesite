import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Header Component')).toBeInTheDocument();
  });

 test('renders footer with correct author name', () => {
    render(<App />);
    expect(screen.getByText(/Footer: Develop by Khurram Pasha/i)).toBeInTheDocument();
  });

});