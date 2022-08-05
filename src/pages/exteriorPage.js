import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const ExteriorPage = () => {
  const { t } = useTranslation();

  const exteriorImages = [
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702141/exterior/exterior2-image_vpmxap.jpg", caption: "Image 2" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702142/exterior/exterior3-image_mnp0jn.jpg", caption: "Image 3" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior4-image_cvvmpo.jpg", caption: "Image 4" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior5-image_ph4ksj.jpg", caption: "Image 5" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702145/exterior/exterior6-image_hid7eo.jpg", caption: "Image 6" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior7-image_oukkjg.jpg", caption: "Image 7" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702142/exterior/exterior8-image_a2hfty.jpg", caption: "Image 8" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior9-image_esoiya.jpg", caption: "Image 9" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior10-image_wfnzg4.jpg", caption: "Image 10" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702145/exterior/exterior11-image_f7j2hu.jpg", caption: "Image 11" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702144/exterior/exterior12-image_ogvker.jpg", caption: "Image 12" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702147/exterior/exterior13-image_ay7pkg.jpg", caption: "Image 13" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702146/exterior/exterior14-image_da6ijw.jpg", caption: "Image 14" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior15-image_unyat4.jpg", caption: "Image 15" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702137/exterior/exterior16-image_b0qug0.jpg", caption: "Image 16" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702139/exterior/exterior17-image_vljnra.jpg", caption: "Image 17" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior18-image_fi613x.jpg", caption: "Image 18" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior19-image_gbdirh.jpg", caption: "Image 19" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior20-image_xsoiyw.jpg", caption: "Image 20" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior21-image_pazgkn.jpg", caption: "Image 21" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702139/exterior/exterior22-image_dlfhdw.jpg", caption: "Image 22" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0356_qgqg2u.jpg", caption: "Image 23" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0365_bli0qr.jpg", caption: "Image 25" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0357_mkzxrh.jpg", caption: "Image 26" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702185/exterior/DJI_0359_oxlhdo.jpg", caption: "Image 27" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702184/exterior/DJI_0364_dnq2hj.jpg", caption: "Image 28" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702184/exterior/DJI_0360_bivaej.jpg", caption: "Image 28" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702183/exterior/DJI_0361_tfwlqg.jpg", caption: "Image 29" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702187/exterior/DJI_0363_eyqnuh.jpg", caption: "Image 30" },
    { src: "/images/exterior31-image.jpg", caption: "Image 31" },
  ];

  return (
    <>
      <Fade triggerOnce>
        <TitleImage
          textPartOne={t("imageTitle.exteriorImage.partOne")}
          textPartTwo={t("imageTitle.exteriorImage.partTwo")}
          imageSrc="https://res.cloudinary.com/kristina1950/image/upload/v1659702187/exterior/DJI_0363_eyqnuh.jpg"
        />
      </Fade>
      <Images imageList={exteriorImages} />
    </>
  );
};

export default ExteriorPage;
