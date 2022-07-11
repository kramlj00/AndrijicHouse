import React, { useState } from "react";
import styled from "styled-components";
import LightBox from "react-awesome-lightbox";
import { Slide } from "react-awesome-reveal";

const Images = ({ imageList }) => {
  const [showLight, setShowLight] = useState(null);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };
  return (
    <>
    <Slide triggerOnce direction="up">
      <ImagesContainer>
      {imageList.map((image, index) => (
        <Image
          src={image.src}
          alt={image.title}
          onClick={() => showLightBox(index)}
        />
      ))}
      </ImagesContainer>
      </Slide>
      {showLight && (
        <LightBox
          images={imageList.map((img) => ({ url: img.src, title: img.caption }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
          allowRotate={false}
          showTitle={false}
          buttonAlign="center"
        />
      )}
    </>
  );
};

export default Images;

const Image = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: all 0.4s ease-out;
  }

  ${({ theme }) => `
    margin: ${theme.spacing.small};
  `}
`;

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
