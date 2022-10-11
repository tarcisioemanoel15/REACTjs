import P, { func } from 'prop-types';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

//  React.memo memoriza a função
const Button = React.memo(function Button({ incremenrButton }) {
  return <button onClick={() => incremenrButton(10)}>+</button>;
});
//  filho so pode renderizar uma zez
console.log('Filho renderizou');

Button.propTypes = {
  incremenrButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <div className="App">
      <p>Test 01</p>
      <h1>C1: {counter}</h1>
      <Button incremenrButton={incrementCounter} />
    </div>
  );
}

export default App;
