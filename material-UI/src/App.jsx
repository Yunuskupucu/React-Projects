import { Grid } from '@mui/material';

function App() {
  return (
    <>
      <Grid container spacing={2} sx={{ height: '100vh' }}>
        <Grid item xs={4} sx={{ backgroundColor: 'lightblue', height: '100%' }}>
          Sol İçerik
        </Grid>

        <Grid
          item
          xs={8}
          sx={{ backgroundColor: 'lightgreen', height: '100%' }}
        >
          Sağ İçerik
        </Grid>
      </Grid>
    </>
  );
}

export default App;
