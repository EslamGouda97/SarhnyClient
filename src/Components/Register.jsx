import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import  {Link, useNavigate} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Sarhny from '../Api/config';
import { addInfo } from '../Store/Slices/userSlice';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import image from "../assets/images/pexels-sora-shimazaki-5926395.jpg";


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number()
    .integer('Age must be a whole number')
    .positive('Age must be a positive number')
    .required('Age is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);


  const handleDialogClose = () => {
    setErrorDialogOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      const {...data } = values;
      const response = await Sarhny.post("signUp", data);
      dispatch(addInfo(response.data));
      navigate("/login"); // navigate to the login page
    } catch (error) {
      console.log(error);
      setErrorDialogOpen(true); // show error dialog
    }
  };

  return (
    <Box>
     <Box sx={{backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
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
      <Box sx={{backgroundColor: 'transparent', p: 2, height: '62vh', position: 'relative' }}>
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
            zIndex: '1',
            p: 4,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main', margin:'auto', my:2 }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={{
              name: '',
              age: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  sx={{
                    textAlign:'center',
                    mt: 2,
                    mb: 1,
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                      padding: '10px 14px',
                    },
                    '@media (max-width:600px)': {
                      '& .MuiInputBase-input': {
                        fontSize: '0.9rem',
                        padding: '8px 12px',
                      },
                    },
                  }}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  sx={{
                    textAlign:'center',
                    mt: 1,
                    mb: 1,
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                      padding: '10px 14px',
                    },
                    '@media (max-width:600px)': {
                      '& .MuiInputBase-input': {
                        fontSize: '0.9rem',
                        padding: '8px 12px',
                      },
                    },
                  }}
                  error={touched.age && Boolean(errors.age)}
                  helperText={touched.age && errors.age}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    mt: 1,
                    mb: 1,
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                      padding: '10px 14px',
                    },
                    '@media (max-width:600px)': {
                      '& .MuiInputBase-input': {
                        fontSize: '0.9rem',
                        padding: '8px 12px',
                      },
                    },
                  }}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    mt: 1,
                    mb: 1,
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                      padding: '10px 14px',
                    },
                    '@media (max-width:600px)': {
                      '& .MuiInputBase-input': {
                        fontSize: '0.9rem',
                        padding: '8px 12px',
                      },
                    },
                  }}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  sx={{
                    mt: 1,
                    mb: 2,
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                      padding: '10px 14px',
                    },
                    '@media (max-width:600px)': {
                      '& .MuiInputBase-input': {
                        fontSize: '0.9rem',
                        padding: '8px 12px',
                      },
                    },
                  }}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <Grid container>
            <Grid item>
              <Link to='/login' variant="body">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Box>

      </Box>
      <Dialog open={errorDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{"Oops, there was an error"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Something went wrong while processing your request. Please try again later.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </Box>
  );
}

export default Register;