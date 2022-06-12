import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { NavLink as Link } from "react-router-dom";
import BookButton from "./commons/BookButton";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLogoContainer>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavLogoContainer>

      <NavOptionsContainer>
        <NavLink to="/rooms">Rooms</NavLink>
        <NavLink to="/exterior">Exterior</NavLink>
        <NavLink to="/contact_us">Contact us</NavLink>
        <NavLink to="/rooms">
          <BookButton/>
        </NavLink>
      </NavOptionsContainer>

      <LanguageOptionsContainer>
        <CroatianFlagImageContainer>
          <FlagImage src="/images/cro-flag.png" alt="hr-img" />
        </CroatianFlagImageContainer>
        <EnglishFlagImageContainer>
          <FlagImage src="/images/eng-flag.png" alt="eng-img" />
        </EnglishFlagImageContainer>
      </LanguageOptionsContainer>
    </NavBarContainer>
  );
};

export default NavBar;

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
    margin-left: ${theme.spacing.extraSmall};
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
`;

const LanguageOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => `
        margin-right: ${theme.spacing.larger};
    `}
`;

const CroatianFlagImageContainer = styled.div``;

const EnglishFlagImageContainer = styled.div`
  padding-left: 10px;
`;

const FlagImage = styled.img`
  width: 40px;
  cursor: pointer;
`;
