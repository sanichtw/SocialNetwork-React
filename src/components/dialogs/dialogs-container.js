import { connect } from 'react-redux';
import { sendNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/actions/actions';
import Dialogs from './dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendNewMessageActionCreator())
        },
        changeText: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
};
// Connect present-Component(Dialogs) to store and return new container-Component
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;