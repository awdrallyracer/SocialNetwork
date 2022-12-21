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
            <Route path='/profile' element={<Profile profilePage={props.appState.profilePage} addPost ={props.addPost} updateNewPostText={props.updateNewPostText} />} />
            <Route path='/dialogs/*' element={<Dialogs state={props.appState.dialogsPage} addMessage={props.addMessage} />} />
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
