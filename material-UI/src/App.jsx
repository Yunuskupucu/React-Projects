import { Button, IconButton } from '@mui/material';
import './App.css';
import { BsSend } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Fingerprint } from '@mui/icons-material';

function App() {
  return (
    <>
      <h1>Helloooo</h1>

      <Button color="secondary">Secondary</Button>
      {/* Customizing the buttons */}
      {/* button boyutu ve rengi */}
      <Button variant="contained" size="large">
        Login
      </Button>
      <Button
        sx={{
          backgroundColor: 'black',
          color: 'white',
          ':hover': { backgroundColor: 'gray' },
          border: 'black',
        }}
        variant="outlined"
      >
        Register
      </Button>

      {/* Button içinde icon kullanımı */}
      <Button variant="contained" startIcon={<MdDelete />} endIcon={<BsSend />}>
        Delete / Send
      </Button>
      {/* finger button */}
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
    </>
  );
}

export default App;
