import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { firebaseAuth } from '../firebase'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'


const Auth = (props) => {
    
   /*  const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if(firebaseAuth.currentUser){
            console.log('existe')
            console.log(props)
            setUser(firebaseAuth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/login')
        }
    }, [props.history]) */

    /* const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if(firebaseAuth.currentUser){
            console.log('existe')
            console.log(props)
            setUser(firebaseAuth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/login')
        }
    }, [props.history])
 */
    /* return (
        <div className="mt-5">
            <h3 className="text-center">Ruta protegida</h3>
            {
                user && (
                    <p>{user.email}</p>
                )
            }
        </div>
    ) */

    const [loggedIn, setloggedIn] = useState(null)

    firebaseAuth.onAuthStateChanged( user => {
        if(user) {
            setloggedIn(true)
        }else {
            setloggedIn(false)
        }
    })
    

    if (props.nonAuthenticated) {
        if (loggedIn === null) {
            return 'Loading...'
        }else if (!loggedIn){
            return props.children
        }else if (loggedIn) {
            return <Redirect to='/' />
        }
    }else {
        if (loggedIn === null) {
            return 'Loading...'
        }else if (loggedIn){
            return props.children
        }else if (!loggedIn) {
            return <Redirect to='/login' />
        }
    }
}

export default withRouter(Auth)
