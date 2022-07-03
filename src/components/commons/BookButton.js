import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BookButton = () => {
  const { t } = useTranslation();

  return (
    <BookNowLink
      href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
      target="_blank"
      rel="noreferrer"
    >
      <BookNowBtn>{t("bookBtn")}</BookNowBtn>
    </BookNowLink>
  );
};

export default BookButton;

const BookNowLink = styled.a`
  text-decoration: none;
`

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
