import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/Landingpage.component";
import Login from "./pages/login/Login.component";
import Baseview from "./pages/baseview/Baseview.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<Login logAcc="Login as Help Desktop Agent" />}
        />
        <Route path="/login-ad" element={<Login logAcc="Login as Admin" />} />
        <Route path="/dashboard" element={<Baseview />} />
      </Routes>
    </>
  );
};

export default App;
