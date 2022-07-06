import React, { ReactNode } from "react";
import NavBar from "./components/NavBar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
