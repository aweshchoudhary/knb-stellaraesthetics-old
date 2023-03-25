import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import Deals from "./pages/Deals";
import Activities from "./pages/Activities";
import Products from "./pages/Products";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";
import Login from "./pages/auth/Login";
import { setAuthenticatedUser, setUser } from "./state/features/authSlice";
import { useDispatch } from "react-redux";
import { AuthProvider } from "oidc-react";

const App = () => {
  const dispatch = useDispatch();
  const zitadelConfig = {
    onSignIn: async (response) => {
      dispatch(setAuthenticatedUser(true));
      dispatch(setUser(response.profile));
      window.location.hash = ""
    },
    authority: "https://au.stellaraesthetics.in/", // replace with your instance
    clientId: "206769574157323753@authentication_with_react",
    responseType: "code",
    redirectUri: "http://localhost:5173/dashboard",
    scope: "openid profile email",
  };
  return (
    <AuthProvider {...zitadelConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
