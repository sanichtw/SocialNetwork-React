import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../validators/validators';
import { Textarea } from '../common/preloader/form-control/form-control';
import DialogMessage from './dialog-messages/dialog-messages';
import DialogPerson from './dialog-persons/dialog-persons';
import s from './dialogs.module.css';

const Dialogs = (props) => {
    let state = props.dialogsData;

    let messages = state.msgsData
        .map(message => <DialogMessage text={message.text} key={message.id} />);
    let names = state.namesData
        .map(name => <DialogPerson name={name.name} id={name.id} key={name.id} avatar={name.avatar} />);

    const addNewMessage = (values) => {
        props.sendNewMessage(values.NewMessageBody)
    };

    const AddNewMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} placeholder={"Enter your message"}
                    name={"NewMessageBody"}
                    validate={[required]}></Field>
                <button type="submit">Send</button>
            </form>
        )
    };

    const AddNewMessageReduxForm = reduxForm({
        form: "DialogAddMessageForm"
    })(AddNewMessageForm)

    return (
        <div className={s.dialog}>
            <div className={s.dialog_persons}>
                {names}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.message_window}>
                    <AddNewMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
};

export default Dialogs;