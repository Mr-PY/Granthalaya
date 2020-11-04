import { projectStorage } from '../base'
import { modifyUserProfile, setSnackbar } from "../redux"

const handleProfileSubmit = (
    id, name, phone, url, image, profile,
    setUploading, setProgress, setUrl, setEditDetailsOpen,
    setNameError, setPhoneError,  setUploadError,
    dispatch, clearInputs, clearErrors
    ) =>{

    const phonePattern = /^[0-9]+$/

    clearErrors()

    if(!name){
        setNameError("Name can't be empty")
        return
    }
    if(name.length < 3){
        setNameError("Name not valid")
        return
    }
    if(!name.match(/^[a-zA-Z]+$/) && !name.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && !name.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)){
        setNameError("Name not valid")
        return
    }
    if(!phone){
        setPhoneError("Phone Number can't be empty")
        return
    }
    if(!phone.match(phonePattern) || phone.length >10){
        setPhoneError("Invalid Phone Number")
        return
    }
    if(name === profile.user_name && phone === profile.user_phone && url === profile.user_image){
        dispatch(
            setSnackbar(true, 'info', 'Nothing to update.')
        )
        return
    }
    clearInputs()

    if( image && image.name && url !== profile.user_image ){
        const storageRef = projectStorage.ref(`users/${image.name}`)
        setUploading(true)
        storageRef.put(image).on(
            'state_changed',
            snapshot => {
                let progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                setUploadError(error.code)        
            },
            () => {
                storageRef.getDownloadURL()
                .then(
                    url => {
                        setUrl(url)
                        setUploading(false)
                        dispatch(
                            modifyUserProfile({
                                id: id,
                                user_name: name,
                                user_phone: phone,
                                user_image: url,
                                setEditDetailsOpen
                            })
                        )  
                    }
                )
            }
        )
        return
    }
    dispatch(
        modifyUserProfile({
            id: id,
            user_name: name,
            user_phone: phone,
            user_image: url,
            setEditDetailsOpen
        })
    )
    
}

export default handleProfileSubmit