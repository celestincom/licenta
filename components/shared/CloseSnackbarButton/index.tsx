import { IconButton } from '@mui/material';
import { SnackbarKey, useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  snackKey: SnackbarKey;
}

export default function CloseSnackbarButton({ snackKey }: Props) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={() => closeSnackbar(snackKey)}
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  );
}
