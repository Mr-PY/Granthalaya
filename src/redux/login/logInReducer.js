const initialState ={
    logInError:null
}

const logInReducer = (state = initialState, action)=>{
    switch(action.types){
        case 'LOGIN_ERROR':
            return{
                ...state,
                logInError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                logInError: null
            }
        default:
            return state
    }
}

export default logInReducer