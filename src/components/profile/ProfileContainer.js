import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/actions/actions';
import Profile from './Profile';
import {useParams} from "react-router-dom";

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
        debugger
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
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

export default connect(mapStateToProps, { setProfile })(WithRouterProfileContainer)