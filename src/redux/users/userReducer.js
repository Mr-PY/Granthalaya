
const initialState = {
    users:[]
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return state
        case 'ADD_USER_ERROR':
            return state
        case 'DELETE_USER':
            break;
        case 'MODIFY_USER':
            break;
        default: 
            return state
    }
    return state
}

export default userReducer