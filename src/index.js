import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./redux/rootReducer"
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { firebase } from "./base";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, /* preloadedState, */ 
  composeEnhancers(  
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(firebase)
)
);

const config = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (
    <div className="backdrop-container">
      <Backdrop open={true}>
      <CircularProgress color="secondary" />
      </Backdrop>
    </div>
);
      return children
}

ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded className='app-container'>
        <App /> 
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
