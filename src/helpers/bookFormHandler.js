import {projectStorage} from '../base';
import { addBook } from "../redux/";

const handleAddBookSubmit = (
    bookId, title, author, image, url, setProgress, setUrl, setUploading,
    department, rack, row, totalUnits, description, barCode,
    setTitleError, setAuthorError, setImageError, setUploadError,
    setDepartmentError, setRackError, setRowError,
    setTotalUnitsError, setDescriptionError, setBarCodeError,
    dispatch, clearInputs, clearErrors
    ) => {
    
    const unitsPattern = /^[0-9]+$/;
    const storageRef = projectStorage.ref(image.name);

    const id = () =>{
        if(bookId < 10){
            return `B00${bookId}`
        }
        if(bookId<100){
            return `B0${bookId}`
        }
        return`B${bookId}`
    }

    clearErrors();
    
    if(title.length ===0){
        setTitleError("Title can't be empty");
        return;
    }
    if(title.length < 3){
        setTitleError("Title not valid");
        return;
    }
    if(author.length ===0){
        setAuthorError("Author can't be empty");
        return;
    }
    if(!image){
        setImageError("Image can't be empty");
        return;
    }
    
    if(department.length ===0){
        setDepartmentError("Department can't be empty");
        return;
    
    }
    if(rack.length ===0){
        setRackError("Rack can't be empty");
        return;
    
    }
    if(row.length ===0){
        setRowError("Row can't be empty");
        return;
    }
    if(totalUnits.length ===0){
        setTotalUnitsError("Total can't be empty");
        return;
    }
    if(!totalUnits.match(unitsPattern) || totalUnits.length >4){
        setTotalUnitsError("Invalid Value");
        return;
    }if(barCode.length ===0){
        setBarCodeError("Bar Code can't be empty");
        return;
    }
    if(description.length ===0){
        setDescriptionError("Description can't be empty");
        return;
    }if(description.length <10){
        setDescriptionError("Provide valid Description");
        return;
    }

    clearInputs();
    setUploading(true);
    storageRef.put(image).on(
        'state_changed',
        snapshot => {
            let progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
        },
        error => {
            setUploadError(error.code);        
        },
        () => {
            storageRef.getDownloadURL()
            .then(
                url => {
                    console.log("getting url now")
                    setUrl(url)
                    setUploading(false);
                    dispatch(
                        addBook({
                            book_id: id(),
                            book_title: title,
                            book_author: author,
                            book_image: url,
                            book_department: department,
                            book_rack: rack,
                            book_row: row,
                            book_total: totalUnits,
                            book_available: totalUnits,
                            book_description: description,
                            book_added_on: new Date(),
                            book_bar_code: barCode,
                        }));
                }
            )
        }
    )
};

export default handleAddBookSubmit;