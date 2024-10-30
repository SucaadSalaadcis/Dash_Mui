import {
  Box, Button, FormControl, Grid, TextField, Typography
} from '@mui/material'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import flower from '../assets/img/flower.png'

export default function SignUp() {

  return (
    //  left Section
    <Grid Grid container style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #e0f7fa, #e3f2fd)',
        }}>
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
          <FormControl variant="standard"  >
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
            <Button size="large" variant='contained' sx={{ mt: '10px' }}>Sign Up</Button>
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
          </FormControl>

        </Box>
      </Grid>

    </Grid >
  )
}
