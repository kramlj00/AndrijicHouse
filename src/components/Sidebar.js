import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggle, isOpen }) => {
  const sidebarLinks = [
    { label: "Rooms", path: "/rooms" },
    { label: "Exterior", path: "/exterior" },
    { label: "Contact us", path: "/contact_us", private: true },
  ];

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  ${({ theme }) => `
    background-color: ${theme.color.main.dimGrey};
    font-family: ${theme.fontFamily.main};
  `}
`;

const CloseIcon = styled(FaTimes)`
  ${({ theme }) => `
    color: ${theme.color.main.black};
  `}
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;

  ${({ theme }) => `
    font-size: ${theme.fontSize.large};
  `}
`;
