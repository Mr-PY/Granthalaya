import { setSnackbar } from '../../redux'
export const addBook =  (book) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const db = getFirestore();
        const bookRef = db.collection('books').doc();
        bookRef.set({
            book_id: book.book_id,
            book_title: book.book_title,
            book_author: book.book_author,
            book_department: book.book_department,
            book_rack: book.book_rack,
            book_row: book.book_row,
            book_total: book.book_total,
            book_available: book.book_available,
            book_description: book.book_description,
            book_image: book.book_image,
            book_added_on: book.book_added_on,
            book_bar_code: book.book_bar_code
        }
        ).then(()=>{
            dispatch({ type: 'ADD_BOOK', payload: book })
            dispatch(
                setSnackbar(true, 'success', `Book ${book.book_title} Added Successfully`)
                )
            }).catch((error)=>{
                dispatch({ type: 'ADD_BOOK_ERROR', payload: error })
                dispatch(
                    setSnackbar(true, 'success', "Unable to add book. Try again")
                )
        })
    }
}

export const borrowBook = (data) => {
    return(dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const userRef = db.collection('users').doc(data.userId);
        userRef.update({
            borrowed_list: data.borrowed_list
        }).then(()=>{
            dispatch(
                setSnackbar(true, 'success', `Book ${data.book_title} Added Successfully`)
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available - 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', "Unsuccessful. Try again later")
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
                setSnackbar(true, 'success', "Book added to Reserve List")
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available - 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', "Unsuccessful. Try again later")
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
                setSnackbar(true, 'info', "Book moved to Borrow List")
            )
            userRef.update({
                borrowed_list: data.borrowed_list
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', "Unsuccessful. Try again later")
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
                setSnackbar(true, 'error', "Unsuccessful. Try again later")
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
                setSnackbar(true, 'success', "Book removed successfully")
            )
            const bookRef = db.collection('books').doc(data.book_id);
            bookRef.update({
                book_available: data.book_available + 1
            })
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', "Unsuccessful. Try again later")
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