import React from "react";
// import { Rotate, Zoom, Slide } from "react-awesome-reveal";
import styled from "styled-components";
import TransitionedCardFan from "./TransitionedCardFan/TransitionedCardFan";

function HomeCard() {
  return (
    // <Slide triggerOnce={true}>
    <>
      <CardContainer>
        <LeftSide>
          <Title>Welcome!</Title>
          <AboutUsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </AboutUsDescription>
        </LeftSide>
        <RightSide>
          <TransitionedCardFan />
        </RightSide>
      </CardContainer>
      <LocationContainer>
        <Title>Location</Title>
        <LocationMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11686.976429150827!2d16.715967!3d42.9204375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a720c5f6330cf%3A0x810796f65a20ec98!2sAndriji%C4%87%20House!5e0!3m2!1shr!2shr!4v1613756560386!5m2!1shr!2shr"  />
      </LocationContainer>
    </>
    // </Slide>
  );
}

export default HomeCard;

const LocationContainer = styled.div`
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.mobile}){
      margin-top: -60px;
    } 
  `}
`;

const LocationMap = styled.iframe`
  width: 80%;
  height: 500px;
  margin-top: 20px;
  border: none;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.mobile}){
      height: 300px;
      margin-top: 10px;
    } 
    @media(max-width: ${theme.breakpoints.desktop}){
      width: 90%;
    } 
  `}
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  min-height: 550px;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.desktop}){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
    } 
  `}
`;
const Title = styled.h1`
  font-weight: normal;
  text-align: center;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fontSize.subtitle};

    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.large};
    } 
  `}
`;
const AboutUsDescription = styled.p`
  line-height: 38px;
  text-indent: 50px;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.main};
    font-size: ${theme.fontSize.mediumLarge};

    @media(max-width: ${theme.breakpoints.tablet}){
      font-size: ${theme.fontSize.mediumLarger};
    } 
    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.medium};
      line-height: 25px;
      text-indent: 30px;
    } 
  `}
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: 100px;
  margin-bottom: 38px;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.desktop}){
      margin-left: 0px;
      width: 90%;
    } 
  `}
`;

const RightSide = styled.div`
  display: flex;
  flex-grow: 1;
  width: 50%;
  justify-content: center;
  align-items: center;
  float: left;
`;
