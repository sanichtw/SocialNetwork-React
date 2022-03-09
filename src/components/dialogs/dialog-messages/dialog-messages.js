import s from './dialog-messages.module.css';

const DialogMessage = (props) => {

    return (
            <div className={s.messages}>
                {props.text}
            </div>
    )
};

export default DialogMessage;