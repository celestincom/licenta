import { Button, CircularProgress } from '@mui/material';

interface LoadingButtonInterface {
  handleClick?: (event: any) => void;
  disabled?: boolean;
  type?: 'submit';
  children?: any;
  loading?: boolean;
  style?: any;
  childrenStyle?: any;
}

function LoadingButton({
  handleClick,
  disabled,
  type,
  children,
  loading,
  style = {},
  childrenStyle = {},
}: LoadingButtonInterface) {
  return (
    <Button
      sx={[
        {
          minWidth: { sm: '200px', xs: '150px' },
          width: 'fit-content',
          minHeight: { sm: '50px', xs: '35px' },
          background: 'rgba(165, 165, 165, 0.2)',
          borderRadius: '10px',
          paddingX: '50px',
          '&:hover': { backgroundColor: '#008B8B' },
          '&:disabled': {
            color: 'gray',
            background: 'rgba(165, 165, 165, 0.1)',
          },
        },
        style,
      ]}
      variant='contained'
      onClick={handleClick}
      disabled={loading || disabled}
      type={type}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {loading && (
            <CircularProgress
              sx={{
                position: 'absolute',
                marginLeft: '-30px',
                top: 'calc(50% - 7px)',
                transform: 'translateY(-50%)',
              }}
              size={15}
            />
          )}
        </div>
        <div style={childrenStyle}>{children}</div>
      </div>
    </Button>
  );
}

export default LoadingButton;
