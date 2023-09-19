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
        Q7: selectedOption 
      }
    });
    console.log(insert);
    next();
  };
  
  return (
    <ModalComponent width="850px" open={openModal} handleClose={onClose}>
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
           Iti place sa simti gustul activitatilor sportive si sa depui putin efort in vacante?
        </Typography>

        <div style={{ padding: "0px 0px 0px 30px" }}>
          <RadioGroup>
            <Radio id="da1" name="radio" onChange={handleOptionChange}>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Da, sportul e
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  paddingBottom: "5px",
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                intotdeauna binevenit.
              </Typography>
              <img
                src="/photosCreateProfile/q7/sport1.jpg"
                alt="Singur"
                height="120px"
                width='200px'
              />
            </Radio>

            <Radio id="da2" name="radio" onChange={handleOptionChange}>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Da, putina miscare
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  paddingBottom: "5px",
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                nu face rau nimanui.
              </Typography>
              <img
                src="/photosCreateProfile/q7/sport2.jpg"
                alt="Prieteni"
                height="120px"
                width='200px'
              />
            </Radio>

            <Radio id="nu" name="radio" onChange={handleOptionChange}>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Nu, am venit sa ma
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  paddingBottom: "5px",
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                relaxez.
              </Typography>
              <img
                src="/photosCreateProfile/q7/chill.jpg"
                alt="Prieteni"
                height="120px"
                width='195px'
              />
            </Radio>
          </RadioGroup>
        </div>

        <div
          style={{
            paddingTop: "15px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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
