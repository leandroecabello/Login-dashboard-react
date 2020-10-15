import React from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        textAlign: 'center'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

const LoginForm = (props) => {
    const classes = useStyles()

    return (
        <form className={classes.form} noValidate onSubmit={props.submit}>
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
                onChange={props.handleInputChange} 
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
                onChange={props.handleInputChange}
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
    )
}

export default LoginForm
