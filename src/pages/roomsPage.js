import React, {useState} from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const RoomsPage = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const roomsImages = [
    {src: "/images/exterior-image.png", caption: "Image 1"},
    {src: "/images/home-image.png", caption: "Image 2"},
    {src: "/images/room-image.png", caption: "Image 3"},
    {src: "/images/exterior-image.png", caption: "Image 4"},
    {src: "/images/home-image.png", caption: "Image 5"},
    {src: "/images/exterior-image.png", caption: "Image 6"},
    {src: "/images/home-image.png", caption: "Image 7"},
    {src: "/images/room-image.png", caption: "Image 8"},
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
