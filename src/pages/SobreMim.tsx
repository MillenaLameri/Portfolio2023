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
            maxWidth: "600px",
            fontFamily: "monospace",
            fontWeight: 500,
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
