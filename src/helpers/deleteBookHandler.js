import { projectStorage } from '../base'
import { deleteBook, setSnackbar } from "../redux"


const handleDeleteBook = (
    book,
    setDeleting, setDeleteBookOpen,
    dispatch
    ) =>{
    
    setDeleting(true)
    const dataArray = book.book_image.split('.')
    let type = dataArray[dataArray.length - 1].split('?')
    const storageRef = projectStorage.ref(`books/${book.book_title}.${type[0]}`)

    storageRef.delete()
    .then(() => {
        setDeleting(false)
        dispatch(
            deleteBook({
                id: book.id,
                book_title: book.book_title,
                setDeleteBookOpen
            })
        )
    })
    .catch((error) => {
        console.log(error)
        dispatch(
            setSnackbar(true, 'error', `Error occured: ${error.message_}`)
        )
    })
    return
}

export default handleDeleteBook