import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import App from './components/App'

 
ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
document.getElementById('root')
)

/* import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { Routes } from 'react-router-dom' //Used to be 'Switch' in past Router version
//import Home from './pages/Home'
import App from './components/App'
import Header from './components/Header'
import Error from './components/Error'
 
ReactDOM.render(
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
      </Router>,
document.getElementById('root') */