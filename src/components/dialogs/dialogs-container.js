import { sendNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/actions/actions';
import Dialogs from './dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();

     const sendMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    };
    const changeText = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));

    };

    return (
        <Dialogs sendMessage={sendMessage} changeText={changeText} dialogsData={state.dialogsPage}/>
    )
};

export default DialogsContainer;