import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSpring, animated as a } from "react-spring";
import Profile from "../assets/img/Profile.png";
import { BoxCentralizado } from "../util/BoxCentralizado";
import { SobreMim } from "./SobreMim";
import Typing from "react-typing-animation";
import { Contatos } from "./Contatos";
import { Habilidades } from "./Habilidades";

export const TelaPrincipal = () => {
  const [{ xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const interpBg = xy.to(
    (x, y) => `perspective(800px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) `
  );

  const onMove = useCallback(
    ({ clientX: x, clientY: y }: any) =>
      set({ xy: [x - window.innerWidth / 4, y - window.innerHeight / 4] }),
    []
  );
  const onScroll = useCallback(
    (e: any) => set({ st: e.target.scrollTop / 30 }),
    [set]
  );

  return (
    <>
      <Grid container >
        <BoxCentralizado>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              mt={3}
              mb={4}
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
              }}
              variant="h2"
              fontWeight="bold"
            >
              Prazer, Mia!
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  xl: "block",
                },
              }}
            >
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
            <img src={Profile} width={600} height={600} alt="PerfilMia" />
          </a.div>
        </Grid>
      </Grid>

      <SobreMim />
      <Habilidades />
      <Contatos />
    </>
  );
};
