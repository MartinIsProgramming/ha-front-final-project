import { render, screen } from '@testing-library/react';
import Founders from '../Founders';

describe('Founders component', () => {
  beforeEach(() => {
    render(<Founders />);
  });

  it('renders the correct title and label text content', () => {
    screen.getByText('Founders');
    screen.getByRole('heading', { name: 'Meet the team' });
  });

  it('renders only the three founders', () => {
    const founderEl = screen.getAllByTestId('founder-element');
    expect(founderEl).toHaveLength(3);
  });

  it('renders founders information', () => {
    const foundersNames = ['Erik Smith', 'Taylor Ranger', 'Mathew Brown'];

    foundersNames.forEach(founder => {
      const founderEl = screen.getByRole('heading', {
        name: founder,
      });

      expect(founderEl).toBeInTheDocument();
    });
  });
});
