import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Icon } from "@mdi/react";
import { mdiInstagram, mdiFacebook } from "@mdi/js";
import { Colors } from "./colors";
import { Link } from "react-scroll";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ background: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Portifólio
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Link activeClass="active" smooth spy to="sobre">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Sobre
                </Button>
              </Link>
            </Box>
            <Box>
              <Link activeClass="active" smooth spy to="sobre">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Habilidades
                </Button>
              </Link>
            </Box>
            <Box>
              <Link activeClass="active" smooth spy to="contatos">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Contatos
                </Button>
              </Link>
            </Box>
          </Box>

          <Box mr={2}>
            <Icon size={1.4} path={mdiInstagram} color={Colors.gray3} />
          </Box>
          <Box>
            <Icon size={1.4} path={mdiFacebook} color={Colors.gray3} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
