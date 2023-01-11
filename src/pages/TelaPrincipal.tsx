import React, { useCallback } from "react";
import { Box, Fade, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSpring, animated as a } from "react-spring";
import Profile from "../assets/img/Profile.png";
import { BoxCentralizado } from "../util/BoxCentralizado";
import ResponsiveAppBar from "../util/NavBar";
import { SobreMim } from "./SobreMim";
import Typing from "react-typing-animation";
import { Icon } from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { Colors } from "../util/colors";
import { Link } from "react-scroll";
import { Contatos } from "./Contatos";
import { Habilidades } from "./Habilidades";
import { Controller, Scene } from "react-scrollmagic";

export const TelaPrincipal = () => {
  const [{ xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const interpBg = xy.to(
    (x, y) => `perspective(600px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) `
  );

  const onMove = useCallback(
    ({ clientX: x, clientY: y }: any) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );
  const onScroll = useCallback(
    (e: any) => set({ st: e.target.scrollTop / 30 }),
    [set]
  );
  return (
    <>
      <ResponsiveAppBar />
      <Grid container>
        <BoxCentralizado>
          <Box maxWidth="sm" sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
              variant="h2"
              fontWeight="bold"
            >
              Prazer, mia!
            </Typography>
            <Typing loop>
              <Typing.Speed ms={70} />
              <span>Desenvolvedora Front-end</span>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={40} />
              <span>Desenvolvedora Web</span>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={40} />
              <span>Desenvolvedora Mobile</span>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={40} />
            </Typing>
          </Box>
        </BoxCentralizado>
        <Grid
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
            },
          }}
        >
          <a.div
            style={{ transform: interpBg }}
            onMouseMove={onMove}
            onScroll={onScroll}
          >
            <img src={Profile} width={600} height={600} alt="Large Pizza" />
          </a.div>
        </Grid>
      </Grid>
      <Box
        mr={2}
        alignContent="center"
        justifyContent="center"
        textAlign={"center"}
      >
        <Link activeClass="active" smooth spy to="sobre">
          <Icon size={1.4} path={mdiChevronDown} color={Colors.gray3} />
        </Link>
      </Box>

      <Controller>
        <Scene triggerHook="onLeave" duration={1000} pin>
          <SobreMim />
        </Scene>
      </Controller>
      <Habilidades />
      <Contatos />
    </>
  );
};
