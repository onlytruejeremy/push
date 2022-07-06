import React from "react";

const useToggle = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen((p) => !p);
  return { open, toggle };
};

export default useToggle;
