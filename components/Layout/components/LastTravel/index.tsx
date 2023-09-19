import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import CardSlider from "../cardSlider";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import LoadingButton from "@/components/shared/buttons/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import useRequest from "@/hooks/useRequest";
import styles from "./styles.module.css";

export default function LastTravelComponent({
  tripResponse,
  setTrip,
  setNumber,
  number,
}: {
  tripResponse: any;
  setTrip: any;
  setNumber: any;
  number: any;
}) {
  const Map = useMemo(
    () =>
      dynamic(() => import("../../../../components/Map/index"), {
        ssr: false,
      }),
    []
  );
  const [open, setOpen] = React.useState(false);
  const [objectivesResponse, setObjectivesResponse] = React.useState([]);
  const [oldObjectiveId, setOldObjectiveId] = React.useState("");
  const [newObjectiveId, setNewObjectiveId] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getObjectives();
  }, []);

  const { request: getObjectives } = useRequest({
    url: "/objectives/get",
    method: "post",
    body: { city: "Bucuresti" },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {
      setObjectivesResponse(response.data);
      console.log(response.data);
    },
    onError(error, data) {
      // setTrip(1);
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  const { request: changeObjective } = useRequest({
    url: "/history/change",
    method: "post",
    body: {
      oldObjectiveId: oldObjectiveId,
      historyId: tripResponse.id,
      newObjectiveId: newObjectiveId,
    },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {
      setObjectivesResponse(response.data);
      console.log(response.data);
    },
    onError(error, data) {
      // setTrip(1);
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  const transform = (categorie: any) => {
    if (categorie === "art") return "Arta";
    else if (categorie === "colective_sports") return "Sport colectiv";
    else if (categorie === "individual_sports") return "Sport individual";
    else if (categorie === "escape_room") return "Escape Room";
    else if (categorie === "malls") return "Mall";
    else if (categorie === "monumets") return "Monumente";
    else if (categorie === "museum") return "Muzeu";
    else if (categorie === "parks") return "Parcuri";
    else if (categorie === "relax_activities") return "Activitati de relaxare";
    else if (categorie === "religion") return "Religie";
    else if (categorie === "shows") return "Show-uri";
    else if (categorie === "sights") return "In trecere";
    else if (categorie === "walks") return "Plimbari usoare";

    return categorie;
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
              padding: "2vh",
            }}
          >
            Calatoria mea
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "6vh 2vh",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Detalii calatorie
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontSize: "20px",
                fontWeight: 400,
                paddingLeft: "10px",
              }}
            >
              Orasul in care are loc: {tripResponse.city}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontSize: "20px",
                fontWeight: 400,
                paddingLeft: "10px",
              }}
            >
              Numarul de zile petrecute: {tripResponse.nr_days}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontSize: "20px",
                fontWeight: 400,
                paddingLeft: "10px",
              }}
            >
              Ziua de inceput: {new Date(tripResponse.start_date).getDate()}.
              {new Date(tripResponse.start_date).getMonth() + 1}.
              {new Date(tripResponse.start_date).getFullYear()}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontSize: "20px",
                fontWeight: 400,
                paddingLeft: "10px",
              }}
            >
              Ziua de sfarsit: {new Date(tripResponse.end_date).getDate()}.
              {new Date(tripResponse.end_date).getMonth() + 1}.
              {new Date(tripResponse.end_date).getFullYear()}
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "40px",
          }}
        >
          <CardSlider objectives={tripResponse.objectives} />
          <Map />
        </div>
        <div style={{ padding: "20px" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#FFF",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            Scurta descriere a obiectivelor
          </Typography>

          <div>
            {tripResponse.objectives.map((obj: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{ display: "grid", gridTemplateColumns: "9fr 1fr" }}
                >
                  <div style={{ padding: "10px 10px 50px 10px" }}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#FFF",
                        fontSize: "20px",
                        fontWeight: 800,
                        padding: "10px 0px",
                      }}
                    >
                      {obj.nume}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#FFF",
                        fontSize: "18px",
                        fontWeight: 400,
                        textAlign: 'justify'
                      }}
                    >
                      {obj.descriere}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "30px",
                    }}
                  >
                    <EditIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        handleOpen();
                        setOldObjectiveId(tripResponse.objectives[index].id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 20px",
          }}
        >
          <LoadingButton
            handleClick={() => {
              setTrip(1);
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              O noua calatorie
            </Typography>
          </LoadingButton>
        </div>
        <div style={{ width: "100%", height: "100%" }}></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            maxHeight: "80vh",
            // bgcolor: "#5d859e",
            border: "2px solid #000",
            // boxShadow: 24,
            // p: 4,
            borderRadius: "20px",
            overflowY: "scroll",
          }}
        >
          <Box className={styles.gradient}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ paddingLeft: "8px" }}
            >
              Alege obiectivul cu care doresti sa inlocuiesti
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, paddingLeft: "8px" }}
            >
              Fa click pe obiectivul dorit.
            </Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {objectivesResponse.map((item: any, index: any) => {
                return (
                  <div key={index} style={{ padding: "8px" }}>
                    <Card
                      variant="outlined"
                      sx={{
                        borderRadius: "20px",
                        boxShadow: "5px 5px #aaaaaa",
                        height: "390px",
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {transform(item.categorie_mica)}
                        </Typography>
                        <img src={item.img} width="190px" height="160px" />
                        <p style={{ width: "190px" }}>{item.nume}</p>
                        <br></br>
                        <Typography>
                          Rating: {parseFloat(item.rating)} ({item.reviews}){" "}
                        </Typography>
                        <Typography variant="body2" sx={{ width: "190px" }}>
                          {item.descriere.length < 50
                            ? item.descriere
                            : item.descriere.substr(0, 50) + "..."}
                          <br />
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => {
                            //@ts-ignore
                            setNewObjectiveId(objectivesResponse[index].id);
                            if (newObjectiveId != "") {
                              changeObjective();
                              window.location.reload();
                            }
                          }}
                        >
                          Alege
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
