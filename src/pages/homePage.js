import React from "react";
import TitleImage from "../components/commons/TitleImage";
import HomeCard from "../components/home/HomeCard";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Fade triggerOnce>
        <TitleImage
          textPartOne={t("imageTitle.homeImage.partOne")}
          textPartTwo={t("imageTitle.homeImage.partTwo")}
          imageSrc="/images/home-image.webp"
          moveToLeft
        />
      </Fade>
      <HomeCard />
    </>
  );
};

export default HomePage;
