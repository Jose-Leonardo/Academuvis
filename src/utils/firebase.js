const firebase = require('firebase/app')
//*1-accede a los datos almacenados 2-Quiero publicar en la miltimedia 3-nos permite la referencia 4-ayuda hacer una referencia
const { getStorage, uploadBytes, ref, getDownloadURL } = require('firebase/storage')

const config = require('../../config').api.firebase

const firebaseApp = firebase.initializeApp(config) //* la conexion con firebase

const storage = getStorage(firebaseApp)

//? peliculas

const addToFirebaseMovieVideo = async (file) => {
    const movieRef = ref(storage, `movieVideos/${Date.now()}-${file.originalname}`)//*ruta donde se va aguardar el archivo

    await uploadBytes(movieRef, file.buffer)//* publicar el archivo
    const movieUrl = await getDownloadURL(movieRef) //*obtiene la url del archivo para entrar en el
    return movieUrl
}

//? cover pelicula

const addToFirebaseMovieCover = async (file) => {
    const movieRef = ref(storage, `movieCover/${Date.now()}-${file.originalname}`)

    await uploadBytes(movieRef, file.buffer)
    const movieUrl = await getDownloadURL(movieRef)
    return movieUrl
}

const addToFirebaseSerieSeasonCover = async (file, name, season) => {
    const movieRef = ref(storage, `Serie/${name}/${season}/${Date.now()}-${file.originalname}`)

    await uploadBytes(movieRef, file.buffer)
    const movieUrl = await getDownloadURL(movieRef)
    return movieUrl
}

//? Serie - Name - Temporada - Cover
//? Serie - Name - Temporada - Capitulo



module.exports = {
    addToFirebaseMovieVideo
}
