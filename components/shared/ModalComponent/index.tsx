import { Box, Modal } from "@mui/material";
import styles from "./styles.module.css";

const ModalComponent = ({ width, children, open, handleClose, style }: any) => {
  if (!open) {
    return null;
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: width,
        }}
        className={styles.gradient}
        style={style}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
