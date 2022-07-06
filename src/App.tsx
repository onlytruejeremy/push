import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const pages = useRoutes(routes);
  return <>{pages}</>;
};

export default App;
