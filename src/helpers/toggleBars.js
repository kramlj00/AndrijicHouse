import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

const ToggleBars = ({setIsOpen, isOpen}) => {

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