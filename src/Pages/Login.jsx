import React, { useState } from 'react'
import { 
    Container, 
    Box, 
    Avatar, 
    makeStyles, 
    Typography
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { firebaseAuth, firestore } from '../firebase'
import TestUser from '../Components/TestUser'
import LoginForm from '../Components/LoginForm'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    }
  }));

function Login() {

    const classes = useStyles()
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        console.log(data.email + ' ' + data.password)
        firestore    
            .collection('user')
            .where('email', '==', data.email)
            .get()
            .then( querySnapshot => {
                if(!querySnapshot.empty) {
                    firebaseAuth
                        .signInWithEmailAndPassword(
                            data.email,
                            data.password
                        ).then( res => {
                            console.log(res) 
                            window.location.href = '/'
                    
                        }).catch(err => {
                            console.log(err.code)
                        })
                }else {
                    console.log('invalid email or password')
                }
            })
    };

    return (
        <Container maxWidth="sm">
            <Box className={classes.paper} 
                boxShadow='2' 
                borderRadius={12} 
                p={4}
            >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    Login
                </Typography>
                <LoginForm 
                    submit={submit} 
                    handleInputChange={handleInputChange}
                />
            </Box>
            <TestUser/>            
        </Container>
    )
}

export default Login
