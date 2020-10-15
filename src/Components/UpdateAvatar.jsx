import { firebaseAuth, storage, firestore } from '../firebase'

export const actualizarFotoAccion = (imagen) => async (dispatch, getState) => {
    
    dispatch({
        //type: LOADING
    })
    const {user} = getState().usuario

    try {

        const refImagen = storage.ref().child(user.email).child('foto perfil')
        await refImagen.put(imagen)
        const urlDescarga = await refImagen.getDownloadURL()

        await firestore.collection('user').doc(user.email).update({
            photoURL: urlDescarga
        })

        const usuarioEditado = {
            ...user,
            photoURL: urlDescarga
        }
        dispatch({
            //type: USUARIO_EXITO,
            payload: usuarioEditado
        })
        localStorage.setItem('usuario', JSON.stringify(usuarioEditado))

        
    } catch (error) {
        console.log(error)
    }

}

/* // subir imagen
const [error, setError] = React.useState(false)

const seleccionarArchivo = (e) => {
    console.log(e.target.files[0])   
    const imagen = e.target.files[0]

    if(imagen === undefined){
        console.log('sin imagen')
        return
    }

    if(imagen.type === 'image/jpeg' || imagen.type === 'image/png'){
        dispatch(actualizarFotoAccion(imagen))       
        setError(false) 
        }else{
        console.log('archivo no válido')
        setError(true)
        return
        }
} */
/* 
<div className="custom-file">
    {
        error &&
        <div className="alert alert-warning">
            Foto en .png o .jpg
        </div>
    }
    <input 
        type="file" 
        className="custom-file-input" 
        id="validatedCustomFile" 
        onChange={e => seleccionarArchivo(e)}
        required 
        disabled={loading}
        style={{display:'none'}}
        />
    <label 
        className={loading ? "btn btn-dark disabled" : "btn btn-dark"}
        htmlFor="validatedCustomFile"
        >
            Editar foto perfil
    </label>
</div> */