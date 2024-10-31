

import React from 'react';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from '@mui/material';

import { SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LowPriorityOutlinedIcon from '@mui/icons-material/LowPriorityOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { FaCartShopping, } from 'react-icons/fa6';

import { GoHeartFill } from 'react-icons/go';
import { TbBellRinging } from 'react-icons/tb';
import HelpIcon from '@mui/icons-material/Help';

import img1 from '../assets/img/2.jpg'
import StraightIcon from '@mui/icons-material/Straight';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';

import SummarizeIcon from '@mui/icons-material/Summarize';

const typographyWidth = 10


export default function Sidenav({ children }) {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItem = [
        {
            text: 'Dashboard',
            icon: <SubjectOutlined color='primary' />,
            path: '/'
        },
        {
            text: 'Agents',
            icon: <SupportAgentOutlinedIcon color='primary' />,
            path: '/agents'
        },
        {
            text: 'Customers',
            icon: <GridViewOutlinedIcon color='primary' />,
            path: '/customers'
        },
        {
            text: 'Products',
            icon: <MonetizationOnOutlinedIcon color='primary' />,
            path: '/products'
        },
        {
            text: 'Orders',
            icon: <LowPriorityOutlinedIcon color='primary' />,
            path: '/orders'
        },
        {
            text: 'Users',
            icon: <GroupAddOutlinedIcon color='primary' />,
            path: '/users'
        },
        {
            text: 'SignOut',
            icon: <LogoutOutlinedIcon color='primary' />,
            path: '/signout'
        },
        {
            text: 'Help',
            icon: <HelpIcon color='primary' />,
            path: '/help'
        },


    ]


    return (

        <Grid container style={{ height: '100vh', backgroundColor: 'linear-gradient(135deg, #e0f7fa, #e3f2fd)' }}>
            {/* Left Section */}
            <Grid item xs={12} md={2}
                style={{
                    height: '130%',
                    boxShadow: '2px 5px 5px black',
                    background: 'white',
                    // overflowY: 'auto',

                }}
            >


                <div>
                    <div variant='p' style={{ fontSize: '20px', paddingLeft: '20px', paddingTop: '20px' }} > Commission System </div>
                    <Box style={{ width: '60px', height: '60px', marginLeft: '85px', marginTop: '20px', borderRadius: '6%', border: '1px solid #8396f1' }}>
                        <img style={{ width: '40px', height: '50px', margin: '4px 0px 4px 9px', borderRadius: '6%' }} src={img1} alt="" />
                    </Box>
                    <Typography variant='h6' style={{ margin: '10px 0px 0px 70px' }}>Jama Abdi </Typography>
                    <Typography color='text.secondary' variant='h6' style={{ margin: '1px 0px 0px 80px', }}>@Abdi </Typography>
                    <Box style={{ margin: '20px 0px 0px 48px', color: '#3a57e8', gap: '28px', display: 'flex', fontSize: '25px' }}>
                        <FaCartShopping />
                        <GoHeartFill />
                        <TbBellRinging />
                    </Box>
                    <hr style={{ marginTop: '20px' }} />
                </div>



                {/*list / links  */}
                <List>
                    {

                        menuItem.map(item => (
                            //   { item.path == 'users' ? <hr/> : ''}
                            <ListItem
                                key={item.text}
                                button
                                onClick={() => navigate(item.path)}
                                sx={{ backgroundColor: location.pathname === item.path ? '#f4f4f4' : null }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}> </ListItemText>


                            </ListItem>
                        ))
                    }
                    {/* <hr /> */}
                </List>

            </Grid>


            {/* Right Section */}
            <Grid item xs={12} md={10}>
                {/* app bar */}
                <AppBar
                    sx={{
                        height: '10%',
                        zIndex: '0', /* set lower z-index value */
                        marginLeft: '7px',
                        position: 'relative', /* position must be set for z-index to work */
                        width: `calc(100% - ${typographyWidth}px)`, backgroundColor: 'white', color: 'black'
                    }}
                // elevation={0} // is the shadoww

                >

                    <Toolbar>
                        <Typography sx={{ marginLeft: '10px', marginTop: '20px' }}> <HomeIcon style={{ color: 'blue' }} /> Home</Typography>
                        <Typography sx={{ marginLeft: '30px', marginTop: '20px' }}> <PaidIcon style={{ color: 'blue' }} /> Paid</Typography>
                        <Typography sx={{ flexGrow: '1', marginLeft: '30px', marginTop: '20px' }}> <SummarizeIcon style={{ color: 'gray' }} />Unpaid</Typography>
                        <Typography variant='h6' style={{ marginRight: '10px' }}>EN</Typography>
                        <NotificationsNoneIcon />
                        <p style={{ marginRight: '10px', marginTop: '15px' }}><StraightIcon /></p>
                        <Typography> Jama Abdi</Typography>

                        <Avatar sx={{ marginLeft: '8px', backgroundColor: 'blue' }} />
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{
                        padding: '16px', height: '90%',
                    }}
                >
                    {children}
                </Box>
            </Grid>
        </Grid >

    )
}

