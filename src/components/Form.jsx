import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';

const Form = ({
  btnText,
  defaultValues = { title: '', author: '' },
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ my: 5 }}
        textAlign="right"
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.title}
                  helperText={
                    errors.title?.type === 'required' &&
                    'This field is required'
                  }
                  variant="standard"
                  autoFocus
                  fullWidth
                  label="Title"
                  value={field.value || ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="author"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.author}
                  helperText={
                    errors.author?.type === 'required' &&
                    'This field is required'
                  }
                  fullWidth
                  label="Author"
                  value={field.value || ''}
                  variant="standard"
                />
              )}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 5 }}>
          {btnText}
        </Button>
      </Box>
    </>
  );
};

export default Form;
