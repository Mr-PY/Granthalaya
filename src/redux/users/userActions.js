import { setSnackbar } from '../../redux'

export const addUser =  (user) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        //firebase Stuff
        const db = getFirestore();
        const userRef = db.collection('users').doc();
        userRef.set({
            user_name: user.user_name,
            user_email: user.user_email,
            user_phone: user.user_phone,
            joined_on: user.joined_on,
            is_admin: user.is_admin,
            borrowed_list: user.borrowed_list,
            reserved_list: user.reserved_list,
            user_image: user.user_image
        }
        ).then(()=>{
            dispatch(
                setSnackbar(true, 'success', `User ${user.user_name} Added Successfully`)
            )
            dispatch({ type: 'ADD_USER', payload: user })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', "Unable to add user. Try again later")
            )
            dispatch({ type: 'ADD_USER_ERROR', payload: error })
        })
    }
}

export const deleteUser = (user) => {
    return(dispatch, getState) =>{
        //firebase Stuff
        dispatch({ type: 'DELETE_USER', payload: user })
    }
}

export const modifyuser = () => {

}

export const modifyUserProfile = (user) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        //firebase Stuff
        const db = getFirestore();
        const userRef = db.collection('users').doc(user.id);
        userRef.update({
            user_name: user.user_name,
            user_phone: user.user_phone,
            user_image: user.user_image
        }
        ).then(()=>{
            dispatch(
                setSnackbar(true, 'success', "Profile Updated Successfully")
            )
            user.setEditDetailsOpen(false)
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', "Unable to save changes. Try again later")
            )
        })
    }
}

export const updatePassword = (data) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        //firebase Stuff
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
                            user.email, data.oldPassword);
        user.reauthenticateWithCredential(credential)
        .then(()=>{
            user.updatePassword(data.newPassword).then(() =>{
                dispatch(
                    setSnackbar(true, 'success', "Password Updated Successfully")
                )
                data.setLoading(false)
                data.setChangePasswordOpen(false)
            }).catch((error)=>{
                dispatch(
                    setSnackbar(true, 'error', "Unable to update password")
                    )
                });
                data.setLoading(false)
            }).catch((error)=>{
                dispatch(
                    setSnackbar(true, 'error', 'Password is invalid')
                )
                data.setLoading(false)
        })
    }
}
