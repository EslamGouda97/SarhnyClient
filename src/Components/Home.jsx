import { Box, Typography } from '@mui/material'
import React from 'react'
import image from '../assets/pexels-kindel-media-7149136.jpg'
import  CardRow  from './card/cardsComponent'
import  cardsInfo  from './card/cardList'



export default function Home() {


  return (
    <Box sx={{overflowX:'hidden'}}>
<Box sx={{
  height: '100vh',
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column', // set flex direction to column
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <Typography sx={{ mb: 1 ,fontSize:{ xs: '50px', md: '120px' },fontFamily:'Great Vibes'}} variant="h2" color="white">"Tell me honestly"</Typography>
  <Typography sx={{ mb: 2 ,fontSize:{ xs: '18px', md: '35px' ,fontFamily:'outfit'}}} variant="h4" color="white">
    Are you ready to know people's notes about you</Typography>
  <Typography sx={{ mb: 3 }} variant="h5" color="white"></Typography>
</Box>
<Box sx={{ bgcolor: '#540589',display:'flex',flexDirection:'row' ,p: 2, justifyContent: 'center', alignItems: 'center',flexWrap: 'wrap'  }}>
<Typography sx={{ my: 2 ,fontSize:{ xs: '60px', md: '80px' ,fontFamily:'Great Vibes' ,fontWeight:'400'}}} variant="h4">
Join us</Typography>
</Box>

    <Box sx={{ bgcolor: '#540589',display:'flex',flexDirection:'row' ,p: 2, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    {cardsInfo.map(ele=> <CardRow header={ele.header} image={ele.image} content={ele.content}  /> )}
        </Box>
  </Box>
  )
}
