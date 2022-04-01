import { render, screen } from '@testing-library/react';
import SectionTitle from '../SectionTitle';

describe('SectionTitle component', () => {
  describe('when no title or label are passed', () => {
    it('renders the default values for both', () => {
      render(<SectionTitle />);

      screen.getByRole('heading', { name: 'Default title' });
      screen.getByText('Default label');
    });
  });

  describe('when title and label are passed', () => {
    it('renders the title and label values for both', () => {
      render(<SectionTitle title="test title" label="test label" />);

      screen.getByRole('heading', { name: 'test title' });
      screen.getByText('test label');
    });
  });
});
