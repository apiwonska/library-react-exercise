import Box from '@mui/material/Box';
import NavBar from './NavBar';
import StyledContainer from './StyledContainer';

const Layout = ({ children }) => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <NavBar />
    <Box
      component="main"
      sx={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}
    >
      <StyledContainer>{children}</StyledContainer>
    </Box>
  </Box>
);

export default Layout;
