import React from 'react'
import clsx from 'clsx';
import { AppBar, makeStyles, useTheme, Toolbar, IconButton, Avatar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Dropdawn from '../Components/Dropdawn'
import { firebaseAuth } from '../firebase'
//import Menu from './Menu'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }) 
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        })
      },
      title: {
        flexGrow: 1
      },
      textName: {
        marginRight: 20
      }
    })
)

  
const Navbar = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    
    const user = firebaseAuth.currentUser;
    let email

    if(user !== null){
      email = user.email
    }
    
    return (
        
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => props.handleDrawerOpen()}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          Dashboard
        </Typography>
        <Typography variant="subtitle2" noWrap className={classes.textName}>
          { email }          
        </Typography>
        <Avatar>          
        </Avatar>
        <Dropdawn/>
      </Toolbar>
        
    )
}

export default Navbar
