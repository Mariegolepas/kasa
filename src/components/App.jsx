import Header from './Header/index'
import Error from './Error/index'
import Footer from './Footer/index'
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import '../styles/index.css'
import { Routes, Route } from 'react-router-dom' //Used to be 'Switch' in past Router version

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'/logement/:id'} element={<Logement />} />
          <Route path='*' element={<Error/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


