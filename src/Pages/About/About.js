import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import about from '../../Images/About/about.png'
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const About = () => {
    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Grid>
                        <img style={{ width: '100%', height: '450px', }} src={about} alt="Banner" />
                    </Grid>
                    <Grid marginTop='-300px'>
                        <Typography sx={{ fontSize: '30px', color: 'black', fontWeight: '600', textAlign: 'center', letterSpacing: '5px' }}>
                            About Us
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'black', fontWeight: '600', textAlign: 'center' }}>
                            We are here for any information check this out
                        </Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: '300px' }}>
                    <Container>
                        <Grid>
                            <Grid
                                container
                                spacing={8}
                            >
                                <Grid item md={7}>
                                    <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>
                                        About Recruitment Agency
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px' }}>
                                        Helping people all around the world bag their dream job.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px' }}>
                                        Pellentesque habitant morbi tristique senectus et netus et
                                        malesuada fames ac turpis egestas. Pellentesque nec arc
                                        u consequat, bibendum elit vestibulum, malesuada massa
                                        . Ut quam metus, euismod eget aliquet sit amet, blandit non.
                                        Sed semper elit quis est bibendum pharetra. Pellentesque
                                        posuere in erat sed tempor. Mauris lectus lorem, vehicula
                                        in sapien id, mattis hendrerit elit. In varius pulvinar turpis,
                                        vitae venenatis lectus dapibus et.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px' }}>
                                        Pellentesque habitant morbi tristique senectus et netus et
                                        malesuada fames ac turpis egestas. Pellentesque nec arc
                                        u consequat, bibendum elit vestibulum, malesuada massa
                                        . Ut quam metus, euismod eget aliquet sit amet, blandit non.
                                        Sed semper elit quis est bibendum pharetra. Pellentesque
                                        posuere in erat sed tempor. Mauris lectus lorem, vehicula
                                        in sapien id, mattis hendrerit elit. In varius pulvinar turpis,
                                        vitae venenatis lectus dapibus etc.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px', marginBottom: '100px' }}>
                                        Pellentesque habitant morbi tristique senectus et netus et
                                        malesuada fames ac turpis egestas. Pellentesque nec arc
                                        u consequat, bibendum elit vestibulum, malesuada massa
                                        . Ut quam metus, euismod eget aliquet sit amet, blandit non.
                                        Sed semper elit quis est bibendum pharetra. Pellentesque
                                        posuere in erat sed tempor. Mauris lectus lorem, vehicula
                                        in sapien id, mattis hendrerit elit. In varius pulvinar turpis,
                                        vitae venenatis lectus dapibus etc.
                                    </Typography>
                                </Grid>
                                <Grid item md={5}>
                                    <Grid>
                                        <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '5px 0px' }}>
                                            <Typography sx={{ fontSize: '20px', color: 'white' }}>
                                                CONTACT RECRUITMENT
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ backgroundColor: '#B0ACAC', padding: '10px 20px' }}>
                                            <Grid>
                                                <Grid>
                                                    <TextField
                                                        sx={{
                                                            color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                                borderRadius: 'px',
                                                            },
                                                        }}
                                                        placeholder='Name'
                                                        variant="outlined"
                                                        size='small'
                                                    />
                                                </Grid>
                                                <Grid>
                                                    <TextField
                                                        sx={{
                                                            color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                                borderRadius: 'px',
                                                            },
                                                        }}
                                                        placeholder='Email'
                                                        variant="outlined"
                                                        size='small'
                                                    />
                                                </Grid>
                                                <Grid>
                                                    <TextField
                                                        sx={{
                                                            color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                                borderRadius: 'px',
                                                            },
                                                        }}
                                                        placeholder='Message'
                                                        variant="outlined"
                                                        rows={6}
                                                        multiline
                                                        size='small'
                                                    />
                                                </Grid>
                                                <Grid sx={{ marginTop: '20px' }}>
                                                    <Button variant='contained' style={{
                                                        color: 'white', fontSize: '17px', borderRadius: '10px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                            bgcolor: '#291F78',
                                                            color: 'white',
                                                        }
                                                    }}>
                                                        SEND MESSAGE
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid sx={{ marginTop: '20px', marginBottom: '10px' }}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>
                                                        Address
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '12px', fontWeight: '600', color: 'white' }}>
                                                        United States, Kansas, 456 Labore
                                                    </Typography>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>
                                                        Email
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '12px', fontWeight: '600', color: 'white' }}>
                                                        labore@recruitment.com
                                                    </Typography>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>
                                                        Call
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '12px', fontWeight: '600', color: 'white' }}>
                                                        +1 646 4706923
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid sx={{ backgroundColor: '#453D83', padding: '20px 0px' }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '30px', color: 'white', fontWeight: '600', letterSpacing: '2px' }}>
                            HAVE A QUESTION?
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '600', marginTop: '10px' }}>
                            We are here to help. Email us or call +44 534 643 2544
                        </Typography>
                        <Button variant='contained' style={{
                            color: 'black', fontWeight: '600', marginTop: '20px', fontSize: '17px', borderRadius: '10px', backgroundColor: '#FFFFFF', width: '250px', ':hover': {
                                bgcolor: '#FFFFFF',
                                color: 'black',
                            }
                        }}>
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    <Container>
                        <Grid sx={{ marginTop: '50px', marginBottom: '50px' }}>
                            <Grid sx={{ backgroundColor: '#FFFDFD', boxShadow: '6', padding: '40px 40px', borderRadius: '20px', backgroundImage: 'linear-gradient(to right, #9F37CE, #291F78)' }}>
                                <Grid
                                    container
                                    spacing={4}
                                    alignItems='center'
                                >
                                    <Grid item md={6}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '30px', fontWeight: '600', letterSpacing: '5px', color: '#000000' }}>
                                                Never Want to Miss Any
                                            </Typography>
                                            <Typography sx={{ fontSize: '35px', fontWeight: '600', letterSpacing: '5px', color: '#291F78' }}>
                                                Job News?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Grid
                                            container
                                            spacing={1}
                                        >
                                            <Grid item md={6}>
                                                <TextField
                                                    sx={{
                                                        color: 'white', width: '100%', borderRadius: '10px', backgroundColor: 'white', [`& fieldset`]: {
                                                            borderRadius: '10px',
                                                        },
                                                    }}
                                                    placeholder='Email'
                                                    variant="outlined"
                                                    size='small'
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <Button variant='contained' style={{
                                                    color: 'white', fontSize: '17px', borderRadius: '15px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                        bgcolor: '#291F78',
                                                        color: 'white',
                                                    }
                                                }}>
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default About;