import React from "react";
import { Routes, Route } from "react-router-dom";
import { navItems } from "./routes/navItems";
import MainPage from "./pages/MainPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);

export default Router;
