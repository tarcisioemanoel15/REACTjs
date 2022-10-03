import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      body: 'body 1',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: 'title 3',
      body: 'body 3',
      cover: 'img/img3.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container).toMatchSnapshot();
  });
});

// import { Posts } from ".";
// import { render, screen } from '@testing-library/react';

// const props = {
//     posts: [
//         {
//             id: 1,
//             title: 'title 1',
//             body: 'body1',
//             cover: 'img/img1.png',
//         },

//         {
//             id: 2,
//             title: 'title 2',
//             body: 'body2',
//             cover: 'img/img2.png',
//         },

//         {
//             id: 3,
//             title: 'title 3',
//             body: 'body3',
//             cover: 'img/img3.png',
//         },
//     ]
// }
// describe('<Posts />', () => {

//     it('should render posts', () => {
//         render(<Posts {...props} />)

//         // Pegar tudo e checar se esta na pagina
//         // Preciso de 3 heding "TITULO" na minha pagina
//         expect(screen.getAllByRole('heading', { name: /title/i }))
//             .toHaveLength(3);

//         // Tres imagens
//         expect(screen.getAllByRole('img', { name: /title/i }))
//             .toHaveLength(3);

//         // Pelo texto
//         expect(screen.getAllByText(/title/i))
//             .toHaveLength(3);

//         //por um elemento especifico
//         // titulo e imagem
//         expect(screen.getByRole('img', { name: /title 3/i }))
//             .toHaveAttribute('src', 'img/img3.png')

//     });

//     it('should not render posts', () => {
//         render(<Posts />);
//         // um elemento que não vai ezistir na tela queryAllByRole
//         expect(screen.queryAllByRole('heading', { name: /title/i }))
//             .toHaveLength(0)
//     })

//     // SNAPSHOT tirar uma foto garantir o codigo
//     // se estar do jeito que eu quero
//     it('should match snapshot', () => {
//         // colocando tudo dentro de um container
//         const { container } = render(<Posts {...props} />)

//         // se aver alteração ele mostra e da um erro
//         // Para atualizar é so clicar em `u` O primeiro click
//         expect(container.firstChild).toMatchSnapshot();
//     });
// });
