import { setSnackbar } from '../../redux'

export const addBook =  (book) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const db = getFirestore();
        const bookRef = db.collection('books').doc();
        bookRef.set({
            book_added_on: book.book_added_on,
            book_available: book.book_available,
            book_author: book.book_author,
            book_bar_code: book.book_bar_code,
            book_department: book.book_department,
            book_description: book.book_description,
            book_image: book.book_image,
            book_rack: book.book_rack,
            book_row: book.book_row,
            book_title: book.book_title,
            book_total: book.book_total,
        }
        ).then(()=>{
            dispatch({ type: 'ADD_BOOK', payload: book })
            dispatch(
                setSnackbar(true, 'success', `Book ${book.book_title} Added Successfully`)
            )
            book.setAddBookOpen(false)
            window.location.reload()
        }).catch((error)=>{
            dispatch({ type: 'ADD_BOOK_ERROR', payload: error })
            dispatch(
                setSnackbar(true, 'error', `Error occured, ${error.message}`)
            )
        })
    }
}

export const editBookDetails = (data) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const db = getFirestore();
        const bookRef = db.collection('books').doc(data.id);
        bookRef.update({
            book_author: data.book_author,
            book_bar_code: data.book_bar_code,
            book_description: data.book_description,
            book_image: data.book_image,
            book_rack: data.book_rack,
            book_row: data.book_row,
            book_title: data.book_title,
            book_total: data.book_total,
        }
        ).then(()=>{
            dispatch(
                setSnackbar(true, 'success', "Book Details Updated Successfully")
            )
            window.location.reload()
        }).catch((error)=>{
            dispatch(
                setSnackbar(true, 'error', `Error occured: ${error.message}`)
            )
        })
    }
}

export const deleteBook = (data) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const db = getFirestore();
        const bookRef = db.collection('books').doc(data.id);
        bookRef.delete()
        .then(()=>{
            dispatch(
                setSnackbar(true, 'success', `Book ${data.book_title} deleted Successfully`)
            )
            window.location.reload()
        }).catch((error)=>{
            console.log(error)
            dispatch(
                setSnackbar(true, 'error', `Error occured: ${error.message}`)
            )
        })
    }
}