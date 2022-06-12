import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <>
      <LogoTitle>Andrijić House</LogoTitle>
    </>
  );
}

export default Logo;

const LogoTitle = styled.div`
  ${({ theme }) => `
   font-family: ${theme.fontFamily.secondary};
   color: ${theme.color.main.gold};
   font-size: ${theme.fontSize.large};
`}
`;
