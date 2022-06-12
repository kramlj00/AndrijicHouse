import React from 'react'
import styled from "styled-components";

const LanguageOptions = () => {
  return (
    <LanguageOptionsContainer>
        <CroatianFlagImageContainer>
          <FlagImage src="/images/cro-flag.png" alt="hr-img" />
        </CroatianFlagImageContainer>
        <EnglishFlagImageContainer>
          <FlagImage src="/images/eng-flag.png" alt="eng-img" />
        </EnglishFlagImageContainer>
      </LanguageOptionsContainer>
  )
}

export default LanguageOptions


const LanguageOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
