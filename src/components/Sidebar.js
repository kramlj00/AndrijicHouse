import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import BookButton from "./commons/BookButton";
import LanguageOptions from "./commons/LanguageOptions";
import Logo from "./commons/Logo";

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
      <LogoContainer>
      <SidebarLink to="/">
        <Logo />
      </SidebarLink>
      </LogoContainer>
          {sidebarLinks.map((sidebarLink) => (
            <SidebarLink
              to={sidebarLink.path}
              key={sidebarLink.path}
              onClick={toggle}
            >
              {sidebarLink.label}
            </SidebarLink>
          ))}
            <SidebarLink to="/rooms">
              <BookButton />
            </SidebarLink>
          <LanguageOptionsContainer>
            <LanguageOptions display="visible" />
          </LanguageOptionsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 1s ease-in-out;
  cursor: pointer;
  font-weight: bold;

  ${({ theme }) => `
    color: ${theme.color.main.black};
    padding-bottom: ${theme.spacing.extraLarge};
    font-size: ${theme.fontSize.mediumLarger};
    font-family: ${theme.fontFamily.main};

    &.active {
      color: ${theme.color.main.gold};
    }
  `}
`;

const LogoContainer = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing.superLarge};
    margin-bottom: ${theme.spacing.extraLarge};
  `}
`
const LanguageOptionsContainer = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing.superLarge};
  `}
`;
