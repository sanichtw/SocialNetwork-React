import { Component } from "react";
import style from './profile-status.module.css';


class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    toggleactiveMode = () => {
        debugger
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div className={style.profile_status} onClick={this.toggleactiveMode}>
                {!this.state.editMode &&
                    <span >{this.props.status}</span>
                }
                {this.state.editMode &&
                    <input autoFocus onBlur={this.toggleactiveMode}></input>
                }
            </div>
        )
    }
};

export default ProfileStatus;