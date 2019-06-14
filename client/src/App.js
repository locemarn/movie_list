import React from 'react'
import Header from './components/header/Header'
import Home from './pages/Home'
import Content from './pages/Content'
import About from './pages/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Content />
      <About />
    </div>
  );
}

export default App;
