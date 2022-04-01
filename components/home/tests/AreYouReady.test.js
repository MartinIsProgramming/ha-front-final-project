import { getAllByRole, render, screen } from '@testing-library/react';
import AreYouReady from '../AreYouReady';

describe('AreYouReady component', () => {
  beforeEach(() => render(<AreYouReady />));

  describe('span elements', () => {
    it('renders the correct text content', () => {
      screen.getByText('Ready to dive in?');
      screen.getByText('Start searching your favorite car.');
    });
  });

  describe('cta link', () => {
    let linkEl;

    beforeEach(() => {
      linkEl = screen.getByRole('link', { name: 'Get started' });
    });

    it('renders correct text content', () => {
      expect(linkEl).toBeInTheDocument();
    });

    it('renders only one cta link', () => {
      const linkElements = screen.getAllByRole('link');

      expect(linkElements).toHaveLength(1);
    });

    it('has the correct href', () => {
      expect(linkEl).toHaveAttribute('href', '/cars');
    });
  });
});
