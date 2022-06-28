import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const footerItems = [
    { label: t("navLinks.link1"), path: "/rooms" },
    { label: t("navLinks.link2"), path: "/exterior" },
    { label: t("bookBtn"), path: "/" },
  ];

  return (
    <FooterContainer>
      <SeparatorBar>
        <HorizontalLine />
        <FooterLogo to="/">Andrijic House</FooterLogo>
        <HorizontalLine />
      </SeparatorBar>
      <FooterItemsContainer>
        <ItemContainer>
          <FooterLink to="/contact_us">
            <FooterItemTitle>{t("contactUs")}</FooterItemTitle>
          </FooterLink>
          <FooterItemSubtitle>andrijichouse@gmail.com</FooterItemSubtitle>
          <FooterItemSubtitle>+385 098 181 6135</FooterItemSubtitle>
          <FooterItemSubtitle>Zaglav 20271, Blato Croatia</FooterItemSubtitle>
        </ItemContainer>
        {footerItems.map((footerItem) => (
          <ItemContainer key={footerItem.path}>
            <FooterLink to={footerItem.path}>
              <FooterItemTitle>{footerItem.label}</FooterItemTitle>
            </FooterLink>
          </ItemContainer>
        ))}
      </FooterItemsContainer>
      <WebsiteRightsContainer>
        Andrijic House &copy; {new Date().getFullYear()} {t("rightsFooter")}
      </WebsiteRightsContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  margin-top: 35px;

  ${({ theme }) => `
    background-color: ${theme.color.main.darkGrey};

    @media(max-width: ${theme.breakpoints.mobile}){
      height: 320px;
    }
  `}
`;

const SeparatorBar = styled.section`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.mobile}){
      margin-bottom: 20px;
    }
  `}
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: 200px;
  background-color: whitesmoke;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.tablet}){
      width: 110px;
    }
    @media(max-width: ${theme.breakpoints.mobile}){
      width: 70px;
    }
  `}
`;

const FooterLogo = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  cursor: pointer;
  padding: 0 20px;

  ${({ theme }) => `
    font-size: ${theme.fontSize.extraLarge};
    font-family: ${theme.fontFamily.secondary};
    color: ${theme.color.main.white};

    @media(max-width: ${theme.breakpoints.tablet}){
      padding: 0 12px;
      font-size: ${theme.fontSize.large};
    }
  `}
`;

const FooterItemsContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.main};
    color: ${theme.color.main.white};

    @media(max-width: ${theme.breakpoints.tablet}){
      width: 90%;
    }
    @media(max-width: ${theme.breakpoints.mobile}){
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const FooterItemTitle = styled.div`
  ${({ theme }) => `
    color: ${theme.color.main.white};
    font-size: ${theme.fontSize.mediumLarge};

    @media(max-width: ${theme.breakpoints.tablet}){
      font-size: ${theme.fontSize.mediumLarger};
    }
    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.medium};
      text-align: center;
    }
  `}
`;

const FooterItemSubtitle = styled.span`
  font-weight: 700;
  padding-top: 16px;

  ${({ theme }) => `
    color: ${theme.color.secondary.grey};
    font-size: ${theme.fontSize.medium};

    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.mediumSmall};
      padding-top: 10px;
    }
  `}
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const WebsiteRightsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;

  ${({ theme }) => `
    font-size: ${theme.fontSize.medium};
    color: ${theme.color.secondary.footerRightsGrey};

    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.mediumSmall};
      padding-top: 20px;
    }
  `}
`;
