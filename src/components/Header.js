import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import logoGmail from '../logo-gmail.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import NoteIcon from '@material-ui/icons/Note';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#505050',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',

        },
    },
    menuIcon: {
        color: '#505050'
    },
    mailIcon: {
        color: '#505050',
        // marginLeft:'-25px',
        fontSize: '40px'
    },
    logoMailIcon: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        marginLeft: 'auto',
        marginRight: '300px',

        maxHeight: '35px',
        backgroundColor: '#f2f2f2',
        padding: '0.5rem 20rem 0.5rem 1.5rem',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        iconsHeader: {
            // verticalAlign: 'bottom',
            padding: '0',
            margin: '0',
            // width:'20px'
        },
        scrivi: {
            // '&:hover': {
            '&:hover': {
                backgroundColor: 'transparent'

            }
            //   },
        },
        scriviHover: {
            '&:hover': {
                border: '1px grey solid'

            },
            drawerPaper: {

                maxWidth: '70px',
                padding: '0',
                margin: '0',
                width: '20px',
                //   borderRight:'20px black solid'


            },
hidd:{
    
}
        }

    }
}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const [openDrawer, setOpenDrawer] = React.useState(false)
    // const [openMenu, setOpenMenu] = React.useState(false)
    const [scrivi, setScrivi] = React.useState(false)


    const scritta = (
        <ListItemText >
            {/* <Typography style={{ fontWeight: 'bold' }}>
                Scrivi
   </Typography> */}
        </ListItemText>
    )




    const input =
        (
            <React.Fragment>
                <div className={classes.search}
                >
                    <div className={classes.searchIcon}
                        style={{ display: 'flex' }}
                    >
                        <SearchIcon alt='search'
                            style={{
                                display: 'flex', 
                                verticalAlign: 'bottom', 
                                fontSize: '2em', 
                                marginRight: '0.5em', 
                                color: '#666'
                            }} />

                        <InputBase
                            // style={{ minWidth:'300px'}}
                            placeholder="Cerca nella posta"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Cerca nella posta' }}
                        />
                    </div>
                </div>
            </React.Fragment>
        )

    // const drawer = (
    //     <React.Fragment>
    //         <SwipeableDrawer
    //             variant="permanent"
    //             anchor="left"

    //             classes={{
    //                 paper: classes.drawerPaper,
    //             }}
    //             disableBackdropTransition={!iOS} disableDiscovery={iOS}
    //             open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>


    //             <List classes={{
    //                 paper: classes.drawerPaper
    //             }}
    //             >

    //                 <ListItem style={{ borderRadius: '50px' }} className={classes.scriviHover}>
    //                     {/* <IconButton
    //                         style={{ padding: '0.5rem', margin: '-10px' }}
    //                         className={classes.logoMailIcon}
    //                     >
    //                      */}
    //                     {/* <Fab size="small" color="secondary" aria-label="add"  variant='extended'
    //                         // className={classes.margin}
    //                         style={{ fontSize: '2rem' , padding:'0', margin:'0'}} */}

    //                     {/* > */}
    //                     {/* <AddIcon                             style={{ fontSize: '2rem', marginRight:'10px' , padding:'0', margin:'0'}} */}
    //                     {/* </Fab> */}
    //                     <IconButton style={{ margin: 'auto', padding: '0' }}>
    //                         <AddCircleIcon style={{ fontSize: '1.7rem' }}
    //                         //  onMouseOver={() => setScrivi(!scrivi)}
    //                         />
    //                     </IconButton>
                     
    //                     {scrivi ? null : scritta}

    //                     {/* </IconButton > */}

    //                 </ListItem>

    //                 <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     {/* <ListItemText> */}
    //                     <IconButton style={{ margin: '0', padding: '0' }}>
    //                         <AllInboxIcon
    //                         //  className={classes.iconsHeader}

    //                         />
    //                     </IconButton>
    //                     <Hidden mdUp className={classes.hidd}>
    //                         Posta in arrivo
    //                 </Hidden>
    //                     {/* </ListItemText> */}
    //                 </ListItem>

    //                 <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     <ListItemText>
    //                         <IconButton style={{ margin: '0', padding: '0' }}>
    //                             <StarIcon />
    //                         </IconButton>
    //                         <Hidden mdUp>
    //                             Speciali
    //                 </Hidden>
    //                     </ListItemText>


    //                 </ListItem>

    //                 <ListItem className={classes.iconsHeader}
    //                 //   component={Link} to='/'
    //                 >
    //                     <ListItemText className={classes.iconsHeader}>
    //                         <IconButton style={{ margin: '0', padding: '0' }}>

    //                             <QueryBuilderIcon className={classes.iconsHeader} />
    //                         </IconButton>
    //                         <Hidden mdUp>
    //                             Posticipati
    //                 </Hidden>
    //                     </ListItemText>
    //                 </ListItem>


    //                 <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     <ListItemText>
    //                         <IconButton style={{ margin: '0', padding: '0' }}>
    //                             <DoubleArrowIcon />
    //                         </IconButton>
    //                         <Hidden mdUp>
    //                             Importanti
    //                 </Hidden>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     <ListItemText>
    //                         <IconButton style={{ margin: '0', padding: '0' }}>

    //                             <PlayArrowIcon />
    //                         </IconButton>
    //                         <Hidden mdUp>
    //                             Inviati
    //                 </Hidden>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     <ListItemText>
    //                         <IconButton style={{ margin: '0', padding: '0' }}>
    //                             <NoteIcon />
    //                         </IconButton>
    //                         <Hidden mdUp>
    //                             Bozze
    //                 </Hidden>
    //                     </ListItemText>
    //                 </ListItem>
    //                 {/* <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     <ListItemText>
    //                     <Hidden mdUp>
    //                         Sent
    //                         </Hidden>
    //              </ListItemText>
    //                 </ListItem>
    //                  <ListItem
    //                 //  component={Link} to='/'
    //                 >
    //                     <ListItemText>
    //                         <IconButton className={classes.iconsHeader}>

    //                             <DeleteIcon />
    //                         </IconButton>
    //                         <Hidden mdUp>
    //                 Cestino
    //                 </Hidden>
    //              </ListItemText>
    //                 </ListItem> */}
    //             </List>
    //         </SwipeableDrawer>
    //     </React.Fragment>

    // )

    return (

        <div className={classes.root} >

            <AppBar position='static' color='transparent' style={{ boxShadow: 'none'
             }}>
                <Toolbar >

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>

                    <IconButton className={classes.logoMailIcon}>
                        <img src={logoGmail} />
                        {/* <MailOutlineIcon  className={classes.mailIcon}/> */}
                    </IconButton>

                    {/* {drawer} */}

                    {
                        matches ? null : input
                    }
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <HelpOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Toolbar>
                <Divider />
            </AppBar>

        </div>
    );
}