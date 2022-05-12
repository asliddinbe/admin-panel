import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import GppBadIcon from '@mui/icons-material/GppBad';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #2e7d32',
    fontSize: 16,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    padding: '4px 0px 4px 10px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.success.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.success.main,
    },
  },
}));
const BootstrapInput1 = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ed6c02',
    fontSize: 16,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    padding: '4px 0px 4px 10px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.warning.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.warning.main,
    },
  },
}));

const BootstrapInput2 = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #d32f2f',
    fontSize: 16,
    transition: theme.transitions.create([
      'border-color',
      'color',
      'box-shadow',
    ]),
    padding: '4px 0px 4px 10px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`,
      color: theme.palette.error.main,
    },
  },
}));




export default () => {
  return (
    <>
      <FormControl variant="standard" sx={{ width: '100%', mt: '18px' }}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: '800', color: '#333333', width: '100%', fontFamily: '"Gill Sans", sans-serif', fontSize: '18px' }}>
          Input with success
        </InputLabel>
        <BootstrapInput defaultValue="John" type="password" id="bootstrap-input" endAdornment={<InputAdornment position="end"><CheckIcon sx={{color:'#2e7d32'}} /></InputAdornment>} />
      </FormControl>

      <FormControl variant="standard" sx={{ width: '100%', mt: '18px' }}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: '800', color: '#333333', width: '100%', fontFamily: '"Gill Sans", sans-serif', fontSize: '18px' }}>
          Input with warning
        </InputLabel>
        <BootstrapInput1 defaultValue="John" type="password" id="bootstrap-input" endAdornment={<InputAdornment position="end"><WarningIcon sx={{color:'#ed6c02'}}  /></InputAdornment>} />
      </FormControl>

      <FormControl variant="standard" sx={{ width: '100%', mt: '18px' }}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontWeight: '800', color: '#333333', width: '100%', fontFamily: '"Gill Sans", sans-serif', fontSize: '18px' }}>
          Input with error
        </InputLabel>
        <BootstrapInput2 defaultValue="John" type="password" id="bootstrap-input" endAdornment={<InputAdornment position="end"><GppBadIcon sx={{color:'#d32f2f'}}  /></InputAdornment>} />
      </FormControl>
    </>
  );
}
