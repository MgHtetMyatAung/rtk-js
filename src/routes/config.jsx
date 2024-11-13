import { ROUTE_ACCESS, ROUTE_PATHS } from "../constant/route";
import { HomePage, LoginPage } from "../pages";

export const route_configs = [
  {
    path: ROUTE_PATHS.HOME,
    element: <HomePage />,
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: <LoginPage />,
    access_type: ROUTE_ACCESS.AUTH,
  },
];
