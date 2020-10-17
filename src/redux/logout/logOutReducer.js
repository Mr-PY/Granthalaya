const logOutReducer = (state = {}, action)=>{
    switch(action.types){
        case 'LOGOUT_SUCCESS':
            return state
        default:
            return state
    }
}

export default logOutReducer