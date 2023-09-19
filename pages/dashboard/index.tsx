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
import DashboardComponent from "@/components/dashboardComponent";

export default function Dashboard() {
  const [user, setUser] = useLocalStorage("user", {
    id: "",
    first_name: "",
    last_name: "",
    hasProfile: true,
  });
  // const [token, setToken] = useLocalStorage("token", {});

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let user: any = {};
      if (typeof window != "undefined") {
        user = JSON.parse(localStorage.getItem("user") || "");
      }
      setInsert((prevState: any) => {
        return {
          ...prevState,
          userId: user.id,
        };
      });
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      console.log("No user in localStorage");
      router.push("/login");
    }
    console.log(user);
  }, [user]);

  const [openModal, setOpenModal] = useState(true);
  const [qn, setqn] = useState(0);
  const [insert, setInsert] = useState({
    userId: "",
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    Q8: "",
    Q9: "",
  });

  const next = () => {
    setqn(qn + 1);
  };

  const { request: insertAnswers } = useRequest({
    url: answersEndpoints.postSaveAnswers,
    method: "post",
    body: insert,
    onSuccessMessage: "Profile data updated successfully",
    onSuccess: (response) => {
      setUser((prevState: any) => {
        return {
          ...prevState,
          hasProfile: !user.hasProfile,
        };
      });
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  const prev = () => {
    setqn(qn - 1);
  };

  // const insertAnswers = async () => {
  //   await axios
  //     .post("http://localhost:3500/answers/insert", ,{
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then(function (response) {})
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <div className={styles.container}>
        <Nav />
        {!user?.hasProfile && qn == 0 && (
          <ModalCreateProfile
            openModal={openModal}
            onClose={() => {}}
            next={next}
          />
        )}
        {!user?.hasProfile && qn == 1 && (
          <ModalCreateProfileQ1
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 2 && (
          <ModalCreateProfileQ2
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 3 && (
          <ModalCreateProfileQ3
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 4 && (
          <ModalCreateProfileQ4
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 5 && (
          <ModalCreateProfileQ5
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 6 && (
          <ModalCreateProfileQ6
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 7 && (
          <ModalCreateProfileQ7
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 8 && (
          <ModalCreateProfileQ8
            openModal={openModal}
            onClose={() => {}}
            next={next}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        {!user?.hasProfile && qn == 9 && (
          <ModalCreateProfileQ9
            openModal={openModal}
            onClose={() => {}}
            next={insertAnswers}
            prev={prev}
            qn={qn}
            insert={insert}
            setInsert={setInsert}
          />
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10vh 0vh 5vh 0vh",
          }}
        >
          <div className={styles.gradient}
            // style={{
            //   width: "80vw",
            //   minHeight: "20vh",
            //   backgroundColor: "#407596",
            //   backgroundImage: 'https://visit-romania.com/wp-content/uploads/2019/02/BUCHAREST-PANORAMIC-TOUR.jpg',
            //   borderRadius: "20px",
            //   boxShadow: "5px 10px #888888",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          >
            <DashboardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
