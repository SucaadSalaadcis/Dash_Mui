import React from 'react';
import { TextField, Button, Checkbox, Typography, Box, Link, Grid } from '@mui/material';


import icon from '../assets/img/i3.png'
import icon2 from '../assets/img/i1.png'

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const SignIn = () => {
    return (
        <Grid container sx={{ minHeight: "100vh", backgroundColor: '#f9f9f9' }}>

            {/* Left Section */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{

                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",

                }}
            >
                {/* Large Half-Circle Background */}
                {/* last */}
                <Box
                    sx={{
                        position: "absolute",
                        width: 800,
                        height: 800,
                        borderRadius: "50%",
                        bgcolor: "#f1f3fa",
                        top: "50%",
                        left: "-18%",
                        transform: "translateY(-50%)",
                    }}

                />
                {/* second */}
                <Box
                    sx={{
                        position: "absolute",
                        width: 800,
                        height: 800,
                        borderRadius: "50%",
                        bgcolor: "#3a57e8",
                        top: "50%",
                        left: "-29.5%",
                        transform: "translateY(-50%)",
                    }}
                >
                </Box>
                {/* first */}
                <Box
                    sx={{
                        position: "absolute",
                        width: 800,
                        height: 800,
                        borderRadius: "50%",
                        bgcolor: "#dee3f7",
                        top: "50%",
                        left: "-30%",
                        transform: "translateY(-50%)",
                    }}
                >
                </Box>

                {/* the top thing like title and icon */}
                <div>
                    <Button
                        startIcon={<img width={'20px'} src={icon2} />}

                        size="large"
                        sx={{
                            position: 'absolute',
                            top: '10%',
                            left: '15%',
                            transform: 'translate(-50%, -50%)',
                            color: 'black',
                            fontSize: '25px',
                            textTransform: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Hope UI
                    </Button>
                    <img src={icon} style={{
                        zIndex: '1', /* set higher z-index value */
                        position: 'relative', /* position must be set for z-index to work */
                        width: '200px',
                        height: '500px'
                    }} alt="empty" />
                </div>


            </Grid>

            {/* Right Section */}
            <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                    sx={{
                        width: '80%',
                        maxWidth: '400px',
                        padding: '40px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Sign In
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                        Sign in to stay connected.
                    </Typography>

                    {/* Email Field */}
                    <TextField fullWidth label="Email" variant="outlined" margin="normal" type="email" placeholder="xyz@example.com" />

                    {/* Password Field */}
                    <TextField fullWidth label="Password" variant="outlined" margin="normal" type="password" placeholder="••••" />

                    {/* Remember Me Checkbox and Forgot Password Link */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox color="primary" />
                            <Typography variant="body2">Remember me?</Typography>
                        </Box>
                        <Link href="#" variant="body2" underline="none">
                            Forgot Password
                        </Link>
                    </Box>

                    {/* Sign In Button */}
                    <Button  size="large" variant='contained' sx={{ mt: '10px', textTransform: 'none', marginLeft: '120px'}}>Sign In</Button>

                    {/* Divider */}
                    <Typography
                        variant="body2"
                        align="center"
                        color="textSecondary"
                        sx={{ margin: '16px 0' }}
                    >
                        or sign in with other accounts?
                    </Typography>

                    {/* Social Media Icons */}
                    <Box
                        style={{ gap: '10px', display: 'flex', marginLeft: '120px', marginTop: '17px' }}>
                        <FcGoogle style={{ fontSize: '30px', }} />
                        <FaFacebook style={{ color: 'blue', fontSize: '28px', }} />
                        <AiFillInstagram style={{ color: 'hotPink', fontSize: '32px', }} />
                        <TiSocialLinkedinCircular style={{ color: 'blue', fontSize: '32px', }} />
                    </Box>

                    {/* Sign Up Link */}
                    <Typography variant="body2" align="center" sx={{ marginTop: '16px' }}>
                        Don’t have an account?{' '}
                        <Link href="#" variant="body2" underline="none">
                            Click here to sign up.
                        </Link>
                    </Typography>
                </Box>
            </Grid>

        </Grid>
    );
};

export default SignIn;
