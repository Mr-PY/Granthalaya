import { setSnackbar } from '../../redux'

export const borrowBook = (data) => {
    return(dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const userRef = db.collection('users').doc(data.userId);
        userRef.update({
            borrowed_list: data.borrowed_list
        }).then(()=>{
            dispatch(
                setSnackbar(true, 'success', `Book ${data.book_title} Borrowed Successfully`)
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available - 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', `Unsuccessful. ${error.message}`)
            )
    })
    }
}

export const reserveBook = (data) => {
    return(dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const userRef = db.collection('users').doc(data.userId);
        userRef.update({
            reserved_list: data.reserved_list
        }).then(()=>{
            dispatch(
                setSnackbar(true, 'success', `Book ${data.book_title} added to Reserve List`)
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available - 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', `Unable to reserve book. ${error.message}`)
            )
        })
    }
}

export const reservedToBorrowed = (data) => {
    return(dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const userRef = db.collection('users').doc(data.user_id);
        userRef.update({
            reserved_list: data.reserved_list,
        }).then(()=>{
            dispatch(
                setSnackbar(true, 'info', `Book ${data.book_title} moved to Borrow List`)
            )
            userRef.update({
                borrowed_list: data.borrowed_list
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', `error occured: ${error.message}`)
            )
    })
    }
}

export const returnBook = (data) => {
    return(dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const userRef = db.collection('users').doc(data.user_id);
        userRef.update({
            borrowed_list: data.borrowed_list,
        }).then(()=>{
            dispatch(
                setSnackbar(true, 'success', `Book ${data.book_title} Returned Successfully`)
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available + 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', `Unsuccessful: ${error.message}` )
            )
    })
    }
}
export const removeReservedBook = (data) => {
    return(dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const userRef = db.collection('users').doc(data.user_id);
        userRef.update({
            reserved_list: data.reserved_list
        }).then(()=>{
            dispatch(
                setSnackbar(true, 'success', `Book ${data.book_title} removed successfully`)
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available + 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', `Error occured: ${error.message}`)
            )
        })
    }
}

export const fetchBooksRequest = () => {
    return{
        type: "FETCH_BOOKS_REQUEST"
    }
}

export const fetchBooksSuccess = (books) => {
    return{
        type: "FETCH_BOOKS_SUCCESS",
        payload: books
    }
}

export const fetchBooksFailure = (error) => {
    return{
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
}

export const fetchBooks =  () => {
    return (dispatch) => {
        dispatch(fetchBooksRequest)


        
    }
}