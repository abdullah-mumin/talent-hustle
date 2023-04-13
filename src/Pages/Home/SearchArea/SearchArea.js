import { Container, Grid, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import HouseIcon from '@mui/icons-material/House';

const SearchArea = () => {
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
                                    // select
                                    // value={value}
                                    name='city'
                                // onChange={handleChange}
                                // onBlur={handleOnBlur}
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
                                    // select
                                    // value={value}
                                    name='city'
                                // onChange={handleChange}
                                // onBlur={handleOnBlur}
                                >
                                </TextField>
                            </Grid>
                            <Grid item md={2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SearchArea;