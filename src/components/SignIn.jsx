import React from 'react';
import { TextField, Button, Checkbox, Typography, Box, Link, Grid, IconButton } from '@mui/material';
import { Google, Facebook, Apple } from '@mui/icons-material';

import flower from '../assets/img/flower.png'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const SignIn = () => {
    return (
        <Grid container style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Left Section */}
            <Grid
                item
                xs={12}
                md={6}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #e0f7fa, #e3f2fd)',
                }}
            >
                <Box
                    sx={{
                        width: '60%',
                        height: '60%',
                        borderRadius: '50%',
                        backgroundColor: '#d1eaff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="h1"
                        style={{ color: '#2979ff', fontWeight: 'bold', fontSize: '80px' }}
                    >
                        <img src={flower} alt="" width={'100%'} />
                    </Typography>
                </Box>
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
                    <TextField fullWidth label="Email" variant="outlined" margin="normal" type="email" placeholder="xyz@example.com"/>

                    {/* Password Field */}
                    <TextField fullWidth label="Password" variant="outlined" margin="normal" type="password"  placeholder="••••"/>

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
                    <Button fullWidth size="large" variant='contained' sx={{ mt: '10px', textTransform: 'none' }}>Sign In</Button>

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
