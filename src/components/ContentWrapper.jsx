import Box from '@mui/material/Box';

const ContentWrapper = ({ children }) => (
  <Box maxWidth={700} width="100%" marginX="auto">
    {children}
  </Box>
);

export default ContentWrapper;
