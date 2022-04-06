import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setUserAuth } from '../../redux/actions/actions';


class HeaderContainer extends Component {
    componentDidMount() {
        this.props.setUserAuth();
    }

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

export default connect(mapStateToProps, { setUserAuth })(HeaderContainer);