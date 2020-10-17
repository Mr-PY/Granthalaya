import { combineReducers } from "redux"
import logInReducer from "./login/logInReducer"
import signUpReducer from "./signup/signUpReducer"
import snackbarReducer from "./snackbar/snackbarReducer"
import bookReducer from './books/bookReducer'
import logOutReducer from './logout/logOutReducer'
import userReducer from './users/userReducer'
import messageReducer from './messages/messageReducer'
import forgotPasswordReducer from './forgotPassword/forgotPasswordReducer'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    books: bookReducer,
    logIn: logInReducer,
    logOut: logOutReducer,
    messages: messageReducer,
    signUp: signUpReducer,
    snackbar: snackbarReducer,
    users: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    forgotPassword: forgotPasswordReducer,
})

export default rootReducer;