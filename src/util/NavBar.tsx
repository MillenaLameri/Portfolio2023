import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Icon } from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
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
            <a
              href="https://www.linkedin.com/in/millena-lameri-48b737187/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={2} path={mdiLinkedin} color={Colors.gray3} />
            </a>
          </Box>
          <Box>
            <a
              href="https://github.com/MillenaLameri"
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={2} path={mdiGithub} color={Colors.gray3} />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
