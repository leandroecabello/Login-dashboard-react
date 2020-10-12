import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme, Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
 
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }
}))

const Aside = (props) => {
    const classes = useStyles()
    //const theme = useTheme();
    return (
        
            <List>
            {['Inbox', 'Starred'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{
                    index % 2 === 0 
                    ? <InboxIcon /> 
                    : <MailIcon />
                }
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>   
    )
}

export default Aside
