import React from 'react';
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/Star';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';


const useStyle = makeStyles(theme => ({
    mailContainer: {
        [theme.breakpoints.down('md')]: {
            // minWidth:'1000px',
            justifyContent: 'center',
            // flexDirection:'column',
        }

    },
    mittente: {
        [theme.breakpoints.down('md')]: {
            // marginTop: '20px',
            // padding: '10px',
            fontSize: '13px',
        }
    },
    mailText: {
        [theme.breakpoints.down('md')]: {
            color: '#505050',
            fontSize: '13px',
            // verticalAlign:'bottom',
            // justifyContent:'center'
            // paddingTop:'30px'
        }
    },

}))


export default function Checkbox() {
    const [checked, setChecked] = React.useState(false);



    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'))
    const matches2 = useMediaQuery(theme.breakpoints.down('md'))
    const matches3 = useMediaQuery(theme.breakpoints.up('lg'))


    return (


        <Container maxWidth="lg" >
            <Divider />
            <Grid container justify='center' spacing={8} style={{ flexWrap: 'nowrap'}}>
         
                <Grid item >
                    <IconButton 
                    style={{marginLeft: matches?'30px':undefined}}>
                        <input type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </IconButton>
                </Grid>

                <Hidden mdDown>
                    <Grid item>
                        <IconButton className={classes.starIcon}>
                            <StarIcon />
                        </IconButton>

                    </Grid>
                </Hidden>
                <Hidden mdDown>
                    <Grid item>
                        <IconButton className={classes.arrowIcon}>
                            <DoubleArrowIcon />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid container
                    spacing={8}
                    className={classes.mailContainer}
                >


                    <Grid item 
                    style={{marginTop: '50px' }}
                      
                    >
                        <Typography

                            className=
                            {classes.mittente}
                        >
                            Zalando Team
                        </Typography>
                    </Grid>


                    <Grid item 
                     style={{marginTop: '50px' }}
                    >
           
                        <Typography
                            className={classes.mailText}
                            // style={{ marginTop: matches2?'0':'0', marginBottom: matches2?'0':'0', padding:'0'}}
                            >
                            Roberto, la tua opinione per noi conta
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </Container >


    )
}


