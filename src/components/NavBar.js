import React from "react";
import styled from "styled-components";
import Logo from "./commons/Logo";
import { NavLink as Link } from "react-router-dom";
import BookButton from "./commons/BookButton";
import { FaBars } from "react-icons/fa";
import LanguageOptions from "./commons/LanguageOptions";
import { useMedia } from "use-media";
import { theme } from "../themes/defaultTheme";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggle }) => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("navLinks.link1"), path: "/rooms" },
    { label: t("navLinks.link2"), path: "/exterior" },
    { label: t("navLinks.link3"), path: "/contact_us" },
  ];

  const isDesktopScreen = useMedia({
    minWidth: theme.breakpoints.tablet,
  });

  return (
    <NavBarContainer>
      <NavLogoContainer>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavLogoContainer>
      <MobileIcon onClick={toggle}>
        <Bars />
      </MobileIcon>

      <NavOptionsContainer>
        {navLinks.map((navLink) => (
          <NavLink to={navLink.path} key={navLink.path}>
            {navLink.label}
          </NavLink>
        ))}
        <BookButton />
      </NavOptionsContainer>

      {isDesktopScreen && <LanguageOptions />}
    </NavBarContainer>
  );
};

export default Navbar;

const NavBarContainer = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5 rem cals((100vw - 1000px) / 2);
  z-index: 10;
  margin-bottom: -1px;
  border-bottom: 1px solid gray;
`;

const NavLogoContainer = styled.div`
  ${({ theme }) => `
    margin-left: ${theme.spacing.larger};

    @media(max-width: ${theme.breakpoints.mobile}){
      margin-left: ${theme.spacing.small};
    } 
  `}
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-weight: 700;

  &.active {
    color: #d07f08;
  }

  ${({ theme }) => `
     font-family: ${theme.fontFamily.main};
     color: ${theme.color.main.black};
     font-size: ${theme.fontSize.mediumLarger};
     padding: 0 ${theme.spacing.medium}

     &.active {
        color: ${theme.color.main.gold};
        text-decoration: underline;
     }
  `}
`;

const NavOptionsContainer = styled.div`
  display: flex;
  flex-grow: 0.25;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.tablet}){
      display: none;
    }
  `}
`;

const MobileIcon = styled.div`
  display: none;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.tablet}){
      display: flex;
      margin-right: ${theme.spacing.larger};
      cursor: pointer;
      font-size: ${theme.fontSize.large};
      color: ${theme.color.main.black};
    } 
    @media(max-width: ${theme.breakpoints.mobile}){
      margin-right: ${theme.spacing.small};
    } 
  `}
`;

const Bars = styled(FaBars)``;
