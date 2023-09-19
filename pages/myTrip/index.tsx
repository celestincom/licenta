import router from "next/router";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import useRequest from "@/hooks/useRequest";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import Nav from "@/components/Layout/components/Nav";
import NewTravelComponent from "@/components/Layout/components/NewTravel";
import { CircularProgress, Typography } from "@mui/material";
import LoadingButton from "@/components/shared/buttons/LoadingButton";
import CardSlider from "@/components/Layout/components/cardSlider";
import dynamic from "next/dynamic";
import LastTravelComponent from "@/components/Layout/components/LastTravel";

export default function NewTravel() {
  const [user, setUser] = useLocalStorage("user", { id: "", hasProfile: true });
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2023-04-25"));
  const [tripResponse, setTripResponse] = useState({
    city: "",
    nr_days: "",
    start_date: "",
    end_date: "",
    objectives: [
      {
        categorie_mare: "",
        categorie_mica: "",
        city: "",
        descriere: "",
        img: "",
        latitude: "",
        longitude: "",
        nume: "",
        rating: "",
        trasaturi: "",
        reviews: 0,
      },
    ],
  });
  const [trip, setTrip] = useState(0);
  const [number, setNumber] = useState(0);

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

    getLastHistory();
  }, []);

  const { request: getLastHistory } = useRequest({
    url: "/history/last-history",
    method: "post",
    body: { userId: user.id },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {
      setTripResponse(response.data);
      setTrip(2);
    },
    onError(error, data) {
      setTrip(1);
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  useEffect(() => {
    // console.log(value);
    console.log(tripResponse);
  }, [value, trip, tripResponse, number]);

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div style={{ padding: "10vh 0vh 5vh 0vh" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              // style={{
              //   width: "80vw",
              //   minHeight: "20vh",
              //   backgroundColor: "#407596",
              //   borderRadius: "20px",
              //   boxShadow: "5px 10px #888888",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              // }}
              className={styles.gradient}
            >
              {trip === 0 && <CircularProgress color="secondary" />}
              {trip === 1 && (
                <div>
                  <NewTravelComponent setTrip={setTrip} />
                </div>
              )}
              {trip === 2 && tripResponse && (
                <div style={{ padding: "5vh" }}>
                  <LastTravelComponent
                    setTrip={setTrip}
                    number={number}
                    setNumber={setNumber}
                    tripResponse={tripResponse}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
