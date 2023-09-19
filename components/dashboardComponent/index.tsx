import ModalCreateProfile from "@/components/CreateProfile/ModalCreateProfile";
import ModalCreateProfileQ1 from "@/components/CreateProfile/ModalCreateProfileQ1";
import ModalCreateProfileQ2 from "@/components/CreateProfile/ModalCreateProfileQ2";
import ModalCreateProfileQ3 from "@/components/CreateProfile/ModalCreateProfileQ3";
import ModalCreateProfileQ4 from "@/components/CreateProfile/ModalCreateProfileQ4";
import ModalCreateProfileQ5 from "@/components/CreateProfile/ModalCreateProfileQ5";
import ModalCreateProfileQ6 from "@/components/CreateProfile/ModalCreateProfileQ6";
import ModalCreateProfileQ7 from "@/components/CreateProfile/ModalCreateProfileQ7";
import ModalCreateProfileQ8 from "@/components/CreateProfile/ModalCreateProfileQ8";
import ModalCreateProfileQ9 from "@/components/CreateProfile/ModalCreateProfileQ9";
import { NextPage } from "next";
import router from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useRequest from "@/hooks/useRequest";
import { answersEndpoints } from "@/entities/answers/answers.endpoints";
import useLocalStorage from "@/hooks/useLocalStorage";
import Nav from "@/components/Layout/components/Nav";
import { Typography } from "@mui/material";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Calendar from "../calendar";
import DashboardLayout from "../Layout/components/dashboardLayout copy 2";

export default function DashboardComponent() {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "10vh 0vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            padding: "0px 0px 60px 0px",
            color: "#FFF",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          Bine ai venit pe Pagina Principala!
        </Typography>

        <Typography
          variant="h2"
          sx={{
            padding: "10px 0px 60px 0px",
            color: "#FFF",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Mai jos se pot observa 4 carduri, care nu fac altceva
          decat sa ofere un "rezumat" al aplicatiei.<br /> Extinde cardurile cu un
          click pe ele pentru mai multe detalii privind unul din
          subiectele de acolo.
        </Typography>
        <div 
        // style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}
        >
          <div>
            <DashboardLayout />
          </div>
          {/* <div style={{ display: "flex", paddingTop: "30px" }}>
            <Calendar />
          </div> */}
        </div>
      </div>
    </>
  );
}
