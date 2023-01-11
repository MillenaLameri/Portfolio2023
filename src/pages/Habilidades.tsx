import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../util/colors";

export const Habilidades = () => {
  return (
    <Box id="sobre" textAlign={"center"} justifyContent={"center"} mt={15}>
      <Typography
        mb={5}
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
        variant="h4"
        fontWeight="bold"
      >
        Habilidades
      </Typography>
      <Box display="flex" px={60}>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 400,
            textDecoration: "none",
          }}
          color={Colors.gray3}
          variant="body1"
        >
          Meu nome é Millena tenho 25 anos sou formada em Sistemas De
          Informação. Minhas experiencias são em React, React Native, Angular,
          JavaScript, TypeScript, Styled Components, Material UI e consumo de
          APIs REST. Sou apaixonada por tecnologia e sempre busco aprender mais.
          tenho experiência em projetos gerenciados por Metodologias Ágeis.
        </Typography>
      </Box>
    </Box>
  );
};
