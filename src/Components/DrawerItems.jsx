import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const DrawerItems = () => {
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

export default DrawerItems
