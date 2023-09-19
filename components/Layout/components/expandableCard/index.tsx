import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
// import { DateRange } from "react-date-range";
import styles from "./styles.module.css";
import { Typography } from "@mui/material";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

export default function ExpandableCard({
  tripResponse,
}: {
  tripResponse: any;
}) {
  // const getEndDate = (date: any, nr_days: any) => {
  //   let end_date = date.getTime() + nr_days * 1000 * 3600 * 24;
  //   return end_date;
  // };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ padding: "2vh" }}>
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={{
            borderRadius: "1rem",
            // boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          }}
          className={styles.card}
        >
          <motion.h2 layout="position">Oras: {tripResponse.city}</motion.h2>
          <motion.h2 layout="position">
            Numar de zile: {tripResponse.nr_days}
          </motion.h2>
          <motion.h2 layout="position">
            Zi de inceput: {new Date(tripResponse.start_date).getDate()}.
            {new Date(tripResponse.start_date).getMonth() + 1}.
            {new Date(tripResponse.start_date).getFullYear()}
          </motion.h2>
          <motion.h2 layout="position">
            Zi de sfarsit: {new Date(tripResponse.end_date).getDate()}.
            {new Date(tripResponse.end_date).getMonth() + 1}.
            {new Date(tripResponse.end_date).getFullYear()}
          </motion.h2>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="expand"
            >
              {tripResponse.objectives.map((obj: any, index: any) => {
                return (
                  <div key={index} style={{ padding: "10px 10px 50px 10px" }}>
                    <div style={{ display: "flex" }}>
                      <img
                        src={obj.img}
                        style={{ paddingRight: "3vw" }}
                        width="300px"
                        height="270px"
                      />
                      <div>
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
                            textAlign: "justify",
                          }}
                        >
                          {obj.descriere}
                        </Typography>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
