import { Route, Routes } from "react-router-dom";
import { ROUTE_ACCESS } from "../constant/route";
import AuthProvider from "../provider/AuthProvider";
import PrivateProvider from "../provider/PrivateProvider";
import { route_configs } from "./config";

export default function RouteList() {
  return (
    <Routes>
      {route_configs.map(({ path, element, access_type }, index) => {
        let routeElement = element;

        // Apply protection based on access type
        if (access_type === ROUTE_ACCESS.PRIVATE) {
          routeElement = <PrivateProvider>{element}</PrivateProvider>;
        } else if (access_type === ROUTE_ACCESS.AUTH) {
          routeElement = <AuthProvider>{element}</AuthProvider>;
        }

        return <Route key={index} path={path} element={routeElement} />;
      })}
    </Routes>
  );
}
