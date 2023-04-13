import { Box, Card, CardMedia, Container, Grid, Link } from '@mui/material';
import React from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {

    return (
        <footer style={{ marginTop: '100px' }}>
            <Box
                px={{ xs: 3, sm: 10 }}
                // py={{ xs: 5, sm: 8 }}
                sx={{ bgcolor: '#383648', opacity: '100%', backgroundImage: 'linear-gradient(to right, #383648, #7668E1)' }}
                color="white"
            >
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '600', fontSize: 25, marginBottom: 2 }}>
                                JOBHUNT
                            </Box>
                            <Box sx={{ fontSize: 15, marginBottom: 2 }}>
                                Job Searching Just Got Easy.
                                Use JobHUNT to run a hiring
                                site and earn money in the
                                process!
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                Site Map
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Account
                                </Link>
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Manage Jobs
                                </Link>
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Blog
                                </Link>
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Post a Job
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Terms & Service
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                Recent News Articles
                            </Box>
                            <Box sx={{ fontSize: 15, marginBottom: 2 }}>
                                Lorem ipsum dolor sit amet
                                consectetur. Orci tristique
                                arcu diam orci nulla. Pulvinar
                                in quam aliquam malesuad
                                in faucibus tristique.
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                JobHunt Offices
                            </Box>
                            <Box sx={{ fontSize: 15, marginBottom: 1 }}>
                                Madison Avenue,
                            </Box>
                            <Box sx={{ fontSize: 15, marginBottom: 1 }}>
                                Suite F-2 Manhattan,
                            </Box>
                            <Box sx={{ fontSize: 15 }}>
                                New York 10282
                            </Box>
                            {/* <Box
                                display='flex'
                                alignItems='center'
                                marginBottom='10px'
                            >
                                <Box>
                                    <NavigationIcon></NavigationIcon>
                                </Box>
                                <Box
                                    marginTop='-5px'
                                    marginLeft='10px'
                                    marginRight='10px'
                                >
                                    <Box>
                                        <Link sx={{
                                            textDecoration: 'none', fontSize: '14px', '&:hover': {
                                                color: 'inherit',
                                                textDecoration: 'none'
                                            },
                                        }} color="inherit">
                                            Option 3
                                        </Link>
                                    </Box>
                                    <Box sx={{ marginTop: '-6px' }}>
                                        <Link sx={{
                                            textDecoration: 'none', fontSize: '14px', '&:hover': {
                                                color: 'inherit',
                                                textDecoration: 'none'
                                            },
                                        }} color="inherit">
                                            Option 4
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    marginBottom='10px'
                                >
                                    <Box>
                                        <PhoneIcon></PhoneIcon>
                                    </Box>
                                    <Box
                                        marginTop='-5px'
                                        marginLeft='10px'
                                        marginRight='10px'
                                    >
                                        <Box>
                                            <Link sx={{
                                                textDecoration: 'none', fontSize: '14px', '&:hover': {
                                                    color: 'inherit',
                                                    textDecoration: 'none'
                                                },
                                            }} color="inherit">
                                                Option 5
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    display='flex'
                                    alignItems='flex-start'
                                >
                                    <Box>
                                        <EmailIcon></EmailIcon>
                                    </Box>
                                    <Box>
                                        <Box
                                            marginLeft='10px'
                                            marginRight='10px'
                                        >
                                            <Link sx={{
                                                textDecoration: 'none', fontSize: '15px', '&:hover': {
                                                    color: 'inherit',
                                                    textDecoration: 'none'
                                                },
                                            }} color="inherit">
                                                jobhunt@gmail.com
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box> */}
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} sx={{ paddingLeft: 8, paddingRight: 8 }}>
                        <Grid item xs={12} sm={12} md={3} marginBottom='10px'>

                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            {/* <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                {t('fTitle5')}
                                Business Partners
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM1')}
                                    Affiliate Marketing
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM2')}
                                    Trade Partners
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM3')}
                                    e-Presurement
                                </Link>
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            {/* <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                {t('fTitle6')}
                                Group Companies
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM4')}
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM5')}
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM6')}
                                </Link>
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            {/* <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                {t('fTitle7')}
                                <br />
                                {t('fTitle8')}
                            </Box>
                            <Box
                                display='flex'
                                marginBottom='10px'
                            >
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={facebook} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={instagram} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={youtube} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={twitter} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={linkedin} alt='' />
                                </Link>
                            </Box> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;