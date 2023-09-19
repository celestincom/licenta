import React, { useState } from "react";
import router, { useRouter } from "next/router";
import * as yup from "yup";
import { useFormik } from "formik";
import { NextPage } from "next";
import styles from "./styles.module.css";
import { Box, Container, Typography } from "@mui/material";
import LoadingButton from "@/components/shared/buttons/LoadingButton";
import TextFieldComponent from "@/components/shared/TextFieldComponent";
import useRequest from "@/hooks/useRequest";
import { ApiResponse } from "@/types/apiResponse";
import { enqueueSnackbar } from "notistack";

const Login: NextPage = () => {
  const validationSchema = yup.object({
    email: yup.string().email("formikEmail").required("formikEmailRequired"),
    password: yup.string().required("formikPasswordRequired"),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      // eslint-disable-next-line no-use-before-define
      login({
        body: {
          email: values.email,
          password: values.password,
        },
      });

      setLoading(false);
    },
  });

  const { request: login, pending } = useRequest({
    url: "auth/login",
    method: "post",
    local: true,
    onSuccess: (response: ApiResponse<any>) => {
      console.log("am ajuns");

      console.log(response);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token.access_token));

      console.log("am facut setItem");

      console.log("urmeaza sa dau router.push");
      router.push("/dashboard");
      console.log("am dat router.push");
      enqueueSnackbar("Logare reusita", { variant: "success" });
    },
    onError: (error) => {
      console.log("error: ",error);
    },
    hideErrorMessage: true,
  });

  return (
    <>
      <div>
        <div className={styles.container}></div>
        <Container maxWidth="xl" className={styles.gridDisplay}>
          <Box
            sx={{
              width: "100%",
              alignItems: "center",
            }}
          ></Box>

          <Box className={styles.innerBox}>
            <Box className={styles.image}></Box>

            <Box className={styles.middle}>
              <Typography sx={{ fontSize: "50px" }}>Login</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Esti pregatit de o noua calatorie aventuroasa?
              </Typography>
              <TextFieldComponent
                name="email"
                type="email"
                label="Email"
                value={formik.values.email}
                handleChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autocomplete="email"
              />
              <TextFieldComponent
                name="password"
                type="password"
                label="Parola"
                value={formik.values.password}
                handleChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                autocomplete={"current-password"}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "10px 10px",
                }}
              >
                <Typography
                  fontFamily={"Segoe UI"}
                  onClick={() => {router.push("/register")}}
                  sx={{ cursor: "pointer" }}
                >
                  Nu am un cont inca
                </Typography>
              </div>
              <LoadingButton
                handleClick={formik.handleSubmit}
                loading={pending || loading}
              >
                <Typography variant="body1">Log in</Typography>
              </LoadingButton>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              alignItems: "center",
            }}
          ></Box>
        </Container>
      </div>
    </>
  );
};
export default Login;
