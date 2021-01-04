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
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import StarIcon from '@material-ui/icons/Star';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import NoteIcon from '@material-ui/icons/Note';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 0,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
    },
    drawer: {
        position: 'absolute',
        maxWidth: '30px',
        top: '100px'
        // flexShrink: 0,
        // zIndex:'-1'
    },
    drawerPaper: {
        width: '50px',
        top: '64px',
        borderRight: '1px transparent solid',
        borderTop: '1px transparent solid'

    },
    icons: {
        padding: '0'
    },
    
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
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div className={classes.root}>


            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                elevation='1'

                classes={{
                    paper: classes.drawerPaper,
                }}
            >



                <List>

                    <ListItem  >
                        <IconButton className={classes.icons}>
                            <AddIcon className={classes.iconsHeader} style={{border:'1px grey solid', borderRadius:'20px', padding:'2px'}} />
                        </IconButton>
                    </ListItem>

                </List>

                <List style={{marginTop:'15px'}}>

                    <ListItem >
                    <IconButton className={classes.icons}>
                    <StyledBadge badgeContent={2} color="secondary">

 
                        <AllInboxIcon className={classes.iconsHeader} />
                        </StyledBadge>
                        </IconButton>

                    </ListItem>

                    <ListItem >
                        <IconButton className={classes.icons}>
                            <StarIcon className={classes.iconsHeader} />
                        </IconButton>
                    </ListItem>

                    <ListItem >
                        <IconButton className={classes.icons}>
                            <QueryBuilderIcon className={classes.iconsHeader} />
                        </IconButton>
                    </ListItem>
                    <ListItem >
                        <IconButton className={classes.icons}>
                            <DoubleArrowIcon className={classes.iconsHeader} />
                        </IconButton>
                    </ListItem>  <ListItem >
                        <IconButton className={classes.icons}>
                            <PlayArrowIcon className={classes.iconsHeader} />
                        </IconButton>
                    </ListItem>  <ListItem >
                        <IconButton className={classes.icons}>
                            <NoteIcon className={classes.iconsHeader} />
                        </IconButton>
                    </ListItem>
                    <ListItem >
                        <IconButton className={classes.icons}>
                            <DeleteIcon className={classes.iconsHeader} />
                        </IconButton>
                    </ListItem>


                   
                </List>
                
            </Drawer>
        </div>
    );
}