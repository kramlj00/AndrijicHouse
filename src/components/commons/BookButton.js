import React from 'react'
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BookButton = () => {
  const { t } = useTranslation();

  return (
    <BookNowBtn>
       {t("bookBtn")}
    </BookNowBtn>
  )
}

export default BookButton;

const BookNowBtn = styled.button`
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;

    ${({ theme }) => `
        padding: ${theme.spacing.small} ${theme.spacing.large};
        background-color: ${theme.color.main.gold};
        color: ${theme.color.main.white};
        font-size: ${theme.fontSize.medium};
        border: 1px solid ${theme.color.main.gold};

        @media(max-width: ${theme.breakpoints.mobile}){
            padding: ${theme.spacing.small} ${theme.spacing.medium};
        } 

        &:hover {
            background-color: #dbae6b;
            transform: scale(1.03);
            transition: all 0.4s ease-out; 
        }
    `}
`;
