import { Button, ButtonGroup, Checkbox, IconButton } from '@mui/material';
import './App.css';
import { BsSend } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Fingerprint } from '@mui/icons-material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { pink } from '@mui/material/colors';

function App() {
  const [loading, setLoading] = useState(false);

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

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
      <IconButton
        aria-label="fingerprint"
        color="secondary"
        onClick={() => setLoading(true)}
        loading={loading}
      >
        <Fingerprint />
      </IconButton>
      {/* Bildirim rozeti */}
      <IconButton>
        <ChatBubbleIcon fontSize="small" />
        <CartBadge badgeContent={2} color="primary" overlap="circular" />
      </IconButton>
      {/* Upload File */}
      <Button
        sx={{ marginLeft: 5 }}
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
      <br /> <br />
      {/* Button Group */}
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        variant="text"
        color="secondary"
        aria-label="Large button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      {/* checkbox */}
      <Checkbox
        inputProps={{ 'aria-label': 'controlled' }}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </>
  );
}

export default App;
