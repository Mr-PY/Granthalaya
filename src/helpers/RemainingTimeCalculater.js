const calculateRemainingTime = (userProfile, onDate, type) => {
    const dateInMilliSeconds = onDate.seconds  ? onDate.seconds * 1000 : 0
    
    const getDays = (1000 * 60 * 60 * 24)
    const borrowDaysLimit = 60

    const getHrs  = (1000 * 60 * 60)
    const reserveHrsLimit = 24

    let timeRemaining = 0
    
    if(userProfile.isLoaded){
        if(type === "borrowed"){
            const timeElapsed  = (Date.now() - dateInMilliSeconds) / getDays
            timeRemaining = borrowDaysLimit - timeElapsed
        }
        else{
            const timeElapsed  = (Date.now() - dateInMilliSeconds) / getHrs
            timeRemaining = reserveHrsLimit - timeElapsed
        }
        return timeRemaining<= 0 ? 0 : Math.floor(timeRemaining)
    }
    return 0
}


export default calculateRemainingTime