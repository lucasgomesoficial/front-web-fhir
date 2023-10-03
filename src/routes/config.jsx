import { Login } from "@/pages/LoginPage";
import { Dashboard } from "@/pages/DashboardPage";
import { ErrorPage } from "@/pages/ErrorPage";
// import { About } from "../pages/AboutPage";
import { Patient } from "@/pages/PatientPage";

export const config = [
  {
    path: "/",
    component: <Login />,
  },
  {
    path: "/home",
    component: <Dashboard />,
  },
  {
    path: "/pacientes",
    component: <Patient />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
