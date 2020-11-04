import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Fade from '@material-ui/core/Fade'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from "@material-ui/core/InputAdornment"
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import handleProfileSubmit from '../../helpers/profileHandler'
import handleChangePassword from '../../helpers/changePasswordHandler'

const useStyles = makeStyles((theme) => ({
    input: {
        display: "none",
    },
    button: {
        height: "40px",
    },
    avatar:{
        width: '80px',
        height: '80px', 
        fontSize:'2em', 
        backgroundColor:'#00796b'
    },
    avatarImage:{
        width: '80px',
        height: '80px', 
        fontSize:'2em', 
        backgroundColor:'#111111'
    },
    
    dialogBackground:{
        background: '#efefef',
        padding: 0,
        margin: 0,
        width: '90vw',
    },
    
  })
)

const ProfileDetailsBlock = (props) => {
    const {profile, auth} = props
    const classes = useStyles(props)
    const imageTypes = ['image/png', 'image/jpeg', 'image/jpg']
    const [editDetailsOpen, setEditDetailsOpen] = useState(false)
    const [changePasswordOpen, setChangePasswordOpen] = useState(false)

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [image, setImage] = useState(null)
    const [imageError, setImageError] = useState('')
    const [uploading, setUploading] = useState(false)
    const [uploadError, setUploadError] = useState('')
    const [url, setUrl] = useState('')
    const [progress, setProgress] = useState(0)
    const [oldPassword, setOldPassword] = useState('')
    const [oldPasswordError, setOldPasswordError] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('')
    const [loading, setLoading] = useState(false)
    const [oldPasswordHidden, setOldPasswordHidden]= useState(false)
    const [newPasswordHidden, setNewPasswordHidden]= useState(false)

    const dispatch = useDispatch()

    const handleOpen = (value) => {
        value==='editDetails'
        ? setEditDetailsOpen(true) : setChangePasswordOpen(true)
    }

    const handleClose = () => {
        setOldPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
        setUrl('')
        setEditDetailsOpen(false)
        setChangePasswordOpen(false)
    }
    
//Profile page Variables
    let initials =' '
    let displayName = 'Name'
    let displayEmail = 'email@email.com'
    let displayPhone = '000-000-0000'
    let displayImage = ''
    
    if (profile.user_name){
        displayName = profile.user_name

        displayName.toUpperCase().split(' ').map(
            value => initials += value[0]
        )
        
        displayEmail = profile.user_email

        let user_phone = profile.user_phone
        displayPhone =  user_phone.slice(0,3) + '-' + user_phone.slice(3,6) + '-' + user_phone.slice(6, ) 

        displayImage= profile.user_image
        
    }

    const clearInputs = () =>{
        setName('')
        setUrl('')
        setPhone('')
        setOldPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
    }

    const clearErrors = () =>{
        setNameError('')
        setImageError('')
        setPhoneError('')
        setOldPasswordError('')
        setNewPasswordError('')
        setConfirmNewPasswordError('')
        setUploadError('')
    }

    const handleImageAdd = (e) =>{
        const selected = e.target.files[0]
        const imageReader = new FileReader()

        imageReader.onload = () =>{
            if(imageReader.readyState === 2){
                setUrl(imageReader.result)
            }
        }
        
        imageReader.readAsDataURL(selected)

        if ( selected && imageTypes.includes(selected.type)){
          setImage(selected) 
          setImageError('')

        }
        else{ 
          setImage(null) 
          setImageError('File not supported')
        }
    }

    useEffect(() => {
        setName(profile.user_name)
        setPhone(profile.user_phone)
        setUrl(profile.user_image)
    }, [profile.user_name, profile.user_phone, profile.user_image, editDetailsOpen])

    return (
        <div className="details-block">
            <div className="avatar">
                <Avatar alt="Profile Image" src={displayImage} 
                className = {url ? classes.avatarImage : classes.avatar }>
                    {initials && initials}
                </Avatar>
            </div>
            <div className="details">
                <Typography variant='h6' className='user-details'>{displayName}</Typography>
                <Typography variant='subtitle1' className='user-details'>{displayEmail}</Typography>
                <Typography variant='subtitle1' className='user-details'>{displayPhone}</Typography>
            </div>
            <Button
                variant="contained"
                color="primary"
                size="medium"
                className="pswd-btn"
                startIcon={<LockOpenIcon />}
                onClick={() => handleOpen('changePassword')}
            >
                Change Password
            </Button>

            <Dialog
                open={changePasswordOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{paper: classes.dialogBackground}}
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="title" style={{display: "flex"}}>
                        <Typography variant="h6" component="div" style={{flexGrow: 1}} className="dialog-title">
                            Want to change your Password ?
                        </Typography>
                        <Button color="secondary" onClick={handleClose}><CloseIcon/></Button>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <Fade in={changePasswordOpen}>
                        <Container className="change-password-container">
                            <div className="change-password-box">
                                <div className="change-password-block">
                                    <div className="input-fields-arranger">
                                        <TextField
                                            label="Old Password"
                                            variant="outlined"
                                            size="medium"
                                            value= {oldPassword}
                                            error={oldPasswordError ? true : false}
                                            helperText={oldPasswordError}
                                            required
                                            fullWidth
                                            type={!oldPasswordHidden ? 'password' : 'text'}
                                            onClick={clearErrors}
                                            onChange={(e)=>setOldPassword(e.target.value)}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end" onClick={() => setOldPasswordHidden(!oldPasswordHidden)} style={{cursor: 'pointer'}}>
                                                    {!oldPasswordHidden ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                                                  </InputAdornment>
                                                ),
                                              }}
                                        />
                                    </div>
                                    <div className="input-fields-arranger">
                                        <TextField
                                            label="New Password"
                                            variant="outlined"
                                            size="medium"
                                            value= {newPassword}
                                            error={newPasswordError ? true : false}
                                            helperText={newPasswordError}
                                            required
                                            fullWidth
                                            type={!newPasswordHidden ? 'password' : 'text'}
                                            onClick={clearErrors}
                                            onChange={(e)=>setNewPassword(e.target.value)}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end" onClick={() => setNewPasswordHidden(!newPasswordHidden)} style={{cursor: 'pointer'}}>
                                                    {!newPasswordHidden ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                                                  </InputAdornment>
                                                ),
                                              }}
                                        />
                                    </div> 
                                    <div className="input-fields-arranger">
                                        <TextField
                                            label="Confirm New Password"
                                            variant="outlined"
                                            size="medium"
                                            value= {confirmNewPassword}
                                            error={confirmNewPasswordError ? true : false}
                                            helperText={confirmNewPasswordError}
                                            required
                                            fullWidth
                                            type={!newPasswordHidden ? 'password' : 'text'}
                                            onClick={clearErrors}
                                            onChange={(e)=>setConfirmNewPassword(e.target.value)}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end" onClick={() => setNewPasswordHidden(!newPasswordHidden)} style={{cursor: 'pointer'}}>
                                                    {!newPasswordHidden ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                                                  </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div> 
                                    {loading ? <CircularProgress color="secondary"/> : ''}
                                    <div className="change-submit-button">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disabled={ loading ? true : false }
                                            className="change-password-btn"
                                            onClick = {() => handleChangePassword(
                                                oldPassword, newPassword, confirmNewPassword,
                                                setLoading, setChangePasswordOpen, setOldPasswordError, setNewPasswordError, 
                                                setConfirmNewPasswordError,
                                                clearErrors, clearInputs, dispatch
                                            )}
                                            >
                                            CHANGE PASSWORD
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Fade>
                </DialogContent>
            </Dialog>

            <Button
                variant="contained"
                color="secondary"
                size="medium"
                className="edit-btn"
                startIcon={<EditIcon />}
                onClick={() => handleOpen('editDetails')}
            >
                Edit Details
            </Button>

            <Dialog
                open={editDetailsOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{paper: classes.dialogBackground, 
                    container: classes.dialogContainer}}
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="title" style={{display: "flex"}}>
                        <Typography variant="h6" component="div" style={{flexGrow: 1}}  className="dialog-title">
                            Edit your Profile Details 
                        </Typography>
                        <Button color="secondary" onClick={handleClose} ><CloseIcon/></Button>
                    </div>
                </DialogTitle>
                <DialogContent 
                    styles={{padding: 0, margin: 0}}
                    dividers
                >
                <Fade in={editDetailsOpen}>
                    <Container className="edit-details-container">
                        <div className="edit-details-box">
                            <div className="edit-details-block">
                                <div className="input-fields-arranger" style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                                    <Avatar 
                                        alt="Profile Image" 
                                        src= {url} 
                                        className = { url ? classes.avatarImage : classes.avatar }
                                    >
                                        {initials && initials}
                                    </Avatar> 
                                    <input
                                        accept="image/*"
                                        id="profile-image-upload"
                                        className={classes.input}
                                        type="file"
                                        onChange ={handleImageAdd}
                                    />
                                    <label htmlFor="profile-image-upload">
                                        <Button
                                        className={classes.button}
                                        color="primary"
                                        component="div"
                                        >
                                        Change profile picture 
                                        </Button>
                                    </label>
                                </div>
                                <div className="input-fields-arranger" 
                                    style={imageError ? {display:'block'} : {display:'none'}}
                                >
                                    <Typography color="error" align="left">
                                        {imageError}
                                    </Typography>
                                </div>

                                <div className="input-fields-arranger" 
                                    style={uploadError ? {display:'block'} : {display:'none'}}
                                >
                                    <Typography color="error" align="left">
                                        {uploadError}
                                    </Typography>
                                </div>
                                
                                <div className="input-fields-arranger">
                                    <TextField
                                        label="Full Name"
                                        variant="outlined"
                                        size="medium"
                                        placeholder={name}
                                        error={nameError ? true : false}
                                        helperText={nameError}
                                        onClick={clearErrors}
                                        onChange={(e)=>setName(e.target.value)}
                                        fullWidth
                                    />
                                </div>
                                <div className="input-fields-arranger">
                                    <TextField
                                        label="Phone"
                                        variant="outlined"
                                        size="medium"
                                        placeholder={phone}
                                        error={phoneError ? true : false}
                                        helperText={phoneError}
                                        onClick={clearErrors}
                                        onChange={(e)=>setPhone(e.target.value)}
                                        fullWidth
                                    />
                                </div>
                                <div className="input-fields-arranger">
                                    <TextField
                                        label="Email"
                                        value={displayEmail}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="filled"
                                        fullWidth
                                        size="medium"
                                    />
                                </div>
                                <div className="input-fields-arranger" style={uploading ? {display:'block'} : {display:'none'}}>
                                    <LinearProgress variant="determinate" value={progress} />
                                </div> 
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className="details-submit-btn"
                                    disabled={ uploading ? true : false }
                                    onClick={() => handleProfileSubmit( 
                                        auth.uid, name, phone, url, image, profile, 
                                        setUploading, setProgress, setUrl, setEditDetailsOpen, 
                                        setNameError, setPhoneError,  setUploadError, 
                                        dispatch,  clearInputs, clearErrors
                                        )}
                                    >
                                    SUBMIT
                                </Button>
                            </div>
                        </div>
                    </Container>
                </Fade>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ProfileDetailsBlock
