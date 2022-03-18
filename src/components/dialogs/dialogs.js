import DialogMessage from './dialog-messages/dialog-messages';
import DialogPerson from './dialog-persons/dialog-persons';
import s from './dialogs.module.css';

const Dialogs = (props) => {
    let state = props.dialogsData;

    let messages = state.msgsData
        .map(message => <DialogMessage text={message.text} key={message.id} />);
    let names = state.namesData
        .map(name => <DialogPerson name={name.name} id={name.id} key={name.id} avatar={name.avatar} />);

    const onSendMessage = () => {
        props.sendMessage()
    };
    const onChange = (e) => {
        let text = e.target.value;
        props.changeText(text)
    };

    return (
        <div className={s.dialog}>
            <div className={s.dialog_persons}>
                {names}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.message_window}>
                    <textarea onChange={onChange} value={state.newMessageText}></textarea>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;