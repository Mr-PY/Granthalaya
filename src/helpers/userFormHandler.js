import { addUser } from "../redux/users/userActions";

const handleAddUserSubmit = (
     name, email, phone, 
    setNameError, setEmailError, setPhoneError, 
    dispatch, clearErrors) =>{
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
    const phonePattern = /^[0-9]+$/;
    
    clearErrors();
    
    if(name.length ===0){
        setNameError("Name can't be empty");
        return;
    }
    if(name.length < 3){
        setNameError("Name not valid");
        return;
    }
    if(phone.length ===0){
        setPhoneError("Phone Number can't be empty");
        return;
    }
    if(!phone.match(phonePattern) || phone.length >10){
        setPhoneError("Invalid Phone Number");
        return;
    }
    if(email.length ===0){
        setEmailError("Email can't be empty");
        return;
    }
    if(!email.match(emailPattern)){
        setEmailError("Invalid Email");
        return;
    }
    dispatch(
        addUser({
            user_name: name, 
            user_email: email, 
            user_phone: phone, 
            joined_on: new Date(),
            is_admin:false,
            borrowed_list: [],
            reserved_list: [],
            user_image: ''
        }));

    
};

export default handleAddUserSubmit;