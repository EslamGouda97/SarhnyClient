import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUserState, setUserProfileImage } from "../../Store/Slices/userSlice.jsx";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LoadingButton from "@mui/lab/LoadingButton";
import Sarhny from '../../Api/config';
import jwt_decode from "jwt-decode";
import { createTheme, ThemeProvider } from "@mui/material/styles";



export default function EditProfile() {

  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useSelector(getUserState);

  const dispatch=useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      dispatch(fetchUser(userId));
    }}, [dispatch]);
  

  const publicId = user?.image?.publicId;
  const imageUrl = user?.image?.url;

  async function EditData(values) {
    await Sarhny.patch(`user/image`, values);
    window.location.reload();
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(35, "Name must be 35 characters or less")
      .required("Name is required")
      .matches(/^[a-zA-Z ]+$/, "Name can only contain letters and spaces"),
    age: Yup.number()
      .min(18, "Age must be at least 18")
      .max(100, "Age cannot be more than 100")
      .required("Age is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  
  const formik = useFormik({
    initialValues: {
      name: `${user?.name}`,
      age: `${user?.age}`,
      password: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      EditData(values);
    },
  });
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
  };

  const handleImageSubmit = async () => {
    if (imageFile) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("image", imageFile);

        if (imageUrl === "") {
          const response = await Sarhny.post(
            `user/image`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          dispatch(setUserProfileImage(response.data.image));
          setLoading(false);
        } else {
          formData.append("imageId", `${publicId}`);
          const response = await Sarhny.patch(
            `user/image`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setLoading(false);
          dispatch(setUserProfileImage(response.data.image));
          window.location.reload();
        }
        setImageFile(null);
        setImageSrc(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const styles = {
    errorText: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: '0.2rem',
    }};

  return (
    <ThemeProvider theme={createTheme()}>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2ch',
      height:'100%',
      width:'100%'
    }}
    component="form"
    onSubmit={formik.handleSubmit}
  >
    <Typography variant="h4" sx={{ my: 2 }}>
      Edit Profile
    </Typography>
  
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '2ch',
        width: '100%',
      }}
    >
      <label htmlFor="profilePhoto" style={{ cursor: 'pointer' }}>
        <input
          accept="image/*"
          id="profilePhoto"
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
  
        <Box sx={{ position: 'relative', mb: { xs: 2, md: 5 } }}>
          {imageSrc === null && user?.image?.url ? (
            <Box
              component="img"
              sx={{
                border: '1px solid black',
                borderRadius: '50%',
                height: { lg: 100, md: 150, sm: 100, xs: 100 },
                width: { lg: 100, md: 150, sm: 100, xs: 100 },
              }}
              alt="img"
              src={user?.image?.url}
            />
          ) : imageSrc !== null ? (
            <Box
              component="img"
              sx={{
                border: '1px solid black',
                borderRadius: '50%',
                height: { lg: 100, md: 150, sm: 100, xs: 100 },
                width: { lg: 100, md: 150, sm: 100, xs: 100 },
              }}
              alt="img"
              src={imageSrc}
            />
          ) : (
            <Avatar sx={{ width: '120px', height: '120px' }}>
              <AddPhotoAlternateIcon
                sx={{
                  fontSize: '4.5rem',
                  width: '50%',
                  height: '50%',
                }}
              />
            </Avatar>
          )}
          <Box
            component={imageFile ? CheckCircleIcon : AddPhotoAlternateIcon}
            alt="Add Photo Icon"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: 1,
              height: '40px !important',
              width: '40px !important',
              cursor: 'pointer',
            }}
          />
        </Box>
      </label>
  
      <LoadingButton
        onClick={() => handleImageSubmit()}
        sx={{
          backgroundColor: '#4caf50',
          color: '#ffff',
          fontWeight: 'bold',
          borderRadius: '5px',
          padding: '4px 12px',
          cursor: 'pointer',
        }}
        variant="contained"
        loading={loading}
        disabled={imageFile === null}
      >
        <span>Update</span>
      </LoadingButton>
    </Box>
  
    <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2ch',
  }}
  component="form"
  onSubmit={formik.handleSubmit}
>

  <Box
    sx={{
      display: 'flex',
      gap: '2ch',
      width: '100% ',
    }}
  >
    <TextField
      name="name"
      required
      fullWidth
      id="outlined-controlled"
      label="Name"
      value={formik.values?.name}
      onChange={formik.handleChange}
      error={formik.touched.name && Boolean(formik.errors.name)}

      sx={{
        m: '1%',
        width: '70%',
        my: 1,
      }}
    />
    <TextField
      name="age"
      required
      fullWidth
      id="outlined-controlled"
      label="Age"
      value={formik.values.age}
      onChange={formik.handleChange}
      error={formik.touched.age && Boolean(formik.errors.age)}

      sx={{
        m: '1%',
        width: '30%',
        my: 1,
      }}
    />
      <FormControl
          sx={{
            m: '1%',
            width: '98%',
            my: 1,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-controlled">Password</InputLabel>
          <OutlinedInput
            id="outlined-controlled"
            label="Password"
            required
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              formik.touched.password && Boolean(formik.errors.password)
            }

            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
  </Box>
  {formik.submitCount > 0 && (
    <div style={styles.errorText}>
      {formik.errors.name}
      {formik.errors.age}
      {formik.errors.password}
    </div>
  )}
</Box>
        <Button type="submit" variant="contained" sx={{ m: 1 }} 
        disabled={
          formik.values?.name === user?.name ||
          (formik.values?.name === "" &&
            formik.values?.age === user?.age) ||
          (formik.values?.age === "" &&
            formik.values?.password ===
              user?.password) ||
          (formik.values?.password=== "")
        }>Save Changes</Button>
    </Box>
    </ThemeProvider>
  );
}