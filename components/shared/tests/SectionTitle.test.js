import { render, screen } from '@testing-library/react';
import SectionTitle from '../SectionTitle';

describe('SectionTitle component', () => {
  describe('when no title or label are passed', () => {
    it('renders the default values for both', () => {
      render(<SectionTitle />);

      const titleEl = screen.getByRole('heading', { name: /default title/i });
      const labelEl = screen.getByText(/default label/i);

      expect(titleEl).toHaveTextContent('Default title');
      expect(labelEl).toHaveTextContent('Default label');
    });
  });

  describe('when title and label are passed', () => {
    it('renders the title and label values for both', () => {
      render(<SectionTitle title="test title" label="test label" />);

      const titleEl = screen.getByRole('heading', { name: /test title/i });
      const labelEl = screen.getByText(/test label/i);

      expect(titleEl).toHaveTextContent('test title');
      expect(labelEl).toHaveTextContent('test label');
    });
  });
});
