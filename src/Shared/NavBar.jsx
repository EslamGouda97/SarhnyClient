/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Button, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import image from '../assets/igfMO11cJFgS7Ltg5ltN.png';
import { useSelector } from 'react-redux';
import { getUserState } from '../Store/Slices/userSlice';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const isLoggin=useSelector((state)=>state.users?.isLogin);
  const user=useSelector(getUserState);



  useEffect(() => {
    const token=localStorage.getItem('token');
    if(token) return setIsLoggedIn(!!token);
  }, [isLoggedIn]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(null);
    window.location.href = '/';
    };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setBackgroundColor('rgba(0, 0, 0, 0.5)');
      } else {
        setBackgroundColor('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (anchorEl) {
        setAnchorEl(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [anchorEl]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" position="fixed" sx={{
        height: '75px',
        backgroundColor,
        transition: 'background-color 0.3s ease-in-out',
        boxShadow: 'none' 
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/">
            <img src={image} style={{ width: '10rem', height: '5rem',marginTop:" .7rem"}} />
          </NavLink>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            
            { isLoggin || isLoggedIn ? (
              <>
                <Button component={Link} to="/messages" sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
                  My Messages
                </Button>
                <Button  onClick={handleLogout} sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
                  Log out
                </Button>
                <Link to='/profile'>{user?.image ? (
                <Avatar src={user?.image?.url} sx={{ width: 42, height: 42 }} />
            ) : (
                <Avatar sx={{ width: 42, height: 42 }}></Avatar>
            )} </Link>
              </>
            ) : (
              <>
                <Button component={Link} to="/login" sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
                  Login
                </Button>
                <Button component={Link} to="/register" sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
                  Register
                </Button>
                <Link to='/profile'><Avatar sx={{ width: 42, height: 42 }}></Avatar></Link>
              </>
            )}
            
          </Box>
          <IconButton aria-label="open drawer" edge="end" sx={{ ml: 2, display: { sm: 'none' } ,fontSize: '3rem', color: 'antiquewhite'}} onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu sx={{ mr: 5}} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {isLoggin || isLoggedIn ?(<>
            <MenuItem  sx={{ justifyContent: 'center' }}>
            <Link to='/profile'> {user?.image ? (
                <Avatar src={user?.image?.url} sx={{ width: 42, height: 42 }} />
            ) : (
                <Avatar sx={{ width: 42, height: 42 }}></Avatar>
            )}</Link>
            </MenuItem>
              <MenuItem component={Link} to="/messages"  sx={{ justifyContent: 'center' }}>
              My Messages
            </MenuItem>
            <MenuItem  onClick={handleLogout} sx={{ justifyContent: 'center' }}>
              Log Out
            </MenuItem>
            </>):(<>
            <MenuItem  sx={{ justifyContent: 'center' }}>
            <Link to='/profile'>
            <Avatar sx={{ width: 42, height: 42 }}></Avatar>

            </Link>
            </MenuItem>
              <MenuItem component={Link} to="/login" sx={{ justifyContent: 'center' }}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/register"  sx={{ justifyContent: 'center' }}>
              Register
            </MenuItem>  
            </>)}  
          </Menu>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
/* eslint-disable jsx-a11y/alt-text */
// import { useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AppBar, Box, IconButton, Toolbar, Button, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import image from '../assets/igfMO11cJFgS7Ltg5ltN.png';
// import { useSelector } from 'react-redux';
// import { getUserState } from '../Store/Slices/userSlice';

// export default function NavBar() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [backgroundColor, setBackgroundColor] = useState('transparent');
//   const [isLoggedIn, setIsLoggedIn] = useState(null);

//   useEffect(() => {
//     const token=localStorage.getItem('token');
//     if(token) return setIsLoggedIn(!!token);
//   }, [isLoggedIn]);

// const user=useSelector(getUserState)
// console.log(user);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(null);
//     window.location.href = '/';
//     };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > 0) {
//         setBackgroundColor('rgba(0, 0, 0, 0.5)');
//       } else {
//         setBackgroundColor('transparent');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (anchorEl) {
//         setAnchorEl(null);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [anchorEl]);

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar component="nav" position="fixed" sx={{
//         height: '75px',
//         backgroundColor,
//         transition: 'background-color 0.3s ease-in-out',
//         boxShadow: 'none' 
//       }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <NavLink to="/">
//             <img src={image} style={{ width: '10rem', height: '5rem',marginTop:" .7rem"}} />
//           </NavLink>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
//             {isLoggedIn ? (
//               <>
//                 <Button component={Link} to="/messages" sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
//                   My Messages
//                 </Button>
//                 <Button  onClick={handleLogout} sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
//                   Log out
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Button component={Link} to="/login" sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
//                   Login
//                 </Button>
//                 <Button component={Link} to="/register" sx={{ mr: 2, color: '#ffffff', borderColor: '#ffffff' }} variant="outlined" >
//                   Register
//                 </Button>
//               </>
//             )}
//           </Box>
//           <IconButton aria-label="open drawer" edge="end" sx={{ ml: 2, display: { sm: 'none' } ,fontSize: '3rem', color: 'antiquewhite'}} onClick={handleMenuOpen}>
//             <MenuIcon />
//           </IconButton>
//           <Menu sx={{ mr: 5}} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           {isLoggedIn ? (<>
//               <MenuItem component={Link} to="/messages"  sx={{ justifyContent: 'center' }}>
//               My Messages
//             </MenuItem>
//             <MenuItem  onClick={handleLogout} sx={{ justifyContent: 'center' }}>
//               Log Out
//             </MenuItem></>):(<>
//             <MenuItem component={Link} to="/login" sx={{ justifyContent: 'center' }}>
//               Login
//             </MenuItem>
//             <MenuItem component={Link} to="/register"  sx={{ justifyContent: 'center' }}>
//               Register
//             </MenuItem></>)}
           
//           </Menu>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }