import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logOut } from '../../redux/actions/actions';


class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }

};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logOut })(HeaderContainer);