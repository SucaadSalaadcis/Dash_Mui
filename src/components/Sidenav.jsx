import React, { useState } from 'react'

import { AppBar, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material'
import { SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { TbBellRinging } from "react-icons/tb";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LowPriorityOutlinedIcon from '@mui/icons-material/LowPriorityOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const drawerWidth = 240;
const typographyWidth = 200

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
        <div style={{ display: 'flex' }}>
            {/* app bar */}
            <AppBar
                sx={{ width: `calc(100% - ${typographyWidth}px)`, backgroundColor: 'white', color: 'black' }}
            // elevation={0} // is the shadow

            >

                <Toolbar>
                    <Typography sx={{ flexGrow: '1' }}> Today is the </Typography>
                    <Typography> Mario</Typography>
                    <Avatar sx={{ marginLeft: '8px' }} src='https://i0.wp.com/play.co.rs/wp-content/uploads/2023/06/Super-Mario-RPG-Remake.jpg?resize=1000%2C600&ssl=1' />
                </Toolbar>

            </AppBar>

            {/* side drawer */}
            <Drawer
                sx={{ width: drawerWidth }}
                variant='permanent'
                anchor='left'
            >

                <div style={{ width: typographyWidth, marginTop: '20px' }}>

                    <Typography variant='p' style={{ fontSize: '20px', paddingLeft: '16px', marginTop: '100px' }} > Commission System </Typography>
                    <Paper style={{ width: '60px', height: '60px', marginLeft: '60px', marginTop: '20px', bordr: '3px solid black' }}>
                        {/* <Avatar sx={{ marginLeft: '8px', paddingTop: '1px' }} src='https://img.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43732.jpg?ga=GA1.1.1454211261.1724652688&semt=ais_hybrid' /> */}
                        <img style={{ width: '40px', height: '50px', margin: '5px 0px 0px 10px' }} src="https://img.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43732.jpg?ga=GA1.1.1454211261.1724652688&semt=ais_hybrid" alt="" />
                    </Paper>
                    <Typography variant='h6' style={{ margin: '10px 0px 0px 40px' }}>Jama Abdi </Typography>
                    <Typography color='text.secondary' variant='p' style={{ margin: '10px 0px 0px 55px', }}>@Abdi </Typography>
                    <Box style={{ margin: '20px 0px 0px 32px', color: 'blue', gap: '28px', display: 'flex', fontSize: '25px' }}>
                        <FaCartShopping />
                        <GoHeartFill />
                        <TbBellRinging />
                    </Box>
                    <hr style={{ marginTop: '20px' }} />
                </div>


                {/*list / links  */}
                <List style={{ marginTop: '2px' }}>
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

            </Drawer >

            <div style={{ width: '100%', gap: '5px', marginTop: '90px' }}>
                {children}
            </div>
        </div >
    )
}
