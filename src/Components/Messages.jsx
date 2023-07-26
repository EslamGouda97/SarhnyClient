import React, { useEffect, useState } from 'react'
import { deleteMessage, fetchMessages, getLoadingState, getMessagesState } from '../Store/Slices/messagesSlice'
import {  useDispatch, useSelector } from 'react-redux'
import { Avatar, Box, Button, CircularProgress, Grid, IconButton, Modal, Typography} from '@mui/material';
import {  fetchUser, getUserState } from '../Store/Slices/userSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";



export default function Messages() {

  const user=useSelector(getUserState);
  const dispatch=useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      dispatch(fetchMessages(userId));
      dispatch(fetchUser(userId));

    }}, [dispatch]);
    
    const userMessages=useSelector(getMessagesState);
    const loading = useSelector(getLoadingState);



  const handleDelete = (id) => {
    dispatch(deleteMessage(id));
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: '30vh',
          backgroundColor: ' #3c5c96 ',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
    </Box>
    

    <Box flexGrow={1} sx={{ backgroundColor: 'hsl(210, 4%, 18%)', display: 'flex', alignItems: 'center' ,flexDirection:'column'}}>
    <Box
        sx={{
          width: '60%',
          height: '45vh',
          backgroundColor: '#f1f1f1',
          borderRadius:'20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt:-10,
          mb: 3,
          zIndex:2
        }}
      >

              {user?.image ? (
                <Avatar src={user?.image?.url} sx={{ width: 150, height: 150 }} />
            ) : (
                <Avatar sx={{ width: 150, height: 150 }}>{user?.name.charAt(0)}</Avatar>
            )}           
        <Typography variant='h4' sx={{ mt: 2  ,fontFamily:'cairo'}}>{user?.name}
        </Typography>
        <Button variant='contained' color='primary' sx={{ mt: 2 }} onClick={handleOpen}>
          Share Profile Link
        </Button>
      </Box>
      {loading ? (
          <Box sx={{ width: '100%', height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : userMessages?.length > 0 ? (
          <Grid container direction='column' alignItems='center' sx={{ width: '100%' }}>
            {userMessages?.map((message) => (          
                <Box
                  sx={{
                    position: 'relative',
                    width: '80%',
                    height: '40vh',
                    bgcolor: '#ffffff',
                    mx: 3,
                    my: 2,
                    borderRadius: 4,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <IconButton
                    sx={{ position: 'absolute', top: 0, right: 0, color: 'red'}}
                    onClick={() => handleDelete(message._id)}
                  >
                    <DeleteIcon sx={{ fontSize: '2.5rem' }} />
                  </IconButton>

                  <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Typography sx={{ fontSize: '2rem', textAlign: 'center' }} variant='body1'> {message.message}</Typography>
              </Box>
            </Box>
            ))}
          </Grid>
        ) : (
          <Box sx={{ width: '100%', height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h5' color='white'>There are no messages for you</Typography>
          </Box>
        )}
    </Box>
    <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              width: '50%',
              height: '50%',
              backgroundColor: '#f1f1f1',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              my: '150px',
              outline: 'none',
              p: 3,
              zIndex:6
            }}
          >
            <Typography variant='h5' sx={{ fontFamily: 'cairo' ,fontSize:'2rem'}}>
              Share Profile Link
            </Typography>
            <Typography variant='body1' sx={{ fontFamily: 'cairo', mt: 2 }}>
              Here's the link to your profile:
            </Typography>
            <Typography variant='body1' sx={{ fontFamily: 'cairo',fontSize: {
          xs: '.6rem',
          sm: '.7rem',
          md: '1rem',
          lg: '1.3rem'
        }, fontWeight: 'bold', mt: 1 }}>
              <Link to={`/messageTo/user/${user?._id}`} target='_blank' rel='noopener' sx={{ color: 'blue', textDecoration: 'underline' }}>
              https://sarhny-client.vercel.app/messageTo/user/{user?._id}
              </Link>
            </Typography>
            <Button variant='contained' sx={{ mt: 3, fontSize: '1.2rem',bgcolor:'red' }} disableElevation onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Modal>
    </Box>

  )
}
