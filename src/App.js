import { Route, Routes } from 'react-router-dom';
import s from './app.module.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';

const App = (props) => {
  // debugger;
  return (
    <div className={s.app}>
      <Header />
      <Nav navData={props.state.navPage} />
      <div className={s.app_wrapper_container}>
        <Routes>
          <Route path="/profile" element={<Profile profileData={props.state.profilePage}
            dispatch={props.dispatch}
          />} />
          <Route path="/dialog" element={<Dialogs dialogData={props.state.dialogPage} dispatch={props.dispatch} />} />
          <Route path="/news" element={<Dialogs />} />
          <Route path="/music" element={<Dialogs />} />
          <Route path="/settings" element={<Dialogs />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
