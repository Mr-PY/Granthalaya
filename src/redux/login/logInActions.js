import { setSnackbar } from '../../redux'
export const logIn = ({email, password, setLoading}) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            email, password
        ).then(() => {
            dispatch(
                setSnackbar(true, 'success', 'Welcome to Granthalaya!')
            )
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(error => {
            setLoading(false)
            dispatch({ type: 'LOGIN_ERROR', error })
            if(error.code === 'auth/user-not-found'){
                dispatch(
                    setSnackbar(true, 'error', `Account not found. Trying Signing Up.`)
                )
            }
            else{
                dispatch(
                    setSnackbar(true, 'error', `Email or password Incorrect.`)
                )
            }
        })
    }
}