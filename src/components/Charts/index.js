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
    PieChart,
    Legend,
    Pie,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
  } from "recharts";
import { Typography } from '@mui/material';

  

  const data = [
    {
      subject: "Eating",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Drinking",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Sleeping",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Designing",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Coding",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Cycling",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  const config = {
    type: 'polarArea',
    data: data,
    options: {}
  };
  
  const data02 = [
    {
      name: "Group A",
      value: 5000,
      color: "#F7464A",
    },
    {
      name: "Group B",
      value: 2000,
      color: "#FDB45C",
    },
    {
      name: "Group C",
      value: 1000,
      color: "#46BFBD",
    },
  ];

  const data0 = [
    {
      name: "Group A",
      value: 5000,
      color: "#F7464A",
    },
  
  ];





  const data10 = [
    {
      name: "Group A",
      value: 3500,
      color: "#F7464A",
    },
    {
      name: "Group B",
      value: 6000,
      color: "#FDB45C",
    },
    {
      name: "Group C",
      value: 500,
      color: "#46BFBD",
    },
  ];

  const data11 = [
    {
      name: "Group A",
      value: 3000,
      color: "#F7464A",
    },
    {
      name: "Group B",
      value: 4000,
      color: "#FDB45C",
    },
    {
      name: "Group C",
      value: 1500,
      color: "#46BFBD",
    },
  ];
  const data12 = [
    {
      name: "Group A",
      value: 4000,
      color: "#F7464A",
    },
    {
      name: "Group B",
      value: 3000,
      color: "#FDB45C",
    },
    {
      name: "Group C",
      value: 2000,
      color: "#46BFBD",
    },
  ];
  

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default ({ aspect, title }) =>{
  return (
      <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} >
                    <Typography>
                        <PieChart width={240} height={250}>
                            <Pie
                            
                            data={data02}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={1}
                            fill='#82ca9d'
                            label
                            />
                </PieChart>
                    </Typography>
                </Grid>
                <Grid item  xs={12} sm={6} md={3} >
                    <Typography>
                        <PieChart width={240} height={250}>
                            <Pie
                            data={data02}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={45}
                            fill="#82ca9d"
                            label
                            />
                        </PieChart>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Typography>
                        <RadarChart outerRadius={90} width={240} height={250} data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                    <Radar
                                    name="Mike"
                                    dataKey="A"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                    fillOpacity={0.6}
                                    />
                                    <Radar
                                    name="Lily"
                                    dataKey="B"
                                    stroke="#82ca9d"
                                    fill="#82ca9d"
                                    fillOpacity={0.6}
                                    />
                        </RadarChart>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Typography>
                        <PieChart width={240} height={250}>
                            <Pie
                            data={data10}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={45}
                            fill="#82ca9d"
                            label
                            />
                        
                            <Pie
                            data={data11}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            fill="#82ca9d"
                            label
                            outerRadius={60}
                            />
                            <Pie
                            data={data12}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={1}
                            fill="#82ca9d"
                            label
                            outerRadius={20}
                            />
                        </PieChart>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
      </>
  );
}
