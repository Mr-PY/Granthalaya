import { updatePassword } from "../redux"
import { setSnackbar } from '../redux'

const handleChangePassword = (oldPassword, newPassword, confirmPassword,
    setLoading, setChangePasswordOpen, setOldPasswordError, setNewPasswordError, 
    setConfirmPasswordError,
    clearErrors, clearInputs, dispatch
    ) => {

    clearErrors()

    if(!oldPassword){
        setOldPasswordError("Current Password is required")
        return
    }
    if(!newPassword){
        setNewPasswordError("New Password is required")
        return
    }
    if(newPassword.length < 6){
        setNewPasswordError("Password must be atleast 6 characters long")
        return
    }
    if(newPassword !== confirmPassword){
        setConfirmPasswordError("Password didn't match")
        return
    }
    if(oldPassword === newPassword){
        dispatch(
            setSnackbar(true, 'error', "New Password can't be same as Old Password")
        )
        setLoading(false)
        return
    }
    clearInputs()
    setLoading(true)
    dispatch(
        updatePassword({
            oldPassword,
            newPassword,
            setLoading,
            setChangePasswordOpen
        })
    )
}

export default handleChangePassword