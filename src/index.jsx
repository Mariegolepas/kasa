import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom' //Used to be 'Switch' in past Router version
import Home from './pages/Home'
import Header from './components/Header'
import Error from './components/Error'
 
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route>
                  <Error />
              </Route>
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)