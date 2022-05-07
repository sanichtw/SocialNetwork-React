import { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, updateProfileStatus, setMainPhoto, saveProfileInfo } from '../../redux/actions/actions';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../hoc/withRouter';

class ProfileContainer extends Component {
    refreshProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.params.userId !== prevProps.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                isOwner={!!this.props.params.userId} />
        )
    }

};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
        authorizedUserId: state.auth.userId
    }
};

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus, setMainPhoto, saveProfileInfo }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)