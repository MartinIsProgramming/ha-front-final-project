import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StandardBtn from '../StandardBtn';

describe('StandardBtn component', () => {
  const onClickHandler = jest.fn();

  describe('when isExternalLink is not passed as prop', () => {
    let btn;

    beforeEach(() => {
      render(<StandardBtn text="test text" onClick={onClickHandler} />);

      btn = screen.getByRole('button');
    });

    it('renders the correct test', () => {
      expect(btn).toHaveTextContent('test text');
    });

    it('has correct type props', () => {
      expect(btn).toHaveProperty('type', 'button');
    });

    it('triggers the onClickHandler fn when click on button', () => {
      userEvent.click(btn);
      expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('when isExternalLink is passed as prop', () => {
    let linkEl;

    beforeEach(() => {
      render(
        <StandardBtn
          text="test text"
          onClick={onClickHandler}
          isExternalLink
          href="https://www.test.com"
        />
      );
      linkEl = screen.getByRole('link');
    });

    it('renders a link and not a button', () => {
      expect(linkEl).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('has the correct href, target and rel props', () => {
      expect(linkEl).toHaveProperty('href', 'https://www.test.com/');
      expect(linkEl).toHaveProperty('target', '_blank');
      expect(linkEl).toHaveProperty('rel', 'noreferrer');
    });
  });

  describe('when isSecondary prop is passed', () => {
    it('has specific classes', () => {
      render(<StandardBtn text="test text" isSecondary />);
      const actionLinkEl = screen.getByRole('button');

      expect(actionLinkEl).toHaveClass('text-primary-brand-dark');
      expect(actionLinkEl).toHaveClass('hover:bg-secondary-brand-light');
    });
  });
});
