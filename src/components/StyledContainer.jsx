import Container from '@mui/material/Container';

const StyledContainer = ({ children }) => (
  <Container
    maxWidth="md"
    sx={{
      backgroundColor: 'rgba(255,255,255,1)',
      py: 5,
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Container>
);

export default StyledContainer;
