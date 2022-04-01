import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  beforeEach(() => render(<Footer />));

  it('renders the company logo with correct text content', () => {
    screen.getByRole('link', { name: 'CARSHOP' });
  });

  it('renders the home, about, and cars link', () => {
    const links = [
      { label: 'home', href: '/' },
      { label: 'about', href: '/about' },
      { label: 'cars', href: '/cars' },
    ];

    links.forEach(link => {
      let linkEl = screen.getByRole('link', { name: link.label });
      expect(linkEl).toBeInTheDocument();
      expect(linkEl).toHaveAttribute('href', link.href);
    });
  });
});
