import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
        marginBottom: '10px'
    },
    text: {
        padding: '4px'
    }
}))

const TestUser = () => {
    const classes= useStyles()

    return (
        <Box
            className={classes.paper} 
            boxShadow='2' 
            borderRadius={12} 
            p={2}
            m={4}
        >
            <Typography variant="h4" className={classes.title}>
                Test
            </Typography>
            <Typography varian="h6" className={classes.text}>
                user: jhondoe@mail.com
            </Typography>
            <Typography varian="h6" className={classes.text}>
                password: jhon123
            </Typography>
        </Box>
    )
}

export default TestUser
