import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./state/features/authSlice";
import { AuthProvider } from "oidc-react";

import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import Deals from "./pages/Deals";
import Activities from "./pages/Activities";
import Products from "./pages/Products";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import User from "./pages/User";

const App = () => {
  let user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const zitadelConfig = {
    onSignIn: async (response) => {
      dispatch(setUser(response));
      window.location.hash = "";
    },
    authority: "https://au.stellaraesthetics.in/",
    clientId: "206769574157323753@authentication_with_react",
    responseType: "code",
    redirectUri: "https://knb-stellaraesthetics.netlify.app/dashboard",
    scope: "openid profile email",
  };
  console.log(user);
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
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
