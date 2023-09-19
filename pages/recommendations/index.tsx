import router from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useRequest from "@/hooks/useRequest";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import Nav from "@/components/Layout/components/Nav";
import NewTravelComponent from "@/components/Layout/components/NewTravel";
import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandableCard from "@/components/Layout/components/expandableCard";

export default function NewTravel() {
  const [user, setUser] = useLocalStorage("user", { id: "", hasProfile: true });
  const [country, setCountry] = useState(null);
  const [recommendations, setRecommendations] = useState([
    { country: "", img: "", info: "", name: "", rating: 0 },
  ]);

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

    fetch("https://get.geojs.io/v1/ip/country.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCountry(data.name);
        console.log(data.name);
      });
  }, []);

  useEffect(() => {
    if (country) {
      getRecommendations();
    }
  }, [country]);

  const { request: getRecommendations } = useRequest({
    url: "/reccomandation/country",
    method: "post",
    body: { country: country },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {
      console.log(response.data);
      setRecommendations(response.data);
    },
    onError(error, data) {},
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div style={{ paddingTop: "10vh" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              // style={{
              //   width: "80vw",
              //   minHeight: "20vh",
              //   backgroundColor: "#407596",
              //   borderRadius: "20px",
              //   boxShadow: "5px 10px #888888",
              // }}
              className={styles.gradient}
            >
              {!country && (
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
              {country && (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFF",
                      fontSize: "40px",
                      fontWeight: 600,
                      padding: "3vh",
                    }}
                  >
                    Recomandari din tara mea
                  </Typography>
                  {recommendations &&
                    recommendations.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 5fr",
                            padding: "20px",
                          }}
                        >
                          <div>
                            <img src={item.img} width="100%" />
                          </div>
                          <div
                            style={{
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              padding: "10px 10px 50px 10px",
                            }}
                          >
                            <Typography
                              variant="h2"
                              sx={{
                                color: "#FFF",
                                fontSize: "20px",
                                fontWeight: 800,
                                padding: "10px 0px",
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="h2"
                              sx={{
                                color: "#FFF",
                                fontSize: "18px",
                                fontWeight: 400,
                                textAlign: "justify",
                              }}
                            >
                              {item.info}
                            </Typography>
                          </div>
                        </div>
                      );
                    })}
                  {/* <ExpandableCard /> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
