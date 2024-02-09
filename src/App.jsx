import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {Navigate, Route, Routes, BrowserRouter} from "react-router-dom";
import Products from './components/Products';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import Product from './components/Product/Product';

const App = () => <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path=''>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Navigate to="/home"/>} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
</>


export default App;