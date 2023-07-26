import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#333333', color: '#ffffff', py: 3 }}>
  <Grid container justifyContent="center" alignItems="center" spacing={0}>
    <Grid item>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          position: 'relative',
          border: 'none',
          '& a': {
            width: '80px',
            height: '80px',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2px)',
            transition: '0.5s',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              transform: 'translateY(-20px)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50px',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transform: 'skewX(45deg) translateX(150px)',
              transition: '0.5s ease',
            },
            '&:hover::before': {
              transform: 'skewX(45deg) translateX(-150px)',
            },
            '& svg': {
              width: '3em',
            },
            '& #facebook': {
              color: '#1877F2', // Set the color to the Facebook blue
            },
          },
          '@media (max-width: 600px)': {
            '& a': {
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              '& svg': {
                width: '2em',
              },
            },
          },
          '@media (max-width: 400px)': {
            '& a': {
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              '& svg': {
                width: '1.5em',
              },
            },
          },
        }}
      >
     
        <a href="#">
        <FacebookIcon id="facebook" sx={{ fontSize: '3.2rem','@media (max-width: 600px)': { fontSize: '2.5rem'},'@media (max-width: 400px)': {fontSize: '2rem'}}} />

        </a>
      </Button>
    </Grid>
    <Grid item>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          position: 'relative',
          border: 'none',
          backgroundColor: 'transparent',
          '& a': {
            width: '80px',
            height: '80px',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2px)',
            transition: '0.5s',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              transform: 'translateY(-20px)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50px',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transform: 'skewX(45deg) translateX(150px)',
              transition: '0.5s ease',
            },
            '&:hover::before': {
              transform: 'skewX(45deg) translateX(-150px)',
                       },
            '& svg': {
              width: '3em',
            },
            '& #instagram': {
              color: '#C13584', // Set the color to the Instagram pink
            },
             
          },
          '@media (max-width: 600px)': {
            '& a': {
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              '& svg': {
                width: '2em',
              },
            },
          },
          '@media (max-width: 400px)': {
            '& a': {
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              '& svg': {
                width: '1.5em',
              },
            },
          },
        }}
      >
        <a href="#">
        <InstagramIcon id="instagram"  sx={{ fontSize: '3.2rem','@media (max-width: 600px)': { fontSize: '2.5rem'},'@media (max-width: 400px)': {fontSize: '2rem'}}}/>
        </a>
      </Button>
    </Grid>
    <Grid item>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          position: 'relative',
          border: 'none',
          backgroundColor: 'transparent',
          '& a': {
            width: '80px',
            height: '80px',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2px)',
            transition: '0.5s',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              transform: 'translateY(-20px)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50px',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transform: 'skewX(45deg) translateX(150px)',
              transition: '0.5s ease',
            },
            '&:hover::before': {
              transform: 'skewX(45deg) translateX(-150px)',
            },
            '& svg': {
              width: '3em',
            },
            '& #twitter': {
              color: '#2facf4'
            },
            
          },
          '@media (max-width: 600px)': {
            '& a': {
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              '& svg': {
                width: '2em',
              },
            },
          },
          '@media (max-width: 400px)': {
            '& a': {
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              '& svg': {
                width: '1.5em',
              },
            },
          },
        }}
      >
        <a href="#">
        <TwitterIcon id="twitter" sx={{ fontSize: '3.2rem','@media (max-width: 600px)': { fontSize: '2.5rem'},'@media (max-width: 400px)': {fontSize: '2rem'}}}/>
        </a>
      </Button>
    </Grid>
    <Grid item>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          position: 'relative',
          border: 'none',
          backgroundColor: 'transparent',
          '& a': {
            width: '80px',
            height: '80px',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2px)',
            transition: '0.5s',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              transform: 'translateY(-20px)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50px',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transform: 'skewX(45deg) translateX(150px)',
              transition: '0.5s ease',
            },
            '&:hover::before': {
              transform: 'skewX(45deg) translateX(-150px)',
            },
            '& svg': {
              width: '3em',
            },
            '& #youtube': {
              color: '#ff0808',
            },
          },
          '@media (max-width: 600px)': {
            '& a': {
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              '& svg': {
                width: '2em',
              },
            },
          },
          '@media (max-width: 400px)': {
            '& a': {
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              '& svg': {
                width: '1.5em',
              },
            },
          },
          

        }}
      >
        <a href="#">
        <YouTubeIcon id="youtube" sx={{ fontSize: '3.2rem','@media (max-width: 600px)': { fontSize: '2.5rem'},'@media (max-width: 400px)': {fontSize: '2rem'}}}/>
        </a>
      </Button>
    </Grid>
  </Grid>
  <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © 2023 Sarhny. All Rights Reserved.
      </Typography>
  </Box>
  )
}

export default Footer;