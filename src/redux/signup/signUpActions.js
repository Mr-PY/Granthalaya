import { setSnackbar } from '../../redux'
export const signUp = (newUser) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                user_name: newUser.fullName,
                user_email: newUser.email.toLowerCase(),
                user_phone: newUser.phone,
                joined_on: new Date(),
                is_admin: false,
                borrowed_list: [],
                reserved_list: [],
                user_image: ''
            }).then(() =>{
                dispatch({type: "SIGNUP_SUCCESS"})
                dispatch(
                    setSnackbar(true, 'success', `Hello, ${newUser.fullName}. Welcome to Granthalaya.`)
                )
            }).catch(error=>{
                newUser.setLoading(false)
                dispatch({type: "SIGNUP_ERROR", payload: error})
                if(error.code ==='auth/email-already-exists'){
                    dispatch(
                        setSnackbar(true, 'error', `An Account with this email already exists.`)
                    )
                }
                else{
                    dispatch(
                        setSnackbar(true, 'error', `${error.message}`)
                    )
                }
            })
        })
    }
}