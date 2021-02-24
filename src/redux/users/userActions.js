import { setSnackbar } from "../../redux";

export const AssignBookToUser = () => {};

export const modifyuser = () => {};

export const modifyUserProfile = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //firebase Stuff
    const db = getFirestore();
    const userRef = db.collection("users").doc(data.id);
    userRef
      .update({
        user_name: data.user_name,
        user_phone: data.user_phone,
        user_image: data.user_image,
      })
      .then(() => {
        dispatch(setSnackbar(true, "success", "Profile Updated Successfully"));
        data.setEditDetailsOpen(false);
      })
      .catch((error) => {
        dispatch(setSnackbar(true, "error", `Error occured: ${error.message}`));
      });
  };
};

export const updatePassword = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //firebase Stuff
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      data.oldPassword
    );
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user
          .updatePassword(data.newPassword)
          .then(() => {
            dispatch(
              setSnackbar(true, "success", "Password Updated Successfully")
            );
            data.setLoading(false);
            data.setChangePasswordOpen(false);
          })
          .catch((error) => {
            dispatch(
              setSnackbar(
                true,
                "error",
                `Unable to update password: ${error.message}`
              )
            );
          });
        data.setLoading(false);
      })
      .catch((error) => {
        dispatch(setSnackbar(true, "error", "Invalid Password"));
        data.setLoading(false);
      });
  };
};
