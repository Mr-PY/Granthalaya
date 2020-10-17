import { updatePassword } from "../redux";

const handleChangePassword = (oldPassword, newPassword, confirmPassword,
    setLoading, setChangePasswordOpen, setOldPasswordError, setNewPasswordError, 
    setConfirmPasswordError,
    clearErrors, clearInputs, dispatch
    ) => {

    clearErrors();
    setLoading(true)

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
        setConfirmPasswordError("Password doesn't match")
        return
    }
    clearInputs()

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