/*mport Postman from "../CustomPostman/Postman";

function App() {
    return <Postman />;
}

export default App;
*/

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/newuser" element={<NewUser />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;