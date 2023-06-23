import { Button, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";

const ManageResume = () => {

    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let interval = setInterval(() => {
            if (userData) {
                const updateInfo = JSON.parse(localStorage.getItem('userInfo'));
                setUserData(updateInfo || []);
            }
        }, 200)
        return () => clearInterval(interval);
    }, []);


    const [applyInfo, setApplyInfo] = useState([]);
    useEffect(() => {
        setLoading(true);
        if (userData?.email) {
            fetch(`https://talent-hustle-server.vercel.app/apply/${userData?.email}`, {
            })
                .then(res => res.json())
                .then(data => {
                    setApplyInfo(data);
                    setLoading(false);
                })
        }
    }, [applyInfo, userData?.email]);
    // console.log(userData);
    // console.log(applyInfo);

    return (
        <Grid>
            <Grid sx={{ marginTop: '50px', marginBottom: '150px' }}>
                <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '10px 0px', marginBottom: '50px' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white' }}>
                        Manage Resume List
                    </Typography>
                </Grid>
                <Grid>
                    {
                        applyInfo.map(info => <Grid key={info?._id} sx={{ marginTop: '20px' }}>
                            <Grid sx={{ boxShadow: '4', padding: '20px', borderRadius: '10px' }}>
                                <Grid
                                    container
                                    spacing={4}
                                    alignItems='center'
                                >
                                    <Grid item md={6}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                                {info?.name}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            display='flex'
                                            alignItems='center'
                                        >
                                            <Typography sx={{ fontSize: '17px', fontWeight: '600', marginRight: '100px' }}>
                                                Email : {info?.email}
                                            </Typography>
                                            <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>
                                                Number : {info?.number}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Grid
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='flex-end'
                                        >
                                            <Grid sx={{ textAlign: 'center' }}>
                                                {/* <IconButton
                                            // onClick={() => handleDetails(10078)}
                                            aria-label="Edit" sx={{ padding: '2px', borderRadius: '5px', backgroundColor: '', border: '2px solid #ED4C78' }}>
                                            <AiOutlineEye style={{ fontSize: '25px', color: '#ED4C78' }} />
                                        </IconButton> */}
                                                <Button variant='contained' component="label">
                                                    <a href={info?.cv} style={{ textDecoration: 'none', }} target="_blank" download rel="noreferrer">
                                                        Download
                                                    </a>
                                                </Button>
                                            </Grid>
                                            <Grid sx={{ textAlign: 'center', marginLeft: '20px' }}>
                                                <IconButton aria-label="Edit" sx={{ padding: '2px', borderRadius: '5px', backgroundColor: '', border: '2px solid #00C9DB' }}>
                                                    <AiFillPrinter style={{ fontSize: '25px', color: '#00C9DB' }} />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ManageResume;