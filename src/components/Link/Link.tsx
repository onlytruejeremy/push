import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};
const Link = ({ href, children, className }: LinkProps) => {
  return (
    <NavLink to={href} className={className}>
      {children}
    </NavLink>
  );
};

export default Link;
