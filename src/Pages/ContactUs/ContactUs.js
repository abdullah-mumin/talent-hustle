import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import about from '../../Images/About/about.png'
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const ContactUs = () => {
    return (
        <Grid>
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
                    <Grid sx={{ marginTop: '250px' }}>
                        <Container>
                            <Grid>
                                <Grid
                                    container
                                    spacing={4}
                                >
                                    <Grid item md={2}>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Grid>
                                            <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '5px 0px' }}>
                                                <Typography sx={{ fontSize: '20px', color: 'white' }}>
                                                    Quick Contact
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ backgroundColor: '#B0ACAC', padding: '10px 20px' }}>
                                                <Grid sx={{ marginTop: '20px', marginBottom: '20px' }}>
                                                    <Grid sx={{ marginBottom: '30px' }}>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            If you have any questions simply use
                                                            the following contact details.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#291F78' }}>
                                                            Address
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            Madison Avenue,
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            Suite F-2 Manhattan,
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            New York 10282
                                                        </Typography>
                                                    </Grid>
                                                    <Grid sx={{ marginTop: '10px' }}>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#291F78' }}>
                                                            Email
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            labore@recruitment.com
                                                        </Typography>
                                                    </Grid>
                                                    <Grid sx={{ marginTop: '10px' }}>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#291F78' }}>
                                                            Call
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            +1 646 4706923
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={4}>
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
                                                            rows={5}
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
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={2}>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid sx={{ backgroundColor: '#453D83', padding: '20px 0px', marginTop: '50px' }}>
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
        </Grid>
    );
};

export default ContactUs;