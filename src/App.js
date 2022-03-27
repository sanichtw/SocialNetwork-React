import { Route, Routes } from 'react-router-dom';
import s from './app.module.css';
import Dialogs from './components/dialogs/dialogs';
import DialogsContainer from './components/dialogs/dialogs-container';
import FindUsersContainer from './components/findUsers/findUsersContainer';
import Header from './components/header/header';
import NavContainer from './components/nav/nav-container';
import ProfileContainer from './components/profile/ProfileContainer';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <NavContainer />
      <div className={s.app_wrapper_container}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialog" element={<DialogsContainer />} />
          {/* <Route path="/news" element={<Dialogs />} />
          <Route path="/music" element={<Dialogs />} />
          <Route path="/settings" element={<Dialogs />} /> */}
          <Route path="/findUsers" element={<FindUsersContainer />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
