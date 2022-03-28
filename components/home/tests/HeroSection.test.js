import { render, screen, within } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  beforeEach(() => render(<HeroSection />));

  describe('span elements', () => {
    it('renders the span elements with correct text content ', () => {
      const heading = screen.getByRole('heading', {
        name: /all the power you need\. in your garage\./i,
      });
      const firstSpan = within(heading).getByText(/all the power you need\./i);
      const SecondSpan = within(heading).getByText(/In your garage\./i);

      expect(firstSpan).toHaveTextContent('All the power you need.');
      expect(SecondSpan).toHaveTextContent('In your garage');
    });
  });

  describe('cta links', () => {
    it('renders two links', () => {
      const links = screen.getAllByRole('link');

      expect(links).toHaveLength(2);
    });

    describe('know more link', () => {
      it('has correct text content and href ', () => {
        const knowMoreLink = screen.getByRole('link', {
          name: /know more/i,
        });

        expect(knowMoreLink).toHaveTextContent('know more');
        expect(knowMoreLink).toHaveAttribute('href', '/about');
      });
    });

    describe('developer link', () => {
      it('has correct text content and href', () => {
        const developerLink = screen.getByRole('link', {
          name: /developer/i,
        });

        expect(developerLink).toHaveTextContent('developer');
        expect(developerLink).toHaveAttribute(
          'href',
          'https://github.com/MartinIsProgramming'
        );
      });
    });
  });
});
