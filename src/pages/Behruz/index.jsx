import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';

import ListItemButton from '@mui/material/ListItemButton';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';

import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PeopleIcon from '@mui/icons-material/People';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

  function notificationsLabel(count) {
      if (count === 0) {
          return 'no notifications';
      }
      if (count > 0) {
          return 'more than 9 notifications';
      }
      return `${count} notifications`;
  }
export default () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const [open2, setOpen2] = React.useState(true);

    const handleClick2 = () => {
        setOpen2(!open2);
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Dashboard - Admin Template
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Box sx={{ display: 'flex' }}>
                    <Input type='' placeholder='Search'>
                    </Input>
                    <Button>Go</Button>
                </Box>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashbord" />
                    </ListItemButton>

                    <ListItemButton onClick={handleClick2}>
                        <ListItemIcon>
                            <AutoAwesomeMotionOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nested Menu" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={open2} timeout="auto" unmountOnExit sx={{ backgroundColor: '#DFDFDF' }}>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>

                                <ListItemText primary="Aenean" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>

                                <ListItemText primary="Pellentesque" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>

                                <ListItemText primary="Congue" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>

                                <ListItemText primary="Interdum" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>

                                <ListItemText primary="Facilisi" />

                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ApartmentOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Data Visualization" />
                        <IconButton aria-label={notificationsLabel(100)}>
                            <Badge badgeContent={9} color="secondary">
                            </Badge>
                        </IconButton>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <AddLocationAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Map" />
                        <IconButton aria-label={    (100)}>
                            <Badge badgeContent={42} color="secondary">
                            </Badge>
                        </IconButton>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Users" />
                        <IconButton aria-label={notificationsLabel(100)}>
                            <Badge badgeContent={'NEW'} color="secondary">
                            </Badge>
                        </IconButton>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsApplicationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Perferences" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <AssistantDirectionOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItemButton>
                </List>
            </Drawer>
        </Box>
    );
}

// import * as React from 'react';


// return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{ mr: 2, ...(open && { display: 'none' }) }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Dashboard - Admin Template
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     '& .MuiDrawer-paper': {
//                         width: drawerWidth,
//                         boxSizing: 'border-box',
//                     },
//                 }}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//             >
//                 <DrawerHeader>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                     </IconButton>
//                 </DrawerHeader>
//                 <Divider />

//                 <Box sx={{ display: 'flex' }}>
//                     <Input type='' placeholder='Search'>
//                     </Input>
//                     <Button>Go</Button>
//                 </Box>


//                 <Divider />

// <List>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <ApartmentOutlinedIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Data Visualization" />
//                         <IconButton aria-label={notificationsLabel(100)}>
//                             <Badge badgeContent={9} color="secondary">
//                             </Badge>
//                         </IconButton>
//                     </ListItemButton>

//                     <ListItemButton>
//                         <ListItemIcon>
//                             <AddLocationAltIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Map" />
//                         <IconButton aria-label={notificationsLabel(100)}>
//                             <Badge badgeContent={42} color="secondary">
//                             </Badge>
//                         </IconButton>
//                     </ListItemButton>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <PeopleIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Manage Users" />
//                         <IconButton aria-label={notificationsLabel(100)}>
//                             <Badge badgeContent={'NEW'} color="secondary">
//                             </Badge>
//                         </IconButton>
//                     </ListItemButton>

//                     <ListItemButton>
//                         <ListItemIcon>
//                             <SettingsApplicationsIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Perferences" />
//                     </ListItemButton>

//                     <ListItemButton>
//                         <ListItemIcon>
//                             <AssistantDirectionOutlinedIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Sign Out" />
//                     </ListItemButton>
//                 </List>
//             </Drawer>
//             <Main open={open}>
//                 <DrawerHeader />

//             </Main>
//         </Box>
//     );
// }

