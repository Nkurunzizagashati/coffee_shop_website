import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Nav from "./components/Nav";
import Admin from "./components/pages/Admin";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Signup />} path="/register" />
        <Route element={<Signin />} path="/admin/login" />
      </Routes>
    </div>
  );
}

export default App;
