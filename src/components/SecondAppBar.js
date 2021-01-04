import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReplayIcon from '@material-ui/icons/Replay';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';



const SecondAppBar = () => {
    const [checked, setChecked] = React.useState(false);

    return (

        <Container maxWidth="lg" >

            <Grid container justify='space-between'>


                <Grid item>
                    <Grid container justify='flex-start' >

                        <Grid item style={{marginLeft:'30px'}}>
                            <IconButton>
                                <input type="checkbox"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <ReplayIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                {/* second container */}
                <Grid item style={{ marginRight: '50px' }}>
                    <Grid container justify='flex-end'>

                        <Grid item>
                            <IconButton>
                                <Typography style={{ fontSize: '13px', verticalAlign: 'bottom' }}> 1-50 di 3.650</Typography>
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton >
                                <ArrowBackIosIcon />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

            <Divider />

        </Container>

    )
}

export default SecondAppBar
