import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import { useTranslation } from "react-i18next";

const ExteriorPage = () => {
  const { t } = useTranslation();

  const exteriorImages = [
    { src: "/images/exterior-image.png", caption: "Image 1" },
    { src: "/images/exterior2-image.png", caption: "Image 2" },
    { src: "/images/exterior3-image.png", caption: "Image 3" },
    { src: "/images/exterior4-image.png", caption: "Image 4" },
    { src: "/images/exterior5-image.png", caption: "Image 5" },
    { src: "/images/exterior6-image.png", caption: "Image 6" },
    { src: "/images/exterior7-image.png", caption: "Image 7" },
    { src: "/images/exterior8-image.png", caption: "Image 8" },
    { src: "/images/exterior9-image.png", caption: "Image 9" },
    { src: "/images/exterior10-image.png", caption: "Image 10" },
    { src: "/images/exterior11-image.png", caption: "Image 11" },
    { src: "/images/exterior12-image.png", caption: "Image 12" },
    { src: "/images/exterior13-image.png", caption: "Image 13" },
    { src: "/images/exterior14-image.png", caption: "Image 14" },
    { src: "/images/exterior15-image.png", caption: "Image 15" },
    { src: "/images/exterior16-image.png", caption: "Image 16" },
  ];

  return (
    <>
      <TitleImage
        textPartOne={t("imageTitle.exteriorImage.partOne")}
        textPartTwo={t("imageTitle.exteriorImage.partTwo")}
        imageSrc="/images/exterior-image.png"
      />
      <Images imageList={exteriorImages} />
    </>
  );
};

export default ExteriorPage;
