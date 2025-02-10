import { Grid } from '@mui/material';
import Elements from './components/Elements';

function App() {
  return (
    <>
      <Grid container spacing={2} sx={{ height: '100vh' }}>
        <Grid xs={4} sx={{ backgroundColor: 'black', height: '100%' }}>
          Sol İçerik
        </Grid>
        <Grid xs={8}>
          <Elements />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
