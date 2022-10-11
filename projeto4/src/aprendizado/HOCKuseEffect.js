import './App.css';
import { useEffect, useState } from 'react';

const eventfn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o componente for atualizado
  /*
  useEffect(() => {
    console.log('componentDidUpdate');
  });
  */

  // componentDid mount executa 1X
  /*
   */
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventfn);
    // console.log('componentDidMount');

    // componentWillumount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventfn);
    };
  }, []);

  // com dependencia - ezecuta toda vez que a dependencia mudar
  /*
   */
  useEffect(() => {
    console.log('contador mudou ', counter);
  }, [counter]);

  return (
    <div className="App">
      <p>Test 01</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 2)}>+2</button>
    </div>
  );
}

export default App;
