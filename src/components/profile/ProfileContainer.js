import { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/actions';
import Profile from './Profile';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
        // etc...
        />
    );
};


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 23004;
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to="/login" />
        };

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePhoto: state.profilePage.profilePhoto
    }
};

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)