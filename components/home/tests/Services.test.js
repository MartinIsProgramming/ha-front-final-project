import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services', () => {
  beforeEach(() => render(<Services />));

  it('renders the SectionTitle component with correct label and title', () => {
    screen.getByText('Services');
    screen.getByRole('heading', { name: 'Welcome to Carshop' });
  });

  it('renders the company services', () => {
    screen.getByText('Brand new cars');
    screen.getByText('Used cars');
    screen.getByText('Paper work');
    screen.getByText('Fastest service');
  });

  it('renders only four services', () => {
    const services = screen.getAllByTestId('service-element');

    expect(services).toHaveLength(4);
  });
});
