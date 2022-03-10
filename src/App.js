import { Route, Routes } from 'react-router-dom';
import s from './app.module.css';
import Dialogs from './components/dialogs/dialogs';
import DialogsContainer from './components/dialogs/dialogs-container';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';

const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <Nav navData={props.state.navPage} />
      <div className={s.app_wrapper_container}>
        <Routes>
          <Route path="/profile" element={<Profile store={props.store}
          />} />
          <Route path="/dialog" element={<DialogsContainer store={props.store} />} />
          <Route path="/news" element={<Dialogs />} />
          <Route path="/music" element={<Dialogs />} />
          <Route path="/settings" element={<Dialogs />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
