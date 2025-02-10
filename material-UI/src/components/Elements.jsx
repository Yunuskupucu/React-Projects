import {
  Avatar,
  AvatarGroup,
  Backdrop,
  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  Fab,
  IconButton,
  Input,
  Rating,
  Snackbar,
  TextField,
} from '@mui/material';
import '../App.css';
import { BsSend } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Fingerprint } from '@mui/icons-material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import { deepPurple, green, grey } from '@mui/material/colors';
import avatar from '../assets/avatar.jpeg';
import CloseIcon from '@mui/icons-material/Close';

const Elements = () => {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
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
      <div>
        <Avatar
          alt="Yunus Emre Küpücü"
          src={avatar}
          sx={{ width: 56, height: 56 }}
        />
        <Avatar
          variant="rounded"
          sx={{ bgcolor: deepPurple[500], marginLeft: '30px' }}
        >
          YEK
        </Avatar>
      </div>
      <div>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </div>
      <div>
        <Button onClick={handleOpen}>Show backdrop</Button>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="success" size="3rem" />
        </Backdrop>
      </div>
      <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Bildirim"
          action={action}
        />
      </div>
      {/* <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div> */}
    </div>
  );
};

export default Elements;
