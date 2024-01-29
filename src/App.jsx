import './App.css'
import Carousel from './components/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {Navigate, Route, Routes, BrowserRouter} from "react-router-dom";

const App = () => <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path=''>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<>
          <Carousel />
          <FeaturedProducts />
          </>} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
</>


export default App;