import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import RightDrawer from './RightDrawer'


const useStyle = makeStyles({

    SubmitButton: {
        backgroundColor: '#0F73E3',
        color: 'black',
        width: '350px',
        margin: "70px auto",
        letterSpacing: '3px'
    },
    tabCont: {
        display: 'flex',
        justifyContent: 'spaceBetween',
        marginLeft:'30px'
        
      

    },
    tab: {
        fontWeight: 'bold',
        fontSize: '0.9rem',
        justifyContent: 'center',
        textTransform: 'none',
        color: '#505050',
        width:'180px'
    },
    icons: {
        color: '#505050',
        verticalAlign: 'bottom'
    },
    grid: {
        marginTop: '2rem',
       
    }
})


const Main = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (e, value) => { setValue(value) }

    const classes = useStyle();


    return (



        <Container maxWidth="lg" >
            <Grid container 
            // justify='center' 
            
            className={classes.grid} >
                <Tabs className={classes.tabCont} value={value} onChange={handleChange}>
                    <IconButton>
                        <AllInboxIcon className={classes.icons} />
                    </IconButton>
                    <Tab className={classes.tab} label='Principale' value={0}
                       
                    />
                    <IconButton>
                        <GroupIcon className={classes.icons} />
                    </IconButton>
                    <Tab className={classes.tab} label='Social' value={1} />
                    <IconButton>
                        <ShoppingBasketIcon className={classes.icons} />
                    </IconButton>
                    <Tab className={classes.tab} label='Promozioni' value={2} />

                </Tabs>

                {/* <Mail/> */}
              
            </Grid>
            {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
     
      </Container>


    )


}

export default Main
