import { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/actions';
import Profile from './Profile';
import { useParams } from "react-router-dom";

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
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfile })(WithRouterProfileContainer)