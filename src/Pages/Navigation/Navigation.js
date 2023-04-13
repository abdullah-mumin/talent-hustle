import React, { useContext, useEffect, useState } from 'react';
import { AppBar, CssBaseline, makeStyles, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { Grid, } from '@mui/material';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavDrawer from '../Navigation/Drawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: 'flex',
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: '1',
        marginTop: '8px'
    },
    link: {
        textDecoration: 'none',
        marginTop: '-5px',
        color: 'black',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        '&:hover': {
            color: 'red',
        },
    },
    link1: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '-5px',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        '&:hover': {
            color: 'red',
        },
    },
    link4: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '-5px',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        '&:hover': {
            color: 'red',
        },
    },
    link5: {
        textDecoration: 'none',
        marginTop: '10px',
        color: 'black',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        '&:hover': {
            color: 'red',
        },
    },
    link7: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '10px',
        fontWeight: 700,
        paddingRight: '20px',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        '&:hover': {
            color: 'red',
        },
    },
    link8: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '10px',
        fontWeight: 700,
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        '&:hover': {
            color: 'red',
        },
    },
}));

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };

    const handleLogoutUser = () => {
        // logoutUser();
        navigate('/');
        window.location.reload();
    }

    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (userData) {
    //             const updateInfo = JSON.parse(localStorage.getItem('userData'));
    //             setUserData(updateInfo || []);
    //         }
    //     }, 200)
    //     return () => clearInterval(interval);
    // }, []);


    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <AppBar style={{ background: 'white', height: '70px', width: '100%' }} position='sticky'>
                <CssBaseline>
                    <Toolbar>
                        <Link to='/' className={classes.logo}>
                            Job Hunt
                            {/* <img style={{ width: '190px', height: '50px', marginLeft: '20px' }} src={logo} alt="Trektil" /> */}
                        </Link>

                        {isMobile ? (
                            <NavDrawer />
                        ) : (
                            <Grid
                                container
                                display='flex'
                                alignItems='center'
                                justifyContent='flex-end'
                                textAlign='right'
                                className={classes.navlinks}>
                                <Grid item md={6} display='flex' justifyContent='flex-start' marginTop='10px'>
                                    {/* <NavLink to='/tour-plan' style={{ textDecoration: 'none' }} className={classes.link1}>
                                                    {t('nOption1')}
                                                </NavLink> */}
                                    <NavLink to='/' style={{ textDecoration: 'none' }} className={classes.link}>
                                        HOME
                                    </NavLink>
                                    <NavLink to='/about' style={{ textDecoration: 'none' }} className={classes.link}>
                                        ABOUT
                                    </NavLink>
                                    <NavLink to='/jobs' style={{ textDecoration: 'none' }} className={classes.link4}>
                                        JOBS
                                    </NavLink>
                                    <NavLink to='/news' style={{ textDecoration: 'none' }} className={classes.link4}>
                                        NEWS
                                    </NavLink>
                                    <NavLink to='/contact' style={{ textDecoration: 'none' }} className={classes.link4}>
                                        CONTACT
                                    </NavLink>
                                </Grid>
                                <Grid item md={6} display='flex' justifyContent='flex-end'
                                    marginTop='10px'>
                                    <NavLink to='/' style={{ textDecoration: 'none' }} className={classes.link5}>
                                        Login
                                    </NavLink>
                                    <NavLink to='/' style={{ textDecoration: 'none' }} className={classes.link7}>
                                        Register
                                    </NavLink>
                                    {/* <Grid
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Typography sx={{ fontWeight: '600', color: '#646464', fontSize: '16px', marginTop: '4px', }}>{languageName}</Typography>
                                        <ExpandMoreIcon onClick={handleOpen} style={{ color: '#646464', marginTop: '8px', }} />
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        )}
                    </Toolbar>
                </CssBaseline>
            </AppBar>
        </>
    );
};

export default Navigation;