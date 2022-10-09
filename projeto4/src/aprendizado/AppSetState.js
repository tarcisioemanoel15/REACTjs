import logo from './logo.svg';
import './AppSetState.css';
import { useState } from 'react';
/*
class App extends Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };
  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

          <button type="button" onClick={this.handleClick}>
            {' '}
            REVERSE {reverseClass}
          </button>
        </header>
        </div>
        );
      }
    }
    */

function Appy() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleClick}>
            {' '}
            REVERSE {reverseClass}
          </button>
        </p>

        <p>
          <button type="button" onClick={increment}>
            {' '}
            Incrementa
          </button>
        </p>
      </header>
    </div>
  );
}

export default Appy;
