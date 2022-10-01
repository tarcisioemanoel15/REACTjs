import { fireEvent, render, screen } from '@testing-library/react';
// import {userEvent} from '@testing-library/user-event';
import { Button } from '.';
describe('<Button />', () => {
  it('should the button with the text "Lode more"', () => {
    render(<Button text="load more" />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);
    // userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled whien disabled is true', () => {
    render(<Button text="load more" disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be disabled whien disabled is false', () => {
    render(<Button text="load more" disabled={false} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should matc snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="load more" disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
