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
import CardSlider from "@/components/Layout/components/cardSlider";

export default function Sugestions() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div style={{ paddingTop: "10vh" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "80vw",
                minHeight: "20vh",
                backgroundColor: "#407596",
                borderRadius: "20px",
                boxShadow: "5px 10px #888888",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <CardSlider /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
