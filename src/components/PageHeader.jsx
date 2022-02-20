import Typography from '@mui/material/Typography';

const PageHeader = ({ children }) => (
  <Typography variant="h3" component="h1" textAlign="center" marginY={2}>
    {children}
  </Typography>
);

export default PageHeader;
