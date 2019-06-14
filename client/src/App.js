import React from 'react'
import Header from './components/header/Header'
import Home from './pages/Home'
import Content from './pages/Content'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={Content} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
