import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendNewMessage, updateNewMessage } from '../../redux/actions/actions';
import Dialogs from './dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendNewMessage: () => {
//             dispatch(sendNewMessage())
//         },
//         updateNewMessage: (text) => {
//             dispatch(updateNewMessage(text))
//         }
//     }
// };

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, { sendNewMessage, updateNewMessage }),
    withAuthRedirect
)(Dialogs)
    ;