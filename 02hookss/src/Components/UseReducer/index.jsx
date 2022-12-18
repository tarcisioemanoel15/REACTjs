import { useReducer } from 'react';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log(action);
      return { ...state, title: 'Mudou' };
    }

    case 'invert': {
      console.log('chamou Inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('Nenhuma action encontrada');
  return { ...state };
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, counter } = state;
  return (
    <div className="containerReducer" style={{ textAlign: 'center' }}>
      <h1>
        {title} {body} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda' })}>Click</button>
      <button onClick={() => dispatch({ type: 'invert' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'i' })}>ñ action</button>
    </div>
  );
}
