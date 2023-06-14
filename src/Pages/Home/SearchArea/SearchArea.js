import { Button, Container, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import HouseIcon from '@mui/icons-material/House';

const SearchArea = () => {

    const [title, setTitle] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const [location, setLocation] = useState('');
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSearch = () => {
        console.log(title);
        console.log(location);
    };
    return (
        <Grid>
            <Container>
                <Grid>
                    <Grid
                        sx={{ backgroundColor: '#28A2AA', borderRadius: '10px', padding: '30px 20px', boxShadow: '8' }}
                    >
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item md={5}>
                                <TextField
                                    sx={{
                                        color: 'black', width: '100%', [`& fieldset`]: {
                                            borderRadius: 2.5,
                                            height: '55px',
                                        },
                                        // '& .MuiSelect-select': {
                                        //     width: '1%'
                                        // },
                                    }}
                                    placeholder="Job Title"
                                    // size='small'
                                    id="outlined-select-city"
                                    value={title}
                                    name='title'
                                    onChange={handleTitleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item md={5}>
                                <TextField
                                    sx={{
                                        color: 'black', width: '100%', [`& fieldset`]: {
                                            borderRadius: 2.5,
                                            height: '55px',
                                        },
                                        // '& .MuiSelect-select': {
                                        //     width: '1%'
                                        // },
                                    }}
                                    placeholder="Location"
                                    // size='small'
                                    id="outlined-select-city"
                                    value={location}
                                    name='location'
                                    onChange={handleLocationChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item md={2}>
                                <Button
                                    onClick={handleSearch}
                                    sx={{
                                        backgroundColor: '#291F78', textTransform: 'none', width: '100%', padding: '12px 20px', borderRadius: '10px', '&:hover': {
                                            bgcolor: '#291F78',
                                        },
                                    }}
                                    variant="contained"
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SearchArea;