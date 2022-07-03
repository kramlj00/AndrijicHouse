import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

const ToggleBars = () => {
  const [isOpen, setIsOpen] = useState(false);

  // toggle sidebar
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
}

export default ToggleBars;