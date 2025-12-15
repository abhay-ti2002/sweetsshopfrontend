import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import LoginPage from "../src/component/Loginpage";
import Sweets from "./component/Sweets";
import Resister from "./component/Resister";

function App() {
  const isAuthenticated = !!sessionStorage.getItem("token");
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* Redirect root (/) to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Login page */}
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/resister" element={<Resister />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
          ></Route>
          {/* 404 page */}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>

      {/* <NavBar /> */}
    </>
  );
}

export default App;
