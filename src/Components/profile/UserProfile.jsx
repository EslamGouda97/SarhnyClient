import { useDispatch, useSelector } from "react-redux";
import {Grid,Typography} from "@mui/material";
import "./style.module.css"
import { Box } from "@mui/system";
import { Avatar } from '@mui/material';
import { fetchUser, getUserState } from "../../Store/Slices/userSlice.jsx";
import EditProfile from "./EditProfile";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Dialog, DialogContent } from '@mui/material';
import { Card, CardContent, CardHeader} from '@mui/material';



const Profile = () => {
  const user = useSelector(getUserState);
  const [open, setOpen] = useState(false);

  const dispatch=useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      dispatch(fetchUser(userId));
    }}, [dispatch]);
    return (
      <>
        <Box
          sx={{
            width: '100%',
            height: '10vh',
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
        <Grid container sx={{ my: 3, height: '70vh' }}>
          <Grid item lg={3} xl={3} sm={4} md={3} sx={{ margin: '16px auto' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              {user?.image?.url === '' ? (
                <Avatar
                  sx={{
                    border: '1px solid black',
                    borderRadius: '50%',
                    height: { lg: 200, md: 150, sm: 100, xs: 100 },
                    width: { lg: 200, md: 150, sm: 100, xs: 100 },
                  }}
                />
              ) : (
                <>
                  <Box
                    component="img"
                    sx={{
                      border: '1px solid black',
                      borderRadius: '50%',
                      height: { lg: 200, md: 150, sm: 100, xs: 100 },
                      width: { lg: 200, md: 150, sm: 100, xs: 100 },
                    }}
                    alt="img"
                    src={user?.image.url}
                  />
                </>
              )}
            </Box>
  
            <Card sx={{ height:'35vh',maxWidth: 345, margin: 'auto' }}>
              <CardHeader title={user?.name} />
              <CardContent>
                <Typography>{user?.email}</Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button
  onClick={() => setOpen(true)}
  sx={{
    backgroundColor:'#30cae8',
    color: '#fff',
    borderRadius: '4px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop:'50px',
    '&:hover': {
      backgroundColor: '#3E8E41',
    },
  }}
>
  Edit Profile
</Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
          <DialogContent>
            <EditProfile />
          </DialogContent>
        </Dialog>
      </>
    );
  }

export default Profile;
