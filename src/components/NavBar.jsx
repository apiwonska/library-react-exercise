import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const NavBar = () => (
  <Box>
    <AppBar position="static">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="white"
          underline="none"
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Library
        </Link>
        <Button color="inherit" component={RouterLink} to={'/add-book'}>
          Add Book
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
