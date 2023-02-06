//Import our general components
import Header from './Header/index'
import Error from './Error/index'
import Footer from './Footer/index'
//Import our pages
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import About from '../pages/About'
//Import our style for this page
import '../styles/index.css'
//Import React Router v6 Components for our routes
import { Routes, Route } from 'react-router-dom' //Used to be 'Switch' in past Router version

/**
 * Our routes for our website
 * @returns 
 */
function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/logement/:id'} element={<Logement />} />
            <Route path='/about' element={<About />} />
            <Route path='/error' element={<Error/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    <Footer />
    </>
  );
}

export default App;


