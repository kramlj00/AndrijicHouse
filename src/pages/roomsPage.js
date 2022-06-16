import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";

const RoomsPage = () => {
    const roomsImages = [
        "/images/room-image.png",
        "/images/room-image.png",
        "/images/room-image.png",
        "/images/room-image.png",
        "/images/room-image.png",
        "/images/room-image.png",
        "/images/room-image.png",
      ];
  return (
    <>
      <TitleImage
        textPartOne="Enjoy your dream"
        textPartTwo="vacation"
        imageSrc="/images/room-image.png"
      />
      <Images imageList={roomsImages}/>
    </>
  );
};

export default RoomsPage;
