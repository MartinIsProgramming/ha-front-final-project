import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormGroup from '../FormGroup';

describe('FormGroup component', () => {
  let selectEl;
  let labelEl;

  const labelText = 'label';
  const optionsArr = ['Honda', 'Hyundai', 'BMW'];
  const onChangeHandler = jest.fn();

  beforeEach(() => {
    render(
      <FormGroup
        labelText={labelText}
        options={optionsArr}
        onChange={onChangeHandler}
      />
    );

    selectEl = screen.getByRole('combobox', { name: labelText });
    labelEl = screen.getByLabelText(labelText);
  });

  it('renders both label and select elements', () => {
    expect(labelEl).toBeInTheDocument();
    expect(selectEl).toBeInTheDocument();
  });

  it('renders the correct options length', () => {
    const optionEl = screen.getAllByRole('option');

    expect(optionEl).toHaveLength(optionsArr.length);
  });

  it('renders the correct placeholder', () => {
    expect(selectEl).toHaveAttribute('placeholder', `${labelText}...`);
  });

  it('triggers the onChangeHandler when selecting an option', () => {
    const hyundaiOp = screen.getByRole('option', { name: /Hyundai/i });
    userEvent.selectOptions(selectEl, [hyundaiOp]);

    expect(hyundaiOp.selected).toBe(true);
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
