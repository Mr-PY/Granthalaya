import { borrowBook, setSnackbar } from "../redux/";

const handleBorrow = (id, bookDetails, userBorrowedList, userReservedList, uid, dispatch) => {
    const userBorrowedBookIds = userBorrowedList.map(currentBook => currentBook.book_id)
    const userReservedBookIds = userReservedList.map(currentBook => currentBook.book_id)
  
    if(userBorrowedBookIds.includes(bookDetails.book_id)){
      dispatch(
        setSnackbar(true, 'info', "Book already borrowed") 
      )
      return
    }
    if(userReservedBookIds.includes(bookDetails.book_id)){
      dispatch(
        setSnackbar(true, 'warning', "Can't borrow books in reserve list directly. Check your profile.") 
      )
      return
    }
    const borrowedBook = {
        book_id: bookDetails.book_id,
        book_title: bookDetails.book_title,
        book_author: bookDetails.book_author,
        book_image: bookDetails.book_image,
        borrowed_on: new Date()
      }

    userBorrowedList.push(borrowedBook)
    
    dispatch(
      borrowBook({
        userId: uid,
        book_title: bookDetails.book_title,
        borrowed_list: userBorrowedList,
        book_id: id,
        book_available: bookDetails.book_available,
    }))
  }
export default handleBorrow