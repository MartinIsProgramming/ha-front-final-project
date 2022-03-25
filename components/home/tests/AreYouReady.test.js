import { render, screen } from '@testing-library/react';
import AreYouReady from '../AreYouReady';

describe('AreYouReady component', () => {
  beforeEach(() => render(<AreYouReady />));

  describe('span elements', () => {
    it('have correct text content', () => {
      const firstSpan = screen.getByText(/ready to dive in\?/i);
      const secondSpan = screen.getByText(
        /start searching your favorite car\./i
      );

      expect(firstSpan).toHaveTextContent('Ready to dive in?');
      expect(secondSpan).toHaveTextContent(
        'Start searching your favorite car.'
      );
    });
  });

  describe('call to action link', () => {
    it('has correct text content and href', () => {
      const callToActionLink = screen.getByRole('link', {
        name: /get started/i,
      });

      expect(callToActionLink).toHaveTextContent('Get started');
      expect(callToActionLink).toHaveAttribute('href', '/cars');
    });
  });
});
