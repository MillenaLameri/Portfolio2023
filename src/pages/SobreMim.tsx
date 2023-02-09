import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../util/colors";

export const SobreMim = () => {
  return (
    <Box
      id="sobre"
      textAlign="center"
      justifyContent="center"
      alignContent="center"
    >
      <Typography
        mb={3}
        sx={{
          fontFamily: "DM Sans",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
        }}
        variant="h4"
        fontWeight="bold"
      >
        Sobre mim
      </Typography>
      <Box
        display="flex"
        textAlign="center"
        justifyContent="center"
        alignContent="center"
      >
        <Typography
          sx={{
            maxWidth: "580px",
            fontFamily: "DM Sans",
          }}
          variant="body1"
        >
          Meu nome é Millena Lameri sou formada em Sistemas De Informação. Tenho
          experiencias nas tecnologias como React, React Native, Angular,
          JavaScript, TypeScript, Styled Components, Material UI e consumo de
          APIs REST. Sou apaixonada por tecnologia e sempre busco aprender mais.
          tenho experiência em projetos gerenciados por Metodologias Ágeis.
        </Typography>
      </Box>
    </Box>
  );
};
