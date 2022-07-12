import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import "react-awesome-lightbox/build/style.css";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import useMedia from 'use-media';
import { theme } from "../themes/defaultTheme";

const RoomsPage = () => {
  const { t } = useTranslation();

  const roomsImages = [
    { src: "/images/room2-image.jpg", caption: "Image 2" },
    { src: "/images/room3-image.jpg", caption: "Image 3" },
    { src: "/images/room4-image.jpg", caption: "Image 4" },
    { src: "/images/room5-image.jpg", caption: "Image 5" },
    { src: "/images/room6-image.jpg", caption: "Image 6" },
    { src: "/images/room7-image.jpg", caption: "Image 7" },
    { src: "/images/room8-image.jpg", caption: "Image 8" },
    { src: "/images/room9-image.jpg", caption: "Image 9" },
    { src: "/images/room10-image.jpg", caption: "Image 10" },
    { src: "/images/room11-image.jpg", caption: "Image 11" },
    { src: "/images/room12-image.jpg", caption: "Image 12" },
    { src: "/images/room13-image.jpg", caption: "Image 13" },
    { src: "/images/room14-image.jpg", caption: "Image 14" },
    { src: "/images/room15-image.jpg", caption: "Image 15" },
    { src: "/images/room16-image.jpg", caption: "Image 16" },
    { src: "/images/room17-image.jpg", caption: "Image 17" },
    { src: "/images/room18-image.jpg", caption: "Image 18" },
  ];
  const isTabletScreen = useMedia({
    minWidth: theme.breakpoints.mobile,
    maxWidth: theme.breakpoints.tablet,
  });
  const isMobileScreen = useMedia({
    maxWidth: theme.breakpoints.mobile,
  });
  const imageSrc = isTabletScreen ? "/images/tablet-room-image.jpg" : isMobileScreen ? "/images/mobile-room-image.jpg" : "/images/room-image.jpg";

  return (
    <>
      <Fade triggerOnce>
        <TitleImage
          textPartOne={t("imageTitle.roomsImage.partOne")}
          textPartTwo={t("imageTitle.roomsImage.partTwo")}
          imageSrc={imageSrc}
          moveToLeft
        />
      </Fade>
      <Images imageList={roomsImages} />
    </>
  );
};

export default RoomsPage;
