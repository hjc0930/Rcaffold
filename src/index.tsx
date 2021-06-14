import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import './index.css';

if (module && module.hot) {
  module.hot.accept()
}

const App = () => {
  return (
    <Routes />
  )
};

render(<App />, document.getElementById('root'));
