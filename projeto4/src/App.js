// import P from 'prop-types';
import React, { useContext } from 'react';
import './App.css';

const globalStile = {
  title: 'Title context',
  body: 'O Corpo BODY',
  counter: 0,
};
const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />;
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  return <h1>{theContext.title}</h1>;
};

const P = () => {
  const theContext = useContext(GlobalContext);
  return <p>{theContext.body}</p>;
};

function App() {
  return (
    <GlobalContext.Provider value={globalStile}>
      <Div />;
    </GlobalContext.Provider>
  );
}

export default App;
