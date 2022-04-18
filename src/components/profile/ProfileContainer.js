import { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, updateProfileStatus } from '../../redux/actions/actions';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../hoc/withRouter';

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
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
        authorizedUserId: state.auth.userId
    }
};

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)