import React from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";

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
          // style={{
          //   fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          // }}
          type="submit"
          src={`/images/${lng}-flag.png`}
          alt={`${lng.nativeName}-img`}
          onClick={() => i18n.changeLanguage(lng)}
        />
      ))}
      {/* <CroatianFlagImageContainer>
          <FlagImage onClick={() => i18n.changeLanguage(lngs.hr)} src="/images/cro-flag.png" alt="hr-img" />
        </CroatianFlagImageContainer>
        <EnglishFlagImageContainer>
          <FlagImage onClick={() => i18n.changeLanguage(lngs.en)} src="/images/eng-flag.png" alt="eng-img" />
        </EnglishFlagImageContainer> */}
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

const CroatianFlagImageContainer = styled.div``;

const EnglishFlagImageContainer = styled.div`
  padding-left: 10px;
`;

const FlagImage = styled.img`
  width: 40px;
  cursor: pointer;
`;
