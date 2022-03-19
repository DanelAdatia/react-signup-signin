import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import SignUp from "./screens/SignUp";
import Profile from "./protectedScreens/dashboard/components/Profile";
import Header from "./protectedScreens/sharedComponents/Header";
import SideBar from "./protectedScreens/sharedComponents/SideBar";
import Dashboard from "./protectedScreens/dashboard/components/Dashboard";
import Purchase from "./protectedScreens/dashboard/components/Purchase";
import Login from "./Login";

const Router = () => {
  const HeaderRender = () => {
    return (
      <>
        <Header />
        <SideBar />
        <Outlet />
      </>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />

          <Route element={<HeaderRender />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/purchase" element={<Purchase />} />
          </Route>
          <Route path="/" element={<Navigate replace to="/signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
