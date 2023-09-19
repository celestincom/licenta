import { Box, Typography } from "@mui/material";
import ButtonBack from "../../shared/buttons/ButtonBack";
import LoadingButton from "../../shared/buttons/LoadingButton";
import ModalComponent from "../../shared/ModalComponent";
import { Radio, RadioGroup } from "../../shared/RadioGroup";
import { useState } from "react";

interface ModalCreateProfileInterface {
  openModal: boolean;
  onClose: () => void;
  next: ({}) => void;
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
  setInsert,
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
        Q9: selectedOption,
      };
    });
    console.log(insert);
    if (insert.Q9 != "") {
      next({
        body: insert,
      });
    }
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
          Iti place sa iti petreci timpul la cazare sau vizitand obiective
          turistice?
        </Typography>

        <div style={{ padding: "0px 0px 0px 30px" }}>
          <RadioGroup>
            <Radio id="2" name="radio" onChange={handleOptionChange}>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Am venit mai mult
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  paddingBottom: "29px",
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                pentru relaxare.
              </Typography>
              <img
                src="/photosCreateProfile/q9/relax.jpg"
                alt="Singur"
                height="120px"
                width="200px"
              />
            </Radio>

            <Radio id="3" name="radio" onChange={handleOptionChange}>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Imi place sa imbin
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                statul la cazare cu
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
                vizitatul.
              </Typography>
              <img
                src="/photosCreateProfile/q9/both.jpg"
                alt="Prieteni"
                height="120px"
                width="200px"
              />
            </Radio>

            <Radio id="4" name="radio" onChange={handleOptionChange}>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Am venit in vacanta
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  paddingBottom: "29px",
                  color: "rgba(9, 9, 10, 0.88)",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                pentru a vizita.
              </Typography>
              <img
                src="/photosCreateProfile/q9/visit.jpg"
                alt="Prieteni"
                height="120px"
                width="195px"
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
              Finalizeaza
            </Typography>
          </LoadingButton>
        </div>
      </div>
    </ModalComponent>
  );
}
