import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Delete from '@mui/icons-material/Delete';

const BookItem = ({ id, title, author, handleDelete, isRemoving }) => (
  <Paper elevation={5}>
    <Box padding={2} marginY={3}>
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <Typography>{author}</Typography>
      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <LoadingButton
          loading={isRemoving}
          loadingPosition="start"
          variant="contained"
          sx={{ ml: 'auto', mr: 2 }}
          startIcon={<Delete fontSize="small" />}
          onClick={() => handleDelete(id)}
        >
          Delete
        </LoadingButton>
        <Button
          variant="contained"
          component={RouterLink}
          to={`/update-book/${id}`}
        >
          Update
        </Button>
      </Box>
    </Box>
  </Paper>
);

export default BookItem;
