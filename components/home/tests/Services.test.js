import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services', () => {
  beforeEach(() => render(<Services />));

  it('renders the SectionTitle component with correct label and title', () => {
    const labelEl = screen.getByText(/services/i);
    const headingEl = screen.getByRole('heading', {
      name: /welcome to carshop/i,
    });

    expect(labelEl).toHaveTextContent('Services');
    expect(headingEl).toHaveTextContent('Welcome to Carshop');
  });

  it('renders the company services', () => {
    const newCarsEl = screen.getByText(/brand new cars/i);
    const usedCarsEl = screen.getByText(/used cars/i);
    const paperWorkEl = screen.getByText(/paper work/i);
    const fastServiceEl = screen.getByText(/fastest service/i);

    expect(newCarsEl).toHaveTextContent('Brand new cars');
    expect(usedCarsEl).toHaveTextContent('Used cars');
    expect(paperWorkEl).toHaveTextContent('Paper work');
    expect(fastServiceEl).toHaveTextContent('Fastest service');
  });
});
