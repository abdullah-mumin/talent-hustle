import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { GrCurrency } from 'react-icons/gr';
import { TbPointFilled } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillUnlock } from 'react-icons/ai';
import location from '../../Images/Job/location.jpg';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const JobDetails = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const [url, setUrl] = React.useState('');

    // Handle the `onChange` event of the `file` input
    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Container>
                        <Grid sx={{ marginTop: '50px' }}>
                            <Grid
                                container
                                spacing={4}
                            >
                                <Grid item md={8}>
                                    <Grid>
                                        <Grid>
                                            <Grid sx={{ marginBottom: '10px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                                    JOB DETAILS
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ border: '2px solid #F3F4F9', borderRadius: '10px' }}>
                                                <Grid sx={{ padding: '20px' }}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                            Quality Assurance Analyst
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '15px', marginBottom: '10px', marginTop: '5px' }}>
                                                            Job Type : Remote
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    container
                                                                    spacing={4}
                                                                >
                                                                    <Grid item md={6}>
                                                                        <Grid sx={{ backgroundColor: '#D9D9D9', padding: '3px 10px', borderRadius: '5px' }}>
                                                                            <Grid
                                                                                display='flex'
                                                                                alignItems='center'
                                                                                justifyContent='center'
                                                                            >
                                                                                <BsFillCalendarMinusFill style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                <Typography sx={{ fontSize: '13px' }}>
                                                                                    Full Time
                                                                                </Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item md={6}>
                                                                        <Grid sx={{ backgroundColor: '#D9D9D9', padding: '3px 10px', borderRadius: '5px' }}>
                                                                            <Grid
                                                                                display='flex'
                                                                                alignItems='center'
                                                                                justifyContent='center'
                                                                            >
                                                                                <GrCurrency style={{ fontSize: '15px', marginBottom: '1px', marginRight: '5px' }} />
                                                                                <Typography sx={{ fontSize: '13px' }}>
                                                                                    $2000 - $2100
                                                                                </Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}></Grid>
                                                        </Grid>
                                                        <Typography sx={{ fontSize: '15px', marginBottom: '10px' }}>
                                                            Posted : 30+ days ago 'Based on your profile'
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                                    QUALIFICATION
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ border: '2px solid #F3F4F9', borderRadius: '10px', marginTop: '10px' }}>
                                                <Grid sx={{ padding: '20px' }}>
                                                    <Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                                    FULL JOB DESCRIPTION
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ border: '2px solid #F3F4F9', borderRadius: '10px', marginTop: '10px' }}>
                                                <Grid sx={{ padding: '20px' }}>
                                                    <Grid>
                                                        <Grid>
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Lorem ipsum dolor sit amet consectetur. Quam libero consequat
                                                                sagittis pellentesque proin curabitur donec aenean consectetur.
                                                                Gravida lobortis feugiat feugiat ultricies integer magna ipsum sa
                                                                gittis et. At lorem purus in et. Nibh ultrices dui orci habitasse tem
                                                                pus nisi sit cras sollicitudin. Nunc auctor sit sit a phasellus males
                                                                uada. Feugiat aliquet gravida id tortor leo morbi nisl molestie eget.
                                                                In pellentesque nisl auctor facilisis massa ac venenatis tortor a. Pu
                                                                rus diam proin bibendum nulla. At iaculis dui duis commodo lectus
                                                                tristique dictum justo tincidunt. Consectetur sit lectus libero felis.
                                                                Tellus proin nunc vitae et at placerat varius et aenean. Auctor massa
                                                                viverra aliquam purus nunc enim adipiscing. Faucibus hac non eu id.
                                                                Nisi viverra aliquam nisi tincidunt in ut lacinia. Lacus sed tempor viver
                                                                ra ac ultrices pretium quam. Lacus eget aliquam sapien nibh in cras. T
                                                                urpis dolor sapien leo tempor enim non pretium. Quisque et viverra
                                                                auctor diam. Sapien cras nullam aliquet justo aliquet diam. Amet vol
                                                                utpat pharetra mollis orci eget a sed consequat. Etiam mattis ultrices
                                                                ullamcorper neque duis facilisis egestas sit.
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid sx={{ marginTop: '40px' }}>
                                        <Grid>
                                            <img style={{ width: '100%', height: '250px', marginBottom: '-5px' }} src={location} alt="Banner" />
                                        </Grid>
                                        <Grid sx={{ backgroundColor: '#FFF', padding: '10px 20px' }}>
                                            <Grid sx={{ marginTop: '20px', marginBottom: '10px' }}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                        IT Recruitment LTD
                                                    </Typography>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            New York , Casborn
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            Full Time
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            20/03/2023
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            $2000 - 2100 Per month
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '30px', marginBottom: '20px' }}>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Faucibus vel nibh turpis mi eget bibendum.
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Faucibus vel nibh turpis mi eget bibendum.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '5px 0px' }}>
                                            <Button
                                                onClick={handleOpen}
                                                variant='contained' style={{
                                                    color: 'white', textTransform: 'none', fontSize: '17px', borderRadius: '10px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                        bgcolor: '#291F78',
                                                        color: 'white',
                                                    }
                                                }}>
                                                Drop Your CV
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Footer />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '600', marginTop: '-20px', marginBottom: '20px' }}>
                        Apply
                    </Typography>
                    <Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                Full Name
                            </Typography>
                            <TextField
                                sx={{
                                    color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                        borderRadius: '5px',
                                    },
                                }}
                                placeholder='Enter your name'
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                Email Address
                            </Typography>
                            <TextField
                                sx={{
                                    color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                        borderRadius: '5px',
                                    },
                                }}
                                placeholder='Enter your email'
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                Cover Letter
                            </Typography>
                            <TextField
                                sx={{
                                    color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                        borderRadius: '5px',
                                    },
                                }}
                                placeholder='Enter your cover letter'
                                variant="outlined"
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                Phone Number
                            </Typography>
                            <TextField
                                sx={{
                                    color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                        borderRadius: '5px',
                                    },
                                }}
                                placeholder='Enter your number'
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                Upload CV
                            </Typography>
                            <Grid sx={{ marginTop: '5px' }}>
                                <input type="file" accept=".pdf" onChange={onChange} />
                            </Grid>
                        </Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                Additional Question
                            </Typography>
                            <TextField
                                sx={{
                                    color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                        borderRadius: '5px',
                                    },
                                }}
                                placeholder='How many years of experience ?'
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: '30px' }}>
                        <Button variant='contained' style={{
                            color: 'white', fontSize: '17px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                bgcolor: '#291F78',
                                color: 'white',
                            }
                        }}>
                            SUBMIT APPLICATION
                        </Button>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default JobDetails;