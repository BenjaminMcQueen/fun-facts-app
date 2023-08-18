import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import FactOne from './components/facts/FactOne';
import FactTwo from './components/facts/FactTwo';
import FactThree from './components/facts/FactThree';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/factone" element={<FactOne />} />
            <Route exact path="/facttwo" element={<FactTwo />} />
            <Route exact path="/factthree" element={<FactThree />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;