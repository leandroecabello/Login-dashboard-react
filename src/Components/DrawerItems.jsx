import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Dashboard from '@material-ui/icons/Dashboard';
import Edit from '@material-ui/icons/Edit';

const DrawerItems = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <Dashboard /> 
                </ListItemIcon>
                <ListItemText>
                    Dashboard
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Edit /> 
                </ListItemIcon>
                <ListItemText>
                    Edit
                </ListItemText>
            </ListItem>
            {/* {['Dashboard', 'Edit'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{
                        index % 2 === 0 
                        ? <Dashboard /> 
                        : <Edit />
                    }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))} */}
        </List>
    )
}

export default DrawerItems
