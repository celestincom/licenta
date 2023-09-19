import { Box, Typography } from "@mui/material";
import ButtonBack from "../../shared/buttons/ButtonBack";
import LoadingButton from "../../shared/buttons/LoadingButton";
import ModalComponent from "../../shared/ModalComponent";
import { Radio, RadioGroup } from "../../shared/RadioGroup";
import { useState } from "react";

interface ModalCreateProfileInterface {
  openModal: boolean;
  onClose: () => void;
  next: () => void;
  prev: () => void;
  qn: number;
  insert: any;
  setInsert: any;
}

export default function ModalCreateProfile({
  openModal,
  onClose,
  next,
  prev,
  qn,
  insert,
  setInsert
}: ModalCreateProfileInterface) {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.id);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Selected option: ", selectedOption);
    setInsert((prevState: any) => {
      return {
        ...prevState,
        Q2: selectedOption 
      }
    });
    console.log(insert);
    next();
  };
  return (
    <ModalComponent width='740px' open={openModal} handleClose={onClose}>
      <div>
        <Typography
          variant="h2"
          sx={{
            color: "rgba(9, 9, 10, 0.88)",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {qn}/9
        </Typography>
        <Typography
          variant="h2"
          sx={{
            paddingBottom: "0px",
            color: "rgba(9, 9, 10, 0.88)",
            fontSize: "40px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Profil de calatorie
        </Typography>

        <div style={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          variant="h2"
          sx={{
            padding: "30px 0px 0px 30px",
            color: "rgba(9, 9, 10, 0.88)",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          In ce categorie de varsta te regasesti?
        </Typography>

        <div style={{padding: "0px 0px 0px 30px"}}>
        <RadioGroup>
          <Radio id="tanar" name="radio" onChange={handleOptionChange}>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Tanar
            </Typography>
            <img src="/photosCreateProfile/firstQuestion/friends.jpg" alt="Singur" height="100px" />
          </Radio>

          <Radio id="adult" name="radio" onChange={handleOptionChange}>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Adult
            </Typography>
            <img
              src="/photosCreateProfile/secondQuestion/adult.webp"
              alt="Prieteni"
              height="100px"
            />
          </Radio>

          <Radio id="batran" name="radio" onChange={handleOptionChange}>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Batran
            </Typography>
            <img
              src="/photosCreateProfile/secondQuestion/old.jpg"
              alt="Partener"
              height="100px"
            />
          </Radio>
        </RadioGroup>
        </div>
        </div>

        <div style={{ paddingTop: "15px", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <ButtonBack backBtn={prev} />
          <LoadingButton handleClick={handleSubmit}>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Inainte
            </Typography>
          </LoadingButton>
        </div>
      </div>
    </ModalComponent>
  );
}
