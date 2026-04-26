// article.test.jsx
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article Component', () => {
  test('renders the section title', () => {
    render(<Article />);
    const title = screen.getByText('RECENT ARTICLES');
    expect(title).toBeInTheDocument();
  });

  test('renders all three article items', () => {
    render(<Article />);
    const articles = screen.getAllByRole('heading', { level: 3 });
    expect(articles).toHaveLength(3);
  });

  test('renders the "View All News" button', () => {
    render(<Article />);
    const button = screen.getByText('View All News');
    expect(button).toBeInTheDocument();
  });

  test('renders article titles correctly', () => {
    render(<Article />);
    expect(screen.getByText('7 tips to get the best mortgage.')).toBeInTheDocument();
    expect(screen.getByText(/House, location or price/)).toBeInTheDocument();
    expect(screen.getByText(/How to get your dream property/)).toBeInTheDocument();
  });
});