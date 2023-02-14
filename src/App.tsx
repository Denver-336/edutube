import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/detail";
import { Main } from "./components/main";
import { AppProvider } from "./context/AppProvider";
function App() {
  const url = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
