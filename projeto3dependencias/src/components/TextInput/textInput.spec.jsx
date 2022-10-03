import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});

// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { TextInput } from '.';

// describe('<TextInput />', () => {

//     it('should have a value of searchValue', () => {
//         const fn = jest.fn();
//         render(<TextInput handleChange={fn} searchValue={'testando123'} />);

//         const input = screen.getByPlaceholderText(/Type your search/i);
//         // expect(input).toBeInTheDocument();
//         expect(input.value).toBe('testando123');
//     });

//     it('should call handleChange function on each keY', () => {
//         const fn = jest.fn();
//         render(<TextInput handleChange={fn} />);

//         const input = screen.getByPlaceholderText(/Type your search/i);
//         const valor = 'O Valor';
//         userEvent.type(input, valor);

//         expect(input.value).toBe(valor);
//         expect(fn).toHaveBeenCalledTimes(valor.length);
//     });

//     it('should match snapshot', () => {
//         const fn = jest.fn();
//         const { container } = render(<TextInput handleChange={fn} />);
//         expect(container).toMatchSnapshot();
//     });
// // npm test -- --coverage

// });
