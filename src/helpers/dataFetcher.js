import firebaseApp from '../base'

const fetchData = async (collection) =>{
    const db = firebaseApp.firestore()
    const data = await db.collection(collection).get().then(response => response)
    return data
}

export default fetchData;