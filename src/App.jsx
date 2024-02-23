import './App.css'
import AuthProvider from './Provider/authProvider';
import Routes from './Routes';

const App = () =>{

  return <AuthProvider>
    <Routes />
  </AuthProvider>
}


export default App;