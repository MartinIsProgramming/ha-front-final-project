import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  beforeEach(() => render(<Footer />));

  it('renders the company logo with correct text content', () => {
    const logoEl = screen.getByRole('link', { name: /carshop/i });

    expect(logoEl).toHaveTextContent('CARSHOP');
  });

  it('renders the home, about, and cars link', () => {
    const homeEl = screen.getByRole('link', { name: /home/i });
    const aboutEl = screen.getByRole('link', { name: /about/i });
    const carsEl = screen.getByRole('link', { name: /^cars$/i });

    expect(homeEl).toHaveTextContent('home');
    expect(aboutEl).toHaveTextContent('about');
    expect(carsEl).toHaveTextContent('cars');

    expect(homeEl).toHaveAttribute('href', '/');
    expect(aboutEl).toHaveAttribute('href', '/about');
    expect(carsEl).toHaveAttribute('href', '/cars');
  });
});
