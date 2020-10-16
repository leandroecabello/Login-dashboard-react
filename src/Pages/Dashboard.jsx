import React, { useState } from 'react';
import clsx from 'clsx';
import { 
  makeStyles, 
  Drawer,
  CssBaseline,
  Divider,
} from '@material-ui/core';
import Navbar from '../Components/Navbar'
import Main from '../Components/Main';
import DrawerItems from '../Components/DrawerItems'
import { firestore } from '../firebase';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
      setOpen(!open);
  };
      
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar handleDrawerOpen={handleDrawerOpen} open={true}/>
      <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
              [classes.drawerOpen]: !open,
              [classes.drawerClose]: open,
          })}
          classes={{
              paper: clsx({
                  [classes.drawerOpen]: !open,
                  [classes.drawerClose]: open,
              }),
          }}
      >
        <Divider className={classes.toolbar}/>
          <DrawerItems/>
        <Divider/> 
      </Drawer> 
      <Main/>
    </div>
  )
}

export default Dashboard
