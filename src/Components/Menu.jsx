import React from 'react'
import clsx from 'clsx';
import { Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({ 
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
}))  

const Menu = (props) => {
    const classes = useStyles();
    return (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                })}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Mini variant drawer
            </Typography>
        </Toolbar>
    )
}

export default Menu
