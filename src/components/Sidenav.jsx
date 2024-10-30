

import React from 'react';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

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
            text: 'Orders',
            icon: <LowPriorityOutlinedIcon color='primary' />,
            path: '/orders'
        },
        {
            text: 'Products',
            icon: <MonetizationOnOutlinedIcon color='primary' />,
            path: '/products'
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
        }

    ]

    return (

        <Grid container style={{ height: '100vh', backgroundColor: 'linear-gradient(135deg, #e0f7fa, #e3f2fd)' }}>
            {/* Left Section */}
            <Grid item xs={12} md={2}
                style={{
                    height: '108%',
                    boxShadow: '2px 5px 5px black',
                    background: 'white'
                    
                }}
            >


                <div>
                    <div variant='p' style={{ fontSize: '20px', paddingLeft: '20px', paddingTop: '20px' }} > Commission System </div>
                    <Paper style={{ width: '60px', height: '60px', marginLeft: '85px', marginTop: '20px', bordr: '3px solid black' }}>
                        {/* <Avatar sx={{ marginLeft: '8px', paddingTop: '1px' }} src='https://img.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43732.jpg?ga=GA1.1.1454211261.1724652688&semt=ais_hybrid' /> */}
                        <img style={{ width: '40px', height: '50px', margin: '5px 0px 0px 10px' }} src="https://img.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43732.jpg?ga=GA1.1.1454211261.1724652688&semt=ais_hybrid" alt="" />
                    </Paper>
                    <Typography variant='h6' style={{ margin: '10px 0px 0px 70px' }}>Jama Abdi </Typography>
                    <Typography color='text.secondary' variant='h6' style={{ margin: '1px 0px 0px 80px', }}>@Abdi </Typography>
                    <Box style={{ margin: '20px 0px 0px 48px', color: 'blue', gap: '28px', display: 'flex', fontSize: '25px' }}>
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
                <Box
                    sx={{
                        padding: '16px', height: '100%'

                    }}
                >
                    {children}
                </Box>
            </Grid>
        </Grid >

    )
}

