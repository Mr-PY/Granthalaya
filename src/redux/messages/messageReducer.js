const initialState={
    messages:[],
    error: ''
}

const messageReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
        return {
            messages: action.payload,
            error: ' '
        }
        case 'SEND_MESSAGE_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'FETCH_MESSAGES_SUCCESS':
            return{
                loading: false,
                messages: action.payload,
                error: ''
            }
        case 'FETCH_MESSAGES_FAILURE':
            return{
                loading: false,
                messages: [],
                error: action.payload 
            }
            default:
                return state
    }
}

export default messageReducer;