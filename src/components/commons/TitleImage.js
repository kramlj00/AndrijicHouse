import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const TitleImage = ({ textPartOne, textPartTwo, imageSrc, moveToLeft }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeOpacity();
    return () => {
      setIsScrolling(false); //clean the state in the unmount of the component
    };
  }, []);

  const changeOpacity = () => {
    if (window.scrollY >= 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  window.addEventListener("scroll", changeOpacity);

  return (
    <HomeContainer>
      <ImageContainer
        isCroatian={i18n.language === "hr"}
        moveToLeft={moveToLeft}
      >
        <Image src={imageSrc} alt="title-image" isActive={isScrolling} />
        <TitleWrapper>
          <Fade triggerOnce={true} delay={600}>
            <Saying>
              {textPartOne}
              <br></br>
              {textPartTwo}
            </Saying>
          </Fade>
        </TitleWrapper>

        <BookNowContainer>
          <Fade triggerOnce={true} delay={700}>
            <BookNowLink
              href="https://www.booking.com/hotel/hr/apartment-zaglav-12208a.hr.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQzYAQPoAQGIAgGoAgO4ApzdhZYGwAIB0gIkYjkwMjdjZjMtN2QwNC00M2YzLWIxYzctYTJiM2IxNTg3ZWY52AIE4AIB&sid=9ea2f99d2546ae5288cab2ad92918067&atlas_src=sr_iw_btn;dest_id=2017;dest_type=region;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#availability_target"
              target="_blank"
              rel="noreferrer"
            >
              <BookNowHomeBtn>{t("bookBtn")}</BookNowHomeBtn>
            </BookNowLink>
          </Fade>
        </BookNowContainer>
      </ImageContainer>
    </HomeContainer>
  );
};

export default TitleImage;

const jumpAnimation = keyframes`
  0% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, -65%); }
  100% { transform: translate(-50%, -50%); }
`;

const HomeContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

const TitleWrapper = styled.div``;

const BookNowLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const BookNowHomeBtn = styled.button`
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #dbae6b;
    transform: scale(1.03);
    transition: all 0.4s ease-out;
  }

  ${({ theme }) => `
      color: ${theme.color.main.white};
      background-color: ${theme.color.main.gold};
      font-size: ${theme.fontSize.medium};
      border: 1px solid ${theme.color.main.gold};

      @media(max-width: ${theme.breakpoints.desktop}){
        left: 50%;
        top: 55%;
      } 
      @media(max-width: ${theme.breakpoints.tablet}){
        padding: 10px 40px;
      }
      @media(max-width: ${theme.breakpoints.mobile}){
        font-size: ${theme.fontSize.mediumSmall};
        padding: 9px 35px;
      }

    `}
`;

const BookNowContainer = styled.div``;

const Image = styled.img`
  height: 85vh;
  width: 100vw;
  object-fit: cover;

  ${({ isActive }) => `
    -webkit-filter: ${isActive && "blur(3px)"};
    transition: ${isActive && "-webkit-filter 1.5s linear"};
`}
`;

const ImageContainer = styled.div`
  > ${TitleWrapper} {
    visibility: visible;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-flow: column;
    background: transparent;
    position: absolute;
    top: 70%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;

    ${({ theme, isCroatian, moveToLeft }) => `
      color: ${theme.color.main.white};
      left: ${isCroatian && moveToLeft ? "73%" : "78%"};
      
      @media(max-width: ${theme.breakpoints.desktopLarger}){
        left: ${isCroatian && moveToLeft && "70%"};
        top: 70%;
      }
      @media(max-width: ${theme.breakpoints.desktop}){
        left: 50%;
        top: 55%;
      } 
    `}
  }

  > ${BookNowContainer} {
    width: fit-content;
    height: fit-content;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    margin-top: -40px;
    animation-name: ${jumpAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;

    &:hover {
      animation-play-state: paused;
    }
  }
`;

const Saying = styled.h1`
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fontSize.title};

    @media(max-width: ${theme.breakpoints.desktop}){
      font-size: ${theme.fontSize.subtitleLarge};
    } 
    @media(max-width: ${theme.breakpoints.tablet}){
      font-size: ${theme.fontSize.subtitle};
    } 
    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.large};
    } 
  `}
`;
