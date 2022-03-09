import { sendNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/actions/actions';
import DialogMessage from './dialog-messages/dialog-messages';
import DialogPerson from './dialog-persons/dialog-persons';
import s from './dialogs.module.css';

const Dialogs = (props) => {
    let { namesData, msgsData, newMessageText } = props.dialogData;

    let messages = msgsData
        .map(message => <DialogMessage text={message.text} />);
    let names = namesData
        .map(name => <DialogPerson name={name.name} id={name.id} avatar={name.avatar} />);

    const onSendMessage = () => {
        props.dispatch(sendNewMessageActionCreator());
    };
    const onChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));

    };

    return (
        <div className={s.dialog}>
            <div className={s.dialog_persons}>
                {names}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.message_window}>
                    <textarea onChange={onChange} value={newMessageText}></textarea>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;