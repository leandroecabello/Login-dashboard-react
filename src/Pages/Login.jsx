import React, { useState } from 'react'
import { 
    Container, 
    Box, 
    Avatar, 
    makeStyles, 
    Typography,
    TextField,
    Button
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { firebaseAuth, firestore } from '../firebase'
import TestUser from '../Components/TestUser'

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
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
      textAlign: 'center'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
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

    const submit = e => {
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
    }

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
                <form className={classes.form} noValidate onSubmit={submit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInputChange} 
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        disableElevation
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </form>
            </Box>
            <TestUser/>            
        </Container>
    )
}

export default Login
