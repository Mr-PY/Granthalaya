const initialState = {
    signUpError:null
}

const signUpReducer = (state= initialState, action) =>{
    switch (action.type){
        case "SIGNUP_SUCCESS":
            return{
                ...state,
                signUpError: null,
            }
        case "SIGNUP_ERROR":
            return{
                ...state,
                signUpError: 'Sign up Error',
            }
        default: return state;
    }
}
export default signUpReducer