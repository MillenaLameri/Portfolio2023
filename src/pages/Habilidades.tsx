import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@mdi/react";
import {
  mdiReact,
  mdiAngularjs,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
  mdiMaterialUi,
} from "@mdi/js";

import { ThemeContext } from "../contexts/theme.context";
import { Colors } from "../util/colors";

export const Habilidades = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Box
      id="sobre"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      mt={10}
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
            <Icon
              size={4}
              path={mdiReact}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
          </Box>
          <Box ml={4}>
            <Icon
              size={4}
              path={mdiAngularjs}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
          </Box>
          <Box ml={4}>
            <Icon
              size={4}
              path={mdiLanguageTypescript}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
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
          <Icon
            size={4}
            path={mdiLanguageJavascript}
            color={theme === "dark" ? Colors.white : Colors.black}
          />
          <Box ml={4}>
            <Icon
              size={4}
              path={mdiMaterialUi}
              color={theme === "dark" ? Colors.white : Colors.black}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
