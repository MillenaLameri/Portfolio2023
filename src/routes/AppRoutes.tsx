import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SobreMim } from "../pages/SobreMim";
import { TelaPrincipal } from "../pages/TelaPrincipal";
import { ROUTES } from "./Routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.Principal} component={TelaPrincipal} />
        <Route exact path={ROUTES.Sobre} component={SobreMim} />
      </Switch>
    </BrowserRouter>
  );
};
