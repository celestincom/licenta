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

const Register: NextPage = () => {
  const validationSchema = yup.object({
    email: yup.string().email("formikEmail").required("formikEmailRequired"),
    password: yup.string().required("formikPasswordRequired"),
    first_name: yup.string(),
    last_name: yup.string(),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      // eslint-disable-next-line no-use-before-define
      register({
        body: {
          email: values.email,
          password: values.password,
          first_name: values.first_name,
          last_name: values.last_name,
        },
      });

      setLoading(false);
    },
  });

  const { request: register, pending } = useRequest({
    url: "auth/register",
    method: "post",
    local: true,
    onSuccess: (response: ApiResponse<any>) => {
      console.log(response);

      router.push("/login");

      enqueueSnackbar("Inregistrare reusita", { variant: "success" });
    },
    onError: (error) => {
      console.log("error: ", error);
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
              <Typography sx={{ fontSize: "50px" }}>Register</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Esti pregatit de o calatorie aventuroasa?
              </Typography>
              <TextFieldComponent
                name="last_name"
                type="text"
                label="Nume"
                value={formik.values.last_name}
                handleChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
                autocomplete={"last_name"}
              />
              <TextFieldComponent
                name="first_name"
                type="text"
                label="Prenume"
                value={formik.values.first_name}
                handleChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
                autocomplete={"first_name"}
              />
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
                  onClick={() => {
                    router.push("/login");
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  Am deja un cont
                </Typography>
              </div>

              <div style={{ padding: "10px" }}>
                <LoadingButton
                  handleClick={formik.handleSubmit}
                  loading={pending || loading}
                >
                  <Typography variant="body1">Inregistreaza-ma</Typography>
                </LoadingButton>
              </div>
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
export default Register;
