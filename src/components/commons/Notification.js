import React, { useEffect } from 'react'
import { useState } from 'react';
import styled, { keyframes }  from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

const Notification = ({message, type}) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 2500);
  }, []);

  return (
    <Wrapper>
    <NotificationContainer type={type} display={display} onClick={() => setDisplay("none")}>
        <Message>{message}</Message>
        <ClearIconContainer>
          <ClearIcon/>
        </ClearIconContainer>
    </NotificationContainer>
    </Wrapper>
  )
}

export default Notification

const fadeOut = keyframes`
  0% {opacity: 1;}
  50% {opacity: 1;}
  60% {opacity: 0.7;}
  100% {opacity: 0;} 
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  margin: auto;
  bottom: 16px;
  left: 50%;
  margin-left: -115px;
`

const NotificationContainer = styled.div`
    max-width: 430px;
    max-height: 200px;
    overflow: hidden;
    padding: 12px;
    border-radius: 5px;
    z-index: 99;
    font-weight: bold;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-name: ${fadeOut};
    animation-duration: 3s;

    ${({ type, theme, display }) => `
       background-color: ${type === "success" && theme.color.secondary.green};
       background-color: ${type === "error" && theme.color.secondary.roseRed};
       display: ${display};
  `}
`;

const Message = styled.p`
  ${({ theme }) => `
    color: ${theme.color.main.white};
    font-size: ${theme.fontSize.medium}
  `}
`;

const ClearIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: bold;
  cursor: pointer;

  ${({ theme }) => `
    color: ${theme.color.main.white};
  `}
`;
