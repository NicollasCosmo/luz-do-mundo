import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SobreMim from "./pages/Sobremim";
import Menu from "./componentes/menu";
import Rodape from "./componentes/rodape";
import HomePadrao from "./componentes/homePadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import ScrollToTop from "componentes/scrollToTop";






function AppRoutes() {
  return (


    <BrowserRouter>
        <ScrollToTop />
        <Menu />

        <Routes>
            <Route path="/" element={<HomePadrao />}>
              <Route index element={<Home />} />
              <Route path="sobremim" element={<SobreMim />} />
            </Route>

            <Route path="posts/:id/*" element={<Post />} />
            <Route path="*" element={<NaoEncontrada />} />
        </Routes>

        <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
