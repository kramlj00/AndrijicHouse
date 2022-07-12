import React from "react";
import TitleImage from "../components/commons/TitleImage";
import HomeCard from "../components/home/HomeCard";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import useMedia from 'use-media';
import { theme } from "../themes/defaultTheme";

const HomePage = () => {
  const { t } = useTranslation();

  const isTabletScreen = useMedia({
    minWidth: theme.breakpoints.mobile,
    maxWidth: theme.breakpoints.tablet,
  });
  const isMobileScreen = useMedia({
    maxWidth: theme.breakpoints.mobile,
  });
  const imageSrc = isTabletScreen ? "/images/tablet-home-image.jpg" : isMobileScreen ? "/images/mobile-home-image.jpg" : "/images/home-image.jpg";

  return (
    <>
      <Fade triggerOnce>
        <TitleImage
          textPartOne={t("imageTitle.homeImage.partOne")}
          textPartTwo={t("imageTitle.homeImage.partTwo")}
          imageSrc={imageSrc}
          moveToLeft
        />
      </Fade>
      <HomeCard />
    </>
  );
};

export default HomePage;
