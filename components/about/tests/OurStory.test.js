import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OurStory from '../OurStory';

describe('OurStory component', () => {
  beforeEach(() => {
    render(<OurStory />);
  });

  it('renders the correct text content for SectionTitle', () => {
    const labelEl = screen.getByText('Background');
    const headingEl = screen.getByRole('heading', { name: 'Our Story' });

    expect(labelEl).toBeInTheDocument();
    expect(headingEl).toBeInTheDocument();
  });

  it('renders the image element', () => {
    screen.getByRole('img');
  });

  it('renders the contact button', () => {
    screen.getByRole('button', { name: 'contact' });
  });

  it('does not render the ContactModal by default', () => {
    const modalDescription = screen.queryByText(/remember that our developer/i);

    expect(modalDescription).not.toBeInTheDocument();
  });

  it('renders the ContactModal when button is click', () => {
    userEvent.click(screen.getByRole('button'));
    const modalDescription = screen.getByText(/remember that our developer/i);

    expect(modalDescription).toBeInTheDocument();
  });
});
