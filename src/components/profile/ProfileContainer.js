import { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, updateProfileStatus } from '../../redux/actions/actions';
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
            // userId = 3;
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePhoto: state.profilePage.profilePhoto,
        profileStatus: state.profilePage.profileStatus,
    }
};

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)