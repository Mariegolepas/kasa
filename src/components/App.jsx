import Header from './Header/index'
import Error from './Error/index'
import Footer from './Footer/index'
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import About from '../pages/About'
import '../styles/index.css'
import { Routes, Route } from 'react-router-dom' //Used to be 'Switch' in past Router version

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


