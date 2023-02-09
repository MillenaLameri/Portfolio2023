import React from "react";
import { Box, Typography } from "@mui/material";
import ReactIcon from "../assets/techs/React.png";
import Angular from "../assets/techs/Angular.png";
import Ts from "../assets/techs/Ts.png";
import Js from "../assets/techs/Js.png";
import Mui from "../assets/techs/Mui.png";

export const Habilidades = () => {
  return (
    <Box
      id="sobre"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      mt={15}
    >
      <Typography
        mb={5}
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
        }}
        variant="h4"
        fontWeight="bold"
      >
        Minhas Techs
      </Typography>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="row"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <Box ml={1}>
            <img src={ReactIcon} width={100} height={90} alt="React" />
          </Box>
          <Box ml={4}>
            <img src={Angular} width={90} height={90} alt="Angular" />
          </Box>
          <Box ml={4}>
            <img src={Ts} width={85} height={85} alt="TypeScript" />
          </Box>
        </Box>
        <Box
          mt={3}
          display="flex"
          flexDirection="row"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <Box>
            <img src={Js} width={100} height={100} alt="Javascript" />
          </Box>
          <Box ml={4}>
            <img src={Mui} width={100} height={100} alt="MaterialUI" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
