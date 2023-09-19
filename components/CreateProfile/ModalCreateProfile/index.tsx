import { Box, Typography } from "@mui/material";
import LoadingButton from "../../shared/buttons/LoadingButton";
import ModalComponent from "../../shared/ModalComponent";

interface ModalCreateProfileInterface {
  openModal: boolean;
  onClose: () => void;
  next: () => void;
}

export default function ModalCreateProfile({
  openModal,
  onClose,
  next,
}: ModalCreateProfileInterface) {
  return (
    <ModalComponent width='40%' open={openModal} handleClose={onClose}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "8px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            paddingBottom: "0px",
            color: "rgba(9, 9, 10, 0.88)",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Se pare ca nu ti-ai creat un profil inca!
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0px'}}>
          <img
            src="/photosCreateProfile/createProfile/travelling_profile_1.jpg"
            alt="Logo"
            height="100px"
          />
          <Typography
            variant="h2"
            sx={{
              padding: "0px 40px",
              color: "rgba(9, 9, 10, 0.88)",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Ce mai astepti?
          </Typography>
          <img
            src="/photosCreateProfile/createProfile/travelling_profile_2.jpg"
            alt="Logo"
            height="100px"
          />
        </div>
        <LoadingButton
        handleClick={next}>
          <Typography
            variant="h2"
            sx={{
              color: "rgba(9, 9, 10, 0.88)",
              fontSize: "15px",
              fontWeight: 800,
            }}
          >
            Creeaza
          </Typography>
        </LoadingButton>
      </div>
    </ModalComponent>
  );
}
