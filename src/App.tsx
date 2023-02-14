import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main";
import { Carrucel } from "./components/Carrucel";
import { Inicio } from "./components/main/Inicio";
import { AppProvider } from "./context/AppProvider";
import { Info } from "./components/Info";
function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Inicio />} />
              <Route path="/informacion" element={<Carrucel />} />
              <Route path="/informacion/:id" element={<Info />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
