import { SobreMim } from "./SobreMim";
import { Contatos } from "./Contatos";
import { Habilidades } from "./Habilidades";
import { Banner } from "./components/Banner";

export const TelaPrincipal = () => {

  return (
    <>
      <Banner/>
      <SobreMim />
      <Habilidades />
      <Contatos />
    </>
  );
};
