import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import "react-awesome-lightbox/build/style.css";

const RoomsPage = () => {
  const roomsImages = [
    {src: "/images/room-image.png", caption: "Image 1"},
    {src: "/images/room2-image.jpg", caption: "Image 2"},
    {src: "/images/room3-image.jpg", caption: "Image 3"},
    {src: "/images/room4-image.jpg", caption: "Image 4"},
    {src: "/images/room5-image.jpg", caption: "Image 5"},
    {src: "/images/room6-image.jpg", caption: "Image 6"},
    {src: "/images/room7-image.jpg", caption: "Image 7"},
    {src: "/images/room8-image.jpg", caption: "Image 8"},
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
