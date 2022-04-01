import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  let heading;

  beforeEach(() => {
    render(<HeroSection />);

    heading = screen.getByRole('heading');
  });

  it('renders the heading element', () => {
    expect(heading).toBeInTheDocument();
  });

  it('renders only one heading', () => {
    const heading = screen.getAllByRole('heading');
    expect(heading).toHaveLength(1);
  });

  it('renders the heading text content', () => {
    const span1 = screen.getByTestId('first-span');
    const span2 = screen.getByTestId('second-span');

    expect(span1).toHaveTextContent('All the power you need.');
    expect(span2).toHaveTextContent('In your garage.');
  });

  it('renders two cta links', () => {
    const ctaLinks = screen.getAllByRole('link');
    expect(ctaLinks).toHaveLength(2);
  });

  it('renders correct text content for links', () => {
    const linksText = ['know more', 'developer'];

    linksText.forEach(link => {
      screen.getByRole('link', { name: link });
    });
  });
});
