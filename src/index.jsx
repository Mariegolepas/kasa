import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom' //Used to be 'Switch' in past Router version
//import Home from './pages/Home'
import App from './components/App'
import Header from './components/Header/index'
import Error from './components/Error/index'
import Footer from './components/Footer/index'
 
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route exact path="/">
                  <App />
              </Route>
              <Route>
                  <Error />
              </Route>
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)