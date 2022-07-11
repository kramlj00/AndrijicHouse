import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const ExteriorPage = () => {
  const { t } = useTranslation();

  const exteriorImages = [
    { src: "/images/exterior2-image.jpg", caption: "Image 2" },
    { src: "/images/exterior3-image.jpg", caption: "Image 3" },
    { src: "/images/exterior4-image.jpg", caption: "Image 4" },
    { src: "/images/exterior5-image.jpg", caption: "Image 5" },
    { src: "/images/exterior6-image.jpg", caption: "Image 6" },
    { src: "/images/exterior7-image.jpg", caption: "Image 7" },
    { src: "/images/exterior8-image.jpg", caption: "Image 8" },
    { src: "/images/exterior9-image.jpg", caption: "Image 9" },
    { src: "/images/exterior10-image.jpg", caption: "Image 10" },
    { src: "/images/exterior11-image.jpg", caption: "Image 11" },
    { src: "/images/exterior12-image.jpg", caption: "Image 12" },
    { src: "/images/exterior13-image.jpg", caption: "Image 13" },
    { src: "/images/exterior14-image.jpg", caption: "Image 14" },
    { src: "/images/exterior15-image.jpg", caption: "Image 15" },
    { src: "/images/exterior16-image.jpg", caption: "Image 16" },
    { src: "/images/exterior17-image.jpg", caption: "Image 17" },
    { src: "/images/exterior18-image.jpg", caption: "Image 18" },
    { src: "/images/exterior19-image.jpg", caption: "Image 19" },
    { src: "/images/exterior20-image.jpg", caption: "Image 20" },
    { src: "/images/exterior21-image.jpg", caption: "Image 21" },
    { src: "/images/exterior22-image.jpg", caption: "Image 22" },
    { src: "/images/exterior23-image.jpg", caption: "Image 23" },
    { src: "/images/exterior24-image.jpg", caption: "Image 24" },
    { src: "/images/exterior25-image.jpg", caption: "Image 25" },
    { src: "/images/exterior26-image.jpg", caption: "Image 26" },
    { src: "/images/exterior27-image.jpg", caption: "Image 27" },
    { src: "/images/exterior28-image.jpg", caption: "Image 28" },
    { src: "/images/exterior29-image.jpg", caption: "Image 29" },
    { src: "/images/exterior30-image.jpg", caption: "Image 30" },
    { src: "/images/exterior31-image.jpg", caption: "Image 31" },
  ];

  return (
    <>
      <Fade triggerOnce>
        <TitleImage
          textPartOne={t("imageTitle.exteriorImage.partOne")}
          textPartTwo={t("imageTitle.exteriorImage.partTwo")}
          imageSrc="/images/exterior-image.webp"
        />
      </Fade>
      <Images imageList={exteriorImages} />
    </>
  );
};

export default ExteriorPage;
