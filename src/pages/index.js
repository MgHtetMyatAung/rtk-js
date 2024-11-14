import React from "react";

const HomePage = React.lazy(() => import("./home/Home.Page"));

// for auth pages
const LoginPage = React.lazy(() => import("./auth/Login.Page"));

// for not found page
const NotFoundPage = React.lazy(() => import("./404/NotFound.Page"));

export { HomePage, LoginPage, NotFoundPage };
