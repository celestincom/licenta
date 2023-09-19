import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import menuItems from "../../../../jsons/menuItems.json";
import { useRouter } from "next/router";
import AdbIcon from "@mui/icons-material/Adb";
import useLocalStorage from "@/hooks/useLocalStorage";

function Nav() {
  const [user, setUser] = useLocalStorage("user", {
    id: "",
    first_name: "",
    last_name: "",
    hasProfile: true,
  });

  const router = useRouter();

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.7fr 2fr 0.7fr",
          width: "100vw",
          position: "fixed",
          backgroundColor: "#271a1a",
          minWidth: "100vw",
          minHeight: "8vh",
          zIndex: "5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 1,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BEE
          </Typography>
          <AdbIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TRIP
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: "70%",
              display: "flex",
              alignItems: "center",
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
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    padding: "10px 20px",
                    backgroundColor:
                      router.pathname === item.path ? "#362b2b" : "transparent",
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
                      fontSize: "18px",
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
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexGrow: 1,
              ml: 8,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="body2"
              onClick={() => {
                window.localStorage.removeItem("user");
                window.localStorage.removeItem("token");
                router.push("/login");
              }}
              sx={{
                textTransform: "capitalize",
                fontSize: "18px",
                "&:hover": { color: "white" },
                color: "#A5A5A5",
              }}
            >
              Logout
            </Typography>
          </Box>
        </div>
        {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography
              sx={{
                textTransform: "capitalize",
              }}>
              {user.first_name} {user.last_name}
            </Typography>
        </div> */}
      </div>
    </>
  );
}
export default Nav;
