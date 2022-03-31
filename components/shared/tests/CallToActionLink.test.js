import { render, screen } from '@testing-library/react';
import CallToActionLink from '../CallToActionLink';

describe('CallToActionLink component', () => {
  describe('when isExternalLink prop is not passed', () => {
    let actionLinkEl;
    beforeEach(() => {
      render(
        <CallToActionLink
          text="test link"
          href="/test"
          customClasses="test-class"
        />
      );

      actionLinkEl = screen.getByRole('link');
    });

    it('renders the correct text', () => {
      expect(actionLinkEl).toHaveTextContent('test link');
    });

    it('has the correct href value', () => {
      expect(actionLinkEl).toHaveAttribute('href', '/test');
    });

    it('has the custom classes styles', () => {
      expect(actionLinkEl).toHaveClass('test-class');
    });

    it('does not have the target and rel attributes', () => {
      expect(actionLinkEl).not.toHaveAttribute('target');
      expect(actionLinkEl).not.toHaveAttribute('rel');
    });

    it('has specific classes', () => {
      expect(actionLinkEl).toHaveClass('text-gray-100');
      expect(actionLinkEl).toHaveClass('hover:bg-primary-brand-light');
    });
  });

  describe('when isSecondary prop is passed', () => {
    it('has specific classes', () => {
      render(<CallToActionLink text="test text" href="/test" isSecondary />);
      const actionLinkEl = screen.getByRole('link');

      expect(actionLinkEl).toHaveClass('text-primary-brand-dark');
      expect(actionLinkEl).toHaveClass('hover:bg-secondary-brand-dark');
    });
  });

  describe('when isExternalLink prop is passed', () => {
    it('does have the target and rel attributes with correct values', () => {
      render(<CallToActionLink isExternalLink text="test text" href="/test" />);
      const actionLinkEl = screen.getByRole('link');

      expect(actionLinkEl).toHaveAttribute('target', '_blank');
      expect(actionLinkEl).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
