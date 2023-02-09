import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiEmail } from "@mdi/js";
import { Colors } from "../util/colors";
import { Mailto } from "./OpenEmail";
import { ThemeContext } from "../contexts/theme.context";

export const Contatos = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Box
      id="contatos"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      alignContent="center"
      mt={15}
      mb={10}
    >
      <Typography
        mb={5}
        sx={{
          fontFamily: "DM Sans",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
        }}
        variant="h4"
        fontWeight="bold"
      >
        Contatos
      </Typography>
      <Box display="flex" textAlign={"center"} justifyContent={"center"}>
        <Box mr={6}>
          <a
            href="https://www.linkedin.com/in/millena-lameri-48b737187/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              size={5}
              path={mdiLinkedin}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
          </a>
        </Box>
        <Box mr={6}>
          <a
            href="https://github.com/MillenaLameri"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              size={5}
              path={mdiGithub}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
          </a>
        </Box>
        <Box>
          <Mailto
            email="millenalameri@hotmail.com"
            subject="Olá, mia"
            body="(:"
          >
            <Icon
              size={5}
              path={mdiEmail}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
          </Mailto>
        </Box>
      </Box>
    </Box>
  );
};
