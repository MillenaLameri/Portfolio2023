import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiInstagram, mdiFacebook, mdiEmail } from "@mdi/js";
import { Colors } from "../util/colors";

export const Contatos = () => {
  return (
    <Box
      id="contatos"
      textAlign={"center"}
      justifyContent={"center"}
      mt={15}
      mb={10}
    >
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
        Contatos
      </Typography>
      <Box
        display="flex"
        px={60}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Box mr={6}>
          <Icon size={5} path={mdiInstagram} color={Colors.gray3} />
        </Box>
        <Box mr={6}>
          <Icon size={5} path={mdiFacebook} color={Colors.gray3} />
        </Box>
        <Box>
          <Icon size={5} path={mdiEmail} color={Colors.gray3} />
        </Box>
      </Box>
    </Box>
  );
};
