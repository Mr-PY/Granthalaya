import { setSnackbar } from '../../redux'
export const logIn = ({email, password, setLoading}) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            email, password
        ).then(() => {
            dispatch(
                setSnackbar(true, 'success', 'Welcome...!')
            )
            setLoading(false)
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(error => {
            setLoading(false)
            dispatch({ type: 'LOGIN_ERROR', error })
            dispatch(
                setSnackbar(true, 'error', 'Email or Password Incorrect')
            )
        })
    }
}