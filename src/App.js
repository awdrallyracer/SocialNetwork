import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Navbar/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile postsData={props.postsData} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            <Route path='/news' />
            <Route path='/music' />
            <Route path='/settings' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
