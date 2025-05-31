import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import { ProfileLayout } from "./pages/Profile/ProfileLayout";
import { ProfileListings } from "./pages/Profile/ProfileListings";
import { ProfileFavorites } from "./pages/Profile/ProfileFavorites";
import { ProfileSettings } from "./pages/Profile/ProfileSettings";
import { RentOutPage } from "./pages/RentOutPage";
import { ChatsPage } from "./pages/ChatsPage";

const Router = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/rent-out" element={<RentOutPage />} />
      <Route path="/chats" element={<ChatsPage />} />
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfileListings />} />
        <Route path="favorites" element={<ProfileFavorites />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
    </Route>
  </Routes>
);

export default Router;
