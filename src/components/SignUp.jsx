import React from "react";
import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";


import icon from '../assets/img/i3.png'
import icon2 from '../assets/img/i1.png'

const SignUp = () => {
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
          <Box>
            {/* text */}
            <Typography variant="h4" component="div"
              style={{
                textAlign: 'center'
              }}>
              Sign Up
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: 14, mt: '8px',
                textAlign: 'center'
              }}>
              Create your Hope UI account
            </Typography>

            {/* fisrt text field */}
            <div
              style={{
                display: 'flex',
                gap: '10px'
              }}>
              <TextField fullWidth label="First Name" variant="outlined" type='text' margin='normal' placeholder='John' />
              <TextField fullWidth label="Last Name" variant="outlined" type='text' margin='normal' placeholder='Doe' />
            </div>
            {/* second text field */}
            <div
              style={{
                display: 'flex',
                gap: '10px'
              }}>
              <TextField fullWidth label="Email" variant="outlined" margin="normal" type="email" placeholder="xyz@example.com" />
              <TextField fullWidth label="Phone" variant="outlined" type='number' margin='normal' placeholder='123456789' />
            </div>
            {/* third text field */}
            <div
              style={{
                display: 'flex',
                gap: '10px'
              }}>
              <TextField fullWidth label="Password" variant="outlined" margin='normal' placeholder='xxxxx' />
              <TextField fullWidth label="Confirm Password" variant="outlined" margin='normal' placeholder='xxxxx' />
            </div>

            {/* icons  */}
            <Button size="large" variant='contained' sx={{ mt: '10px', textTransform: 'none', marginLeft: '125.3px' }}>Sign Up</Button>

            <Typography sx={{ color: 'text.secondary', fontSize: 14, mt: '18px', textAlign: 'center' }}>
              or sign up with other accounts?
            </Typography>
            <Box
              style={{
                gap: '10px',
                display: 'flex',
                marginLeft: '120px',
                marginTop: '17px'
              }}>
              <FcGoogle style={{ fontSize: '30px', }} />
              <FaFacebook style={{ color: 'blue', fontSize: '28px', }} />
              <AiFillInstagram style={{ color: 'hotPink', fontSize: '32px', }} />
              <TiSocialLinkedinCircular style={{ color: 'blue', fontSize: '32px', }} />
            </Box>

            <Typography sx={{ color: 'text.secondary', fontSize: 14, mt: '13px', textAlign: 'center' }}>
              Already have an Account <span style={{ color: 'blue' }}>Sign in</span>
            </Typography>
          </Box>

        </Box>
      </Grid>
    </Grid >
  );
};

export default SignUp;
