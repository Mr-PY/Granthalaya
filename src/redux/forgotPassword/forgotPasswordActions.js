import { setSnackbar } from '../../redux'
export const forgotPassword = ({email}) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().sendPasswordResetEmail(
            email
        ).then(() => {
            dispatch({ type: 'FORGOT_PASSWORD_SUCCESS' });
            dispatch(
                setSnackbar(true, 'success', 'Please, check your Email for further instructions.')
            )
        }).catch(error => {
            dispatch({ type: 'FORGOT_PASSWORD_ERROR', error })
            dispatch(
                setSnackbar(true, 'error', 'Unable to send the reset link. Try again')
            )
        })
    }
}