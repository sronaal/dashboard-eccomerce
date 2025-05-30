import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAuth from "./layout/LayoutAuth";
import Login from "./pages/auth/Login";
import LayoutAdmin from "./layout/LayoutAdmin";
import Productos from "./pages/admin/Productos";
import Ordenes from "./pages/admin/Ordenes";
import Register from "./pages/auth/Register";
import Analytcs from "./pages/admin/Analytcs";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="auth" element={<LayoutAuth />}>
              <Route index element={<Login />}></Route>
              <Route path="register" element={<Register/> }></Route>
            </Route>

            <Route path="/" element={ <LayoutAdmin/> }>
                <Route index element={<Productos/>}></Route>
                <Route path="ordenes" element={ <Ordenes/> } ></Route>
                <Route path="clientes" element={ <Ordenes/> } ></Route>
                <Route path="analisis" element={<Analytcs/>}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
