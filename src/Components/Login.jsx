import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import  {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Sarhny from '../Api/config';
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { fetchUser, setLoggin } from "../Store/Slices/userSlice";
import image from "../assets/images/pexels-sora-shimazaki-5926395.jpg";
import Modal from './Modal/Modal';
import Spinner from './Spinner/Spinner';




function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true); 
      try {
        const { data } = await Sarhny.post('signIn', values);
        localStorage.setItem('token', data.token);
        const decodedToken = jwt_decode(data.token);
        dispatch(fetchUser(decodedToken.userId));
        dispatch(setLoggin(true));
        navigate('/messages');
      } catch (err) {
        setOpen(true) 
      }
      setLoading(false);
    },
  });
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
    <Box sx={{ position: 'relative' ,zIndex:10}}>
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
      my: '10%',
      outline: 'none',
      p: 3,
    }}
  >
    <Typography variant='h5' sx={{ fontFamily: 'cairo', fontSize: '1.7rem' }}>
      An Error Occured please Check the email and password again
    </Typography>
    <Button variant='contained' sx={{ mt: 3, fontSize: '1.2rem', bgcolor: 'red' }} disableElevation onClick={handleClose}>
      Close
    </Button>
  </Box>
</Modal>
  </Box>
      <Box
        sx={{
          height: '35vh',
          backgroundColor: 'transparent',
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
      <Box sx={{backgroundColor: 'transparent', p: 2, height: '62vh', position: 'relative' ,zIndex:1}}>
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#fff',
            width: '80%',
            maxWidth: '400px',
            borderRadius: '8px',
            p: 4,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main', margin: 'auto', my: 2 }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {loading && <Spinner />}
    </Box>
  );
}

export default Login;