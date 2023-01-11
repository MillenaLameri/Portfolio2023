import { Box } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <AppRoutes />
    </Box>
  );
};
