import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
  },
  drawer: {
position: 'absolute',
    maxWidth:'30px',
    top:'100px'
    // flexShrink: 0,
    // zIndex:'-1'
  },
  drawerPaper: {
    maxWidth: '70px',
    top:'inherit'
  },
  icons:{
      padding:'0'
  }
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-start',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
// //   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: 0,
//   },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div className={classes.root}>
    
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        elevation='1'
        
        classes={{
          paper: classes.drawerPaper,
        }}
      >
     

       
        <List >
         
            <ListItem  >
            <IconButton className ={classes.icons}>
            <img src={"http://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"} width='60%'/>
            </IconButton>
            </ListItem>
       
        </List>
     
        <List>
          
            <ListItem >
            <IconButton className ={classes.icons}>
            <img src={"http://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"}  width='60%'/>
            </IconButton>
            </ListItem>
         
            <ListItem >
            <IconButton className ={classes.icons}>
            <img src={"  https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"}  width='60%'/>
            </IconButton>
            </ListItem>

            <ListItem >
            <IconButton className ={classes.icons}>
            <img src={" https://www.gstatic.com/companion/icon_assets/contacts_2x.png"}  width='60%'/>
            </IconButton>
            </ListItem>




        </List>

        <IconButton className ={classes.icons}>
            <AddIcon fontSize='medium'/>
        </IconButton>
       
      </Drawer>
    </div> 
  );
}