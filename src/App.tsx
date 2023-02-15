import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/pages/main";
import { Carrucel } from "./components/pages/Carrucel";
import { Inicio } from "./components/pages/main/Inicio";
import { Info } from "./components/pages/Info";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Inicio />} />
          <Route path="/informacion" element={<Carrucel />} />
          <Route path="/informacion/:id" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
