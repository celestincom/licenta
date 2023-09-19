import React, { useState } from "react";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
// import AvatarProfile from 'components/AvatarProfile';
import { useLogout } from "@/hooks/useLogout";
import menuItems from "@/jsons/menuItems.json";
import ConfirmationModal from "@/components/shared/ConfirmationModal";
import router, { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [confirmLogout, setConfirmLogout] = useState<boolean>(false);
  const { handleLogout } = useLogout();

  return (
    <Box
      sx={{
        background: "transparent",
        width: "100vw",
        position: "fixed",
        zIndex: -4,
        top: 0,
        left: 0,
        mb: 2,
      }}
    >
      <AppBar
        sx={{
          position: "relative",
          width: "90vw",
          background: "#2e2121",
          borderRadius: "10px",
          padding: "5px 30px",
          mt: 3,
          mx: "auto",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0 !important",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            <Link href="/dashboard">
              <img
                style={{ cursor: "pointer" }}
                src="/plane1.png"
                alt="Plane"
                height="34"
              />
            </Link>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: 2,
              flexGrow: 1,
              ml: 8,
            }}
          >
            {menuItems.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    padding: "10px 20px",
                    backgroundColor:
                      router.pathname === item.path ? "#463232" : "transparent",
                    borderRadius: "10px",
                  }}
                >
                  {/* <Link href={item.path}> */}
                  <Typography
                    variant="body2"
                    onClick={() => {
                      router.push(item.path);
                    }}
                    sx={{
                      textTransform: "capitalize",
                      "&:hover": { color: "white" },
                      color:
                        router.pathname === item.path ? "white" : "#A5A5A5",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {/* </Link> */}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              {/* {user?.first_name} {user?.last_name} */}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <ConfirmationModal
        item={""}
        open={confirmLogout}
        handleClose={() => setConfirmLogout(false)}
        text={"Are you sure you want to logout?"}
        action={handleLogout}
      />
    </Box>
  );
}
