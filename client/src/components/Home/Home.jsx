import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Avatar, Box, Button, Typography } from '@mui/material';
// import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Axios from 'axios';
import BaseUrl from '../../constants/index';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tracking from '../../assets/tracking.png'
import Delivered from '../../assets/delivered.png'
import Cancelled from '../../assets/cancel.png'
import Revenue from '../../assets/financial-statement.png'







const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Axios.get(BaseUrl)
      .then((res) => {
        setOrders(res.data.allItems);
      });
  }, []);


  return (
    <div>
      <Box sx={{ marginTop: '20px', width: '80vw' }}>
        <Grid container spacing={2}>
          <Grid size={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid size={8}>
            <Typography variant='h4'>Dashboard</Typography>
            <Typography variant='h6' sx={{fontSize:"16px",color:"gray",marginTop:"5px"}}>Hi Morgan, Welcome back</Typography>
            </Grid>
            <Grid size={4}>
              {/* <Button variant='contained'>filter</Button> */}
            </Grid>
          </Grid>

            <Grid size={3}>
            <Card sx={{backgroundColor:"#ffff",width:"250px",height:"120px"}}>
              <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Avatar src={Tracking} sx={{marginTop:"20px",height:56,width:56}}/>
                <div className='flex flex-col items-center ml-3 mt-6'>
                <Typography>{orders.length}</Typography>
                <Typography>orders</Typography>
                </div>
              </CardContent>
            </Card>
            </Grid>

            <Grid size={3}>
            <Card sx={{backgroundColor:"#ffff",width:"250px",height:"120px"}}>
              <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Avatar src={Delivered} sx={{marginTop:"20px",height:56,width:56}}/>
                <div className='flex flex-col items-center ml-3 mt-6'>
                <Typography>1</Typography>
                <Typography>cancelled</Typography>
                </div>
              </CardContent>
            </Card>
            </Grid>

            <Grid size={3}>
            <Card sx={{backgroundColor:"#ffff",width:"250px",height:"120px"}}>
              <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Avatar src={Cancelled} sx={{marginTop:"20px",height:56,width:56}}/>
                <div className='flex flex-col items-center ml-3 mt-6'>
                <Typography>2</Typography>
                <Typography>pending</Typography>
                </div>
              </CardContent>
            </Card>
            </Grid>

            <Grid size={3}>
            <Card sx={{backgroundColor:"#ffff",width:"250px",height:"120px"}}>
              <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Avatar src={Revenue} sx={{marginTop:"20px",height:56,width:56}}/>
                <div className='flex flex-col items-center ml-3 mt-6'>
                <Typography>{orders.length}</Typography>
                <Typography>orders</Typography>
                </div>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
      </Box>

    </div>
  );
};

export default Home;
