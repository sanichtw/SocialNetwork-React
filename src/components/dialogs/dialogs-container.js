import { sendNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/actions/actions';
import StoreContext from '../../redux/storeContext';
import Dialogs from './dialogs';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();

            const sendMessage = () => {
                store.dispatch(sendNewMessageActionCreator());
            };
            const changeText = (text) => {
                store.dispatch(updateNewMessageActionCreator(text));
            };

            return <Dialogs sendMessage={sendMessage} changeText={changeText} dialogsData={state.dialogsPage} />
        }
        }

    </StoreContext.Consumer>
};

export default DialogsContainer;