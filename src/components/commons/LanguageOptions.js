import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageOptions = () => {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    hr: { nativeName: "Hrvatski" },
  };

  return (
    <LanguageOptionsContainer>
      {Object.keys(lngs).map((lng) => (
        <FlagImage
          key={lng}
          type="submit"
          src={`/images/${lng}-flag.png`}
          alt={`${lng.nativeName}-img`}
          onClick={() => i18n.changeLanguage(lng)}
        />
      ))}
    </LanguageOptionsContainer>
  );
};

export default LanguageOptions;

const LanguageOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;

  ${({ theme }) => `
    margin-right: ${theme.spacing.larger};
    @media(max-width: ${theme.breakpoints.tablet}){
        margin-right: 0;
    }
  `}
`;

const FlagImage = styled.img`
  width: 40px;
  height: 23px;
  cursor: pointer;
`;
