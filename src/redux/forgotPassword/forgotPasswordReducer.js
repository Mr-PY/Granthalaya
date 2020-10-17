const initialState ={
    forgotPasswordError: null
}

const forgotPasswordReducer = (state = initialState, action)=>{
    switch(action.types){
        case 'FORGOT_PASSWORD_ERROR':
            return{
                ...state,
                forgotPasswordError: 'Error occured'
            }
        case 'FORGOT_PASSWORD_SUCCESS':
            return {
                ...state,
                forgotPasswordError: null
            }
        default:
            return state
    }
}

export default forgotPasswordReducer