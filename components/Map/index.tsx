import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import icon from "./placeholder.png";
import useRequest from "@/hooks/useRequest";
import useLocalStorage from "@/hooks/useLocalStorage";
import router from "next/router";
import { Typography } from "@mui/material";

export default function Map() {
  const [user, setUser] = useLocalStorage("user", { id: "", hasProfile: true });
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
        latitude: 0,
        longitude: 0,
        nume: "",
        rating: "",
        trasaturi: "",
        reviews: 0,
      },
    ],
  });

  const markers = [
    {
      geocode: [44.42512, 26.10237],
      popUp: "Hello, I am pop up",
    },
    {
      geocode: [44.46512, 26.11237],
      popUp: "Hello, I am pop up",
    },
  ];

  const customIcon = new Icon({
    iconUrl: icon.src,
    iconSize: [38, 38],
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
      // setTrip(2);
    },
    onError(error, data) {
      // setTrip(1);
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  return (
    <MapContainer
      style={{ width: "20vw", height: "400px" }}
      center={[44.43512, 26.10237]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {tripResponse.objectives.map((marker) => (
        // @ts-ignore
        <Marker
          position={[marker.longitude, marker.latitude]}
          icon={customIcon}
        >
          <Popup>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <img
                src={marker.img}
                style={{ width: "140px", height: "110px" }}
              />
              <Typography>{marker.nume} <br/> Rating: {parseFloat(marker.rating)} ({marker.reviews}) </Typography>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
