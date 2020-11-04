import { setSnackbar } from '../../redux'
export const sendMessage = (message) => {
    return (dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const msgRef = db.collection('messages').doc();
        console.log(message)
        msgRef.set({
            message_type: message.message_type,
            message_body: message.message_body,
            sender_email: message.sender_email,
            sent_on: message.sent_on
        }
        ).then(()=>{
            dispatch({ type: 'SEND_MESSAGE', payload: message })
            dispatch(
                setSnackbar(true, 'success', 'Your Message has been sent successfully')
            )
        }).catch((error)=>{
            dispatch({ type: 'SEND_MESSAGE_ERROR', payload: error })
            dispatch(
                setSnackbar(true, 'error', `Unable to send message. ${error.message}`)
            )
        })
    }
}