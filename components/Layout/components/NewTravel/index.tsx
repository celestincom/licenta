import { NextPage } from "next";
import router from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useRequest from "@/hooks/useRequest";
import { answersEndpoints } from "@/entities/answers/answers.endpoints";
import useLocalStorage from "@/hooks/useLocalStorage";
import Navbar from "@/components/Layout/components/Navbar";
import { Box, TextField, Typography } from "@mui/material";
import TextFieldComponent from "@/components/shared/TextFieldComponent";
import LoadingButton from "@/components/shared/buttons/LoadingButton";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function NewTravelComponent({ setTrip }: { setTrip: any }) {
  const [user, setUser] = useLocalStorage("user", { id: "", hasProfile: true });
  const [state, setState] = useState({
    selection1: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection1",
    },
  });

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      console.log("No user in localStorage");
      router.push("/login");
    } else if (localStorage.getItem("user")) {
      let user: any = {};
      if (typeof window != "undefined") {
        user = JSON.parse(localStorage.getItem("user") || "");
      }
    }
  }, []);

  const days = (date_1: any, date_2: any) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
    return TotalDays;
  };

  useEffect(() => {
    // console.log(state);
  }, [state]);

  const { request: getActivities } = useRequest({
    url: "/objectives/get-activities",
    method: "post",
    body: {
      userId: user.id,
      start_date: state.selection1.startDate,
      end_date: state.selection1.endDate,
      nr_days: days(state.selection1.endDate, state.selection1.startDate),
    },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {},
    onError(error, data) {},
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Box className={styles.image}></Box>
        <div style={{ padding: "5vh 0vh" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              sx={{
                padding: "10px",
                color: "#d5d2d2",
                fontSize: "28px",
                fontWeight: 600,
              }}
            >
              Vrei sa te bucuri de o noua vacanta?
            </Typography>
          </div>
          <Typography
            variant="h2"
            sx={{
              padding: "30px 30px 30px 30px",
              color: "#d5d2d2",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Ajuta-ne sa aflam mai multe despre urmatoarea ta excursie, iar noi o
            organizam dupa bunul tau plac!
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#919191",
                borderRadius: "20px",
                padding: "10px",
                // padding: 3rem 5rem;
                // boxShadow: "0.5rem 0.5rem 0rem #5c5c5c",
                // border: "4px solid rgb(39, 39, 39)",
              }}
              // className={styles.gradient}
            >
              <Typography
                variant="h2"
                sx={{
                  padding: "20px 0px",
                  color: "#FFF",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Unde doresti sa mergi?
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  padding: "10px 10px 20px 10px",
                  color: "#FFF",
                  fontSize: "16px",
                  fontWeight: 600,
                  width: "100%",
                }}
              >
                (Momentan aceasta sectiune va <br /> ramane blocata, Bucurestii
                fiind <br /> singurul oras accesibil acum)
              </Typography>
              <TextField disabled value={"Bucuresti"} variant="filled" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#919191",
                borderRadius: "20px",
                padding: "5px",
                // boxShadow: "0.5rem 0.5rem 0rem #5c5c5c",
                // border: "4px solid rgb(39, 39, 39)",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  padding: "30px",
                  color: "#FFF",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Care sunt zilele in care iti <br /> doresti sa aiba loc
                calatoria?
              </Typography>
              <div style={{ padding: "10px 20px" }}>
                <DateRange
                  editableDateInputs={true}
                  //@ts-ignore
                  onChange={(item) => setState({ ...state, ...item })}
                  moveRangeOnFirstSelection={false}
                  //@ts-ignore
                  ranges={[state.selection1]}
                />
              </div>
            </div>
          </div>
          {/*<div
        style={{
          display: "grid",
          gridTemplateColumns: "0.3fr 1fr 0.3fr 1fr 0.3fr",
        }}
      >
        <div></div>

         <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#919191",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              padding: "30px 30px 30px 30px",
              color: "#FFF",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Unde doresti sa mergi?
          </Typography>
          <TextField
            disabled
            value={"Bucuresti"}
            variant="filled"
            sx={{ color: "#d5d2d2", padding: "0px 20px" }}
          />
        </div>

        <div></div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#919191",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              padding: "30px",
              color: "#FFF",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Data
          </Typography>
          <div style={{padding: '10px 20px'}}>
            <DateRange
              editableDateInputs={true}
              //@ts-ignore
              onChange={(item) => setState({ ...state, ...item })}
              moveRangeOnFirstSelection={false}
              //@ts-ignore
              ranges={[state.selection1]}
            />
          </div>
        </div>

        <div></div>

      </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px 30px 0px 30px",
            }}
          >
            <LoadingButton
              handleClick={() => {
                getActivities();
                // console.log(state.selection1);
                // setTrip(2);
                window.location.reload();
              }}
            >
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
      </div>
    </>
  );
}
