import React, { useEffect, useState } from 'react'

import { Avatar, Box, Button, Modal, TextField, Typography} from '@mui/material';
import { Link, useParams } from 'react-router-dom';  
import Sarhny from '../Api/config';
import image from'../assets/tt.gif'



export default function SendMessages() {
  const [open, setOpen] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState('');
  const {id} = useParams();

  const fetchUserData = async() => {  
   await Sarhny.get(`users/${id}`)
      .then(response => {
        const userData = response.data.data;
        setUserData(userData);
        setFetchError(false);

      })
      .catch(error => {
        setFetchError(true);
        console.error(error);
      });
  };

  useEffect(() => {
    if (id) {
        fetchUserData();
      }
    }, [id]);  


  const handleClose = () => {
    setOpen(false);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    try {
      setMessage('');
      setOpen(true);
      await Sarhny.post(`messages/user/${id}`, { message });


    } catch (error) {
        setFetchError(error)
        console.error(error);

    }
  };

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: '30vh',
          backgroundColor: '#3c5c96',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>

      <Box flexGrow={1} sx={{ backgroundColor: 'hsl(210, 4%, 18%)', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {fetchError ? (
          <Box
            sx={{
              width: '60%',
              height: '45vh',
              backgroundColor: '#f1f1f1',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -10,
              mb: 3,
              zIndex: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: 'cairo', color: 'red', mb: 2 }}>
              This User Is Not Found
            </Typography>
            <Link to='/'> <Button variant="contained" sx={{ fontSize: '1.2rem' }} disableElevation >
              Close
            </Button></Link>
          </Box>
        ) : (
            <>
          <Box
            sx={{
              width: '70%',
              height: '80vh',
              backgroundColor: '#f1f1f1',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -10,
              mb: 3,
              zIndex: 2,
            }}
          >
                {userData?.image ? (
                <Avatar src={userData?.image?.url} sx={{ width: 150, height: 150 }} />
            ) : (
                <Avatar sx={{ width: 150, height: 150 }}>{userData?.name.charAt(0)}</Avatar>
            )}            
            <Typography variant="h4" sx={{ mt: 2, fontFamily: 'cairo' }}>
              {userData?.name}
            </Typography>      
            <TextField
                label="Enter Your Message"
                multiline
                rows={8}
                value={message}
                onChange={handleMessageChange}
                sx={{ mt: 5, width: '80%',border:'1px solid',borderRadius:"10px"}}
              />
              <Button variant="contained" 
              disabled={message===''}
              onClick={handleSend} sx={{ mt: 2 ,fontSize:'1.2rem'}}>
                Send
              </Button>
          </Box>

       
          </>
        )}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: '50%',
            height: '50%',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            my: '150px',
            outline: 'none',
            p: 3,
            zIndex: 6,
          }}
        >
          <img src={image} style={{ width: '17rem' ,height: '13rem', marginBottom: '20px' }}   alt="" />
          <Typography variant="h5" sx={{ fontFamily: 'cairo', fontSize: '2rem' }}>
            Message Sent
          </Typography>
          <Button variant="contained" sx={{ mt: 3, fontSize: '1.2rem', bgcolor: 'red' }} disableElevation onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
