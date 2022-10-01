import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando123'} />);

    const input = screen.getByPlaceholderText(/Type your search/i);
    // expect(input).toBeInTheDocument();
    expect(input.value).toBe('testando123');
  });

  it('should call handleChange function on each keY', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/Type your search/i);
    const valor = 'O Valor';
    userEvent.type(input, valor);

    expect(input.value).toBe(valor);
    expect(fn).toHaveBeenCalledTimes(valor.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });
  // npm test -- --coverage
});
