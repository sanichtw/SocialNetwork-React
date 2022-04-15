import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './app.module.css';
import DialogsContainer from './components/dialogs/dialogs-container';
import FindUsersContainer from './components/findUsers/findUsersContainer';
import HeaderContainer from './components/header/header-container';
import Login from './components/login/Login';
import NavContainer from './components/nav/nav-container';
import ProfileContainer from './components/profile/ProfileContainer';
import { getUserAuthData } from '../src/redux/actions/actions';
import { connect } from 'react-redux';
import withRouter from './hoc/withRouter';
import { compose } from 'redux';


class App extends Component {
  componentDidMount() {
    this.props.getUserAuthData();
  }

  render() {
    return (
      <div className={s.app} >
        <HeaderContainer />
        <NavContainer />
        <div className={s.app_wrapper_container}>
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialog" element={<DialogsContainer />} />
            <Route path="/findUsers" element={<FindUsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div >
    )
  };
}

export default compose(
  withRouter,
  connect(null, { getUserAuthData })
)(App);