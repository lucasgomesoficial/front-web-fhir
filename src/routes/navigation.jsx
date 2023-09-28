import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../context/authProvider";
import { Dashboard } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/ErrorPage";
import { Login } from "../pages/LoginPage";
import { About } from "../pages/AboutPage";
import { Patient } from "@/pages/PatientPage";

function ProtectRoute({ Route }) {
  return (
    <RequireAuth>
      <Route />
    </RequireAuth>
  );
}

export function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectRoute Route={Dashboard} />
        }
      />
      <Route
        path="sobre"
        element={
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        }
      />
      {/* <Route path="order-summary" element={<OrderSummary />} />
      <Route path="products" element={<Products />}>
        <Route index element={<FeaturedProducts />} />
        <Route path="featured" element={<FeaturedProducts />} />
        <Route path="new" element={<NewProducts />} />
      </Route>
      <Route path="users" element={<Users />}>
        <Route path=":userId" element={<UserDetails />} />
        <Route path="admin" element={<Admin />} />
      </Route> */}
      <Route path="*" element={<ErrorPage />} />
      <Route path="/pacientes" element={<Patient />} />
    </Routes>
  );
}
