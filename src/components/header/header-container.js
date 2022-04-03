import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setUserAuthData } from '../../redux/actions/actions'
import { authAPI } from '../../api/api';



class HeaderContainer extends Component {
    componentDidMount() {
        authAPI.auth()
            .then(response => {
                let { id, login, email } = response;
                this.props.setUserAuthData(id, login, email)
            })
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

export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);