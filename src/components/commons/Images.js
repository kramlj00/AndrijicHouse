import React from 'react'
import styled from "styled-components";

const Images = ({imageList}) => {
  return (
    <ImagesContainer>
      {imageList.map((image, index) => {
        return <Image src={image} alt={index} key={index} />;
      })}
    </ImagesContainer>
  )
}

export default Images

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
  z-index: -1;
  
  ${({ theme }) => `
    margin-top: ${theme.spacing.larger};
  `}
`;

const Image = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;

  ${({ theme }) => `
    margin: ${theme.spacing.small};
  `}
`;
