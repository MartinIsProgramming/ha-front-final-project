import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo component', () => {
  describe('when isLight is not passed', () => {
    let linkEl;

    beforeEach(() => {
      render(<Logo />);
      linkEl = screen.getByRole('link');
    });

    it('renders a link with correct text content', () => {
      expect(linkEl).toBeInTheDocument();
      expect(linkEl).toHaveTextContent('CARSHOP');
    });

    it('has / as href value', () => {
      expect(linkEl).toHaveAttribute('href', '/');
    });

    it('has dark text color as a default', () => {
      expect(linkEl).toHaveClass('text-primary-brand-dark');
    });
  });

  describe('when isLight is passed as prop', () => {
    it('renders the light version of the logo', () => {
      render(<Logo isLight />);
      const linkEl = screen.getByRole('link');

      expect(linkEl).toHaveClass('text-gray-100');
    });
  });
});
