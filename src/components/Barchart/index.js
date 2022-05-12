import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    LineChart,
    Line,
  } from "recharts";
import { Typography } from '@mui/material';
  


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]
  ;


export default({ aspect, title })=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <br/>
        <br/>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
          <Typography  sx={{border:'1px solid #DFF0D8'}}>
            <Typography sx={{paddingLeft:'30px',background:'#DFF0D8',color:'#50C878'}}>LineChart</Typography>              
          <LineChart width={500} height={250} data={data}
  margin={{ top: 5, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>    
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography sx={{border:'1px solid #428BCA'}}>
            <Typography sx={{paddingLeft:'30px',background:'#428BCA',color:'white'}}>BarChart</Typography>                                        
<BarChart width={500} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
