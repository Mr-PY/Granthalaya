export const logOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
    
        firebase.auth().signOut().then(() => {
          dispatch({ type: 'LOGOUT_SUCCESS' })
        });
      }
}