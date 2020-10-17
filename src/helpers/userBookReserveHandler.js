import { reserveBook, setSnackbar } from "../redux";

const handleReserve = (id, bookDetails,  userBorrowedList, userReservedList, uid, dispatch) => {
    const userReservedBookIds = userReservedList.map(currentBook => currentBook.book_id)
    const userBorrowedBookIds = userBorrowedList.map(currentBook => currentBook.book_id)
  
    if(userReservedBookIds.includes(bookDetails.book_id)){
      dispatch(
        setSnackbar(true, 'info', "Book already reserved") 
      )
      return
    }
    if(userBorrowedBookIds.includes(bookDetails.book_id)){
      dispatch(
        setSnackbar(true, 'warning', "Can't reserve borrowed books...") 
      )
      return
    }

    const reservedBook = {
        book_id: bookDetails.book_id,
        book_title: bookDetails.book_title,
        book_image: bookDetails.book_image,
        reserved_on: new Date()
      }

    userReservedList.push(reservedBook)
        dispatch(
          reserveBook({
            userId: uid,
            reserved_list: userReservedList,
            book_id: id,
            book_available: bookDetails.book_available,
        }))
  }
export default handleReserve