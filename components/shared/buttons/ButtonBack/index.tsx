import { Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface ButtonBackInterface {
  backBtn: (() => void) | undefined;
  spacingTop?: number;
}

function ButtonBack({ backBtn, spacingTop }: ButtonBackInterface) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        marginTop: `${spacingTop}px` || '5px',
      }}
      onClick={backBtn}
    >
      <KeyboardArrowLeftIcon
        sx={{
          cursor: 'pointer',
          fill: 'black',
          color: 'black',
          fontSize: '20px',
        }}
      />
      <Typography variant='h2' sx={{ color: 'rgb(17, 3, 3)', fontSize: '18px', fontWeight: '600' }}>
        Inapoi
      </Typography>
    </div>
  );
}
export default ButtonBack;
