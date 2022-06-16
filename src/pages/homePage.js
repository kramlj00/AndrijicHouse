import React from "react";
import TitleImage from "../components/commons/TitleImage";
import HomeCard from "../components/home/HomeCard";

const HomePage = () => {
  return (
    <>
      <TitleImage
        textPartOne="Enjoy a luxury"
        textPartTwo="experience"
        imageSrc="/images/home-image.png"
      />
      <HomeCard />
    </>
  );
};

export default HomePage;
