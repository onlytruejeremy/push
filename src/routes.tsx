import { ElementType } from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

type RObject = RouteObject & {
  layout?: ElementType;
};

const routes: RObject[] = [
  {
    element: <Home />,
    path: "/",
  },
];

routes.forEach((route) => {
  const L = route.layout ?? Layout;
  route.element = <L>{route.element}</L>;
});

export default routes;
