import { projectStorage } from '../base'
import { editBookDetails, setSnackbar } from "../redux"

const handleEditBookSubmit = (
    id, barCode, title, author, row, rack, units, description, 
    url, image, book,
    setUploading, setLoading, setProgress, setUrl, setEditBookOpen,
    setBarCodeError, setTitleError,  setAuthorError, setRowError,
    setRackError, setUnitsError, setDescriptionError, setUploadError,
    dispatch, clearInputs, clearErrors
    ) =>{

    clearErrors()

    if(!barCode){
        setBarCodeError("BarCode can't be empty")
        return
    }
    if(!title){
        setTitleError("Title can't be empty")
        return
    }
    if(!author){
        setAuthorError("Author name is empty")
        return
    }
    if(!row){
        setRowError("Row can't be empty")
        return
    }
    if(!rack){
        setRackError("Rack can't be empty")
        return
    }
    if(!units){
        setUnitsError("Total can't be empty")
        return
    }
    if(!description){
        setDescriptionError("Description can't be empty")
        return
    }

    if(
        barCode === book.book_bar_code
        && title === book.book_title 
        && author === book.book_author 
        && row === book.book_row 
        && rack === book.book_rack 
        && units === book.book_total 
        && url === book.book_image
    ){
        dispatch(
            setSnackbar(true, 'info', 'Nothing to update.')
        )
        return
    }

    clearInputs()
    setLoading(true)

    if( image && image.name && url !== book.book_image ){
        const dataArray = image.name.split('.')
        let type = dataArray[dataArray.length - 1]
        const storageRef = projectStorage.ref(`books/${title}.${type}`)
        setUploading(true)
        storageRef.put(image).on(
            'state_changed',
            snapshot => {
                let progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                setUploadError(error.code)        
            },
            () => {
                storageRef.getDownloadURL()
                .then(
                    url => {
                        setUrl(url)
                        setUploading(false)
                        dispatch(
                            editBookDetails({
                                id: id,
                                book_bar_code: barCode,
                                book_title: title,
                                book_author: author,
                                book_row: row,
                                book_rack: rack,
                                book_total: units,
                                book_description: description,
                                book_image: url,
                            })
                      )  
                    }
                )
            }
        )
        return
    }

    setLoading(false)
    dispatch(
        editBookDetails({
            id: id,
            book_bar_code: barCode,
            book_title: title,
            book_author: author,
            book_row: row,
            book_rack: rack,
            book_total: units,
            book_description: description,
            book_image: url,
        })
    )
}

export default handleEditBookSubmit