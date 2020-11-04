import { setSnackbar } from '../../redux'
export const forgotPassword = ({email, setLoading}) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().sendPasswordResetEmail(
            email
        ).then(() => {
            dispatch({ type: 'FORGOT_PASSWORD_SUCCESS' });
            dispatch(
                setSnackbar(true, 'success', 'Please, check your Email for further instructions.')
            )
            setLoading(false)
        }).catch(error => {
            dispatch({ type: 'FORGOT_PASSWORD_ERROR', error })
            dispatch(
                setSnackbar(true, 'error', `Unable to send the reset link. ${error.message}`)
            )
            setLoading(false)
        })
    }
}