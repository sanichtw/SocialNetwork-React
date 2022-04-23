import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import s from './app.module.css';
import DialogsContainer from './components/dialogs/dialogs-container';
import FindUsersContainer from './components/findUsers/findUsersContainer';
import HeaderContainer from './components/header/header-container';
import Login from './components/login/Login';
import NavContainer from './components/nav/nav-container';
import ProfileContainer from './components/profile/ProfileContainer';
import { getUserAuthData, initializeApp } from '../src/redux/actions/actions';
import { connect, Provider } from 'react-redux';
import withRouter from './hoc/withRouter';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    { if (!this.props.initialized) return <Preloader /> }
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

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
};

export let AppJS = () => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { getUserAuthData, initializeApp })
)(App);