import { Component } from "react";
import style from './profile-status.module.css';


class ProfileStatus extends Component {
    state = {
        editMode: false,
        profileStatus: this.props.profileStatus
    }

    toggleactiveMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateProfileStatus(this.state.profileStatus)
    };

    onStatusChange = (e) => {
        this.setState({
            profileStatus: e.target.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                profileStatus: this.props.profileStatus
            })
        }
    }

    render() {
        return (
            <div className={style.profile_status} onClick={this.toggleactiveMode}>
                {!this.state.editMode &&
                    <span>{this.props.profileStatus || 'No status'}</span>
                }
                {this.state.editMode &&
                    <input autoFocus onBlur={this.toggleactiveMode} onChange={this.onStatusChange} value={this.state.profileStatus}></input>
                }
            </div>
        )
    }
};

export default ProfileStatus;