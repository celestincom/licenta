import { Box } from '@mui/material';
import Navbar from './components/Navbar';

const Layout = ({ children }: any) => {
  return (
    <Box
      sx={{
        width: '90vw',
        minHeight: {
          xs: 'calc(100vh - 185px)',
          md: 'calc(100vh - 115px)',
        },
        ovwerflowX: 'hidden',
        ovwerflowY: 'hidden',
        backgroundColor: '#547195',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '115px',
        mx: 'auto',
      }}
    >
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
