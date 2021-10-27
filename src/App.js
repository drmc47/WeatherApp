import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Route path='/' component={Navbar}/>
      <Route exact path='/' component={Cards}/>
      </Provider>
    </Router>
);
}

export default App;
