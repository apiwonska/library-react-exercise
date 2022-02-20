import Alert from '@mui/material/Alert';

const StyledAlert = ({ severity, message = '' }) => {
  if (severity === 'error')
    return (
      <Alert severity="error" sx={{ my: 5 }}>
        {message || 'Error occurred'}
      </Alert>
    );
  if (severity === 'success')
    return (
      <Alert severity="success" sx={{ my: 5 }}>
        {message || 'Success'}
      </Alert>
    );
  return null;
};

export default StyledAlert;
