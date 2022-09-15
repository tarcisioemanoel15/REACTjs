import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'asdf',
      conter: 0
    };
  }

  /*Se for uma função sem ser erow function
  tem que fazer o bain ex a baixo dentro do construtor
  this.funcao = this.funcao.bind(this);*/

  handdlePClick = () => {
    this.setState({ name: 'emanoel' })
  }

  handdleAClick = (e) => {
    e.preventDefault();
    const { conter } = this.state;
    this.setState({ conter: conter + 1 })
  }




  render() {
    const { name, conter } = this.state;

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handdlePClick} >
            Testesssss, {name} {conter}
          </p>

          <a
            onClick={this.handdleAClick}

            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div >
    );
  }
}

export default App;
