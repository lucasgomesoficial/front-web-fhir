// import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { RequireAuth } from "../context/authProvider";
import { config } from "./config";

// function ProtectRoute({ Route }) {
//   return (
//     <RequireAuth>
//       <Route />
//     </RequireAuth>
//   );
// }

export function Navigation() {
  return (
    <Routes>
      {config.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
      {/* <Route
        path="/home"
        element={
          <ProtectRoute Route={Dashboard} />
        }
      /> */}
    </Routes>
  );
}
