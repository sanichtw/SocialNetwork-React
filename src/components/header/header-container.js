import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setUserAuthData } from '../../redux/actions/actions'



class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let { id, login, email } = response.data.data;
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