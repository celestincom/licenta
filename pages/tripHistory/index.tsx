import router from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useRequest from "@/hooks/useRequest";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import Nav from "@/components/Layout/components/Nav";
import NewTravelComponent from "@/components/Layout/components/NewTravel";
import { CircularProgress, Typography } from "@mui/material";
import HistoryComponent from "@/components/Layout/components/expandableCard";
import ExpandableCard from "@/components/Layout/components/expandableCard";

export default function NewTravel() {
  const [user, setUser] = useLocalStorage("user", { id: "", hasProfile: true });
  const [historyResponse, setHistoryResponse] = useState([
    {
      city: "",
      nr_days: "",
      start_date: "",
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
        },
      ],
    },
  ]);
  const [waiting, setWaiting] = useState(1);

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

    getHistory();
  }, []);

  const { request: getHistory } = useRequest({
    url: "/history/user-history",
    method: "post",
    body: { userId: user.id },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {
      setHistoryResponse(response.data);
      setWaiting(0);
    },
    onError(error, data) {
      // setTrip(1);
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

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
              //   flexDirection: "column",
              // }}
              className={styles.gradient}
            >
              {waiting === 1 && (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress color="secondary" />
                </div>
              )}
              {waiting === 0 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFF",
                      fontSize: "40px",
                      fontWeight: 600,
                      padding: "5vh 2vh 5vh 2vh",
                    }}
                  >
                    Istoricul de calatorii
                  </Typography>

                  <div style={{display: 'flex', width: '100%', padding: '0vh 10%'}}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFF",
                      fontSize: "20px",
                      fontWeight: 600,
                      padding: "5vh 2vh 5vh 2vh",
                    }}
                  >
                    Felicitari, ai ajuns la un numar de {historyResponse.length} calatorii. Iti multumim ca ai ales Bee Trip!
                  </Typography>
                  </div>

                  <div style={{width: '80%', paddingBottom: '5vh'}}>
                    {historyResponse.map((tripResponse, index) => {
                      return <ExpandableCard key={index} tripResponse={tripResponse} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
