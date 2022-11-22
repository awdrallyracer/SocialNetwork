import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Navbar/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>

      <Header />

      <Nav />

      <Profile />

    </div>
  );
}

//Ctrl+K+C - comment



export default App;
