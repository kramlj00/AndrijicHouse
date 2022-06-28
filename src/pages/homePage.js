import React from "react";
import TitleImage from "../components/commons/TitleImage";
import HomeCard from "../components/home/HomeCard";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleImage
        textPartOne={t("imageTitle.homeImage.partOne")}
        textPartTwo={t("imageTitle.homeImage.partTwo")}
        imageSrc="/images/home-image.png"
      />
      <HomeCard />
    </>
  );
};

export default HomePage;
