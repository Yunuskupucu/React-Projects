import {
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  IconButton,
  Input,
  Rating,
  TextField,
} from '@mui/material';
import './App.css';
import { BsSend } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Fingerprint } from '@mui/icons-material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import { green, grey } from '@mui/material/colors';

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
    <div className="container">
      <div>
        <Button color="secondary">Secondary</Button>
        {/* Customizing the buttons */}
        {/* button boyutu ve rengi */}
      </div>
      <div>
        <Button variant="contained" size="large">
          Login
        </Button>
      </div>
      <div>
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
      </div>
      <div>
        {/* Button içinde icon kullanımı */}
        <Button
          variant="contained"
          startIcon={<MdDelete />}
          endIcon={<BsSend />}
        >
          Delete / Send
        </Button>
      </div>
      <div>
        {/* finger button */}
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          onClick={() => setLoading(true)}
          loading={loading}
        >
          <Fingerprint />
        </IconButton>
      </div>
      <div>
        {/* Bildirim rozeti */}
        <IconButton>
          <ChatBubbleIcon fontSize="small" />
          <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </IconButton>
      </div>
      <div>
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
      </div>
      <div>
        {/* Button Group */}
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup
          variant="text"
          color="secondary"
          aria-label="Large button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        {/* checkbox */}
        <Checkbox
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            color: green[800], //çerçeve rengi
            '&.Mui-checked': {
              color: grey[600], // işaret rengi
            },
          }}
        />
      </div>
      <div>
        <Checkbox defaultChecked color="success" />
      </div>
      <div>
        {/* FAB Button */}
        <Fab aria-label="edit">
          <EditIcon />
        </Fab>
      </div>
      <div>
        {/* Rating */}
        <Rating name="size-large" defaultValue={2} size="large" />
      </div>
      <div className="text-field">
        {/* Text Field */}
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Ad Soyad"
          variant="outlined"
          sx={{
            '&.Mui-focused fieldset': {
              borderBottom: '3px solid red',
            },
          }}
        />
      </div>
      <div className="text-field">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Ad Soyad"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Tüm sınırları kaldır
                borderBottom: '3px solid red', // Sadece alt kenarı belirle
              },
            },
          }}
        />
      </div>

      <div>
        <Input
          defaultValue="Hello world"
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Input
          placeholder="Placeholder"
          inputProps={{ 'aria-label': 'controlled' }}
        />{' '}
      </div>
      <div>
        <Input error inputProps={{ 'aria-label': 'controlled' }} />
      </div>
    </div>
  );
}

export default App;
