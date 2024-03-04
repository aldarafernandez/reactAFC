import './App.css'
import AuthProvider from './Provider/authProvider';
import Routes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () =>{

  return <AuthProvider>
    <Routes />
  </AuthProvider>
}


export default App;