import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardmock } from './mock';

const props = postCardmock;

describe('<PostCard />', () => {
  it('should render POstCard correcty', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
