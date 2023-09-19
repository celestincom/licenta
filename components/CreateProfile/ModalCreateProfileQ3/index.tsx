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
        Q3: selectedOption 
      }
    });
    console.log(insert);
    next();
  };
  
  return (
    <ModalComponent width='760px' open={openModal} handleClose={onClose}>
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

        <Typography
          variant="h2"
          sx={{
            padding: "30px 0px 0px 30px",
            color: "rgba(9, 9, 10, 0.88)",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Ce ai face primul lucru atunci cand ajungi?
        </Typography>

        <div style={{padding: "0px 0px 0px 30px"}}>
        <RadioGroup>
          <Radio id="somn" name="radio" onChange={handleOptionChange}>
            <Typography
              variant="h2"
              sx={{
                paddingBottom: '10px',
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Dorm
            </Typography>
            <img src="/photosCreateProfile/thirdQuestion/sleep.jpg" alt="Dorm" height="100px" />
          </Radio>

          <Radio id="vizitat" name="radio" onChange={handleOptionChange}>
            <Typography
              variant="h2"
              sx={{
                paddingBottom: '10px',
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Ma apuc de vizitat
            </Typography>
            <img
              src="/photosCreateProfile/thirdQuestion/travelling.jpg"
              alt="Vizitez"
              height="100px"
              width="180px"
            />
          </Radio>

          <Radio id="stat la cazare" name="radio" onChange={handleOptionChange}>
            <Typography
              variant="h2"
              sx={{
                paddingBottom: '10px',
                color: "rgba(9, 9, 10, 0.88)",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Raman la cazare
            </Typography>
            <img
              src="/photosCreateProfile/thirdQuestion/tv.jpg"
              alt="Stau la cazare"
              height="100px"
            />
          </Radio>
        </RadioGroup>
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
