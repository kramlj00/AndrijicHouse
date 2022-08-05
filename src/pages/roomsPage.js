import React from "react";
import Images from "../components/commons/Images";
import TitleImage from "../components/commons/TitleImage";
import "react-awesome-lightbox/build/style.css";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const RoomsPage = () => {
  const { t } = useTranslation();

  const roomsImages = [
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room2-image_f63dok.jpg", caption: "Image 2" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room3-image_so8ux6.jpg", caption: "Image 3" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room4-image_fi4i61.jpg", caption: "Image 4" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room5-image_xh4qzi.jpg", caption: "Image 5" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room6-image_n64brb.jpg", caption: "Image 6" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room7-image_j20mdd.jpg", caption: "Image 7" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room8-image_etw1z2.jpg", caption: "Image 8" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room9-image_o2rrbv.jpg", caption: "Image 9" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room10-image_hvvxpa.jpg", caption: "Image 10" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room11-image_sruv2w.jpg", caption: "Image 11" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room12-image_wc5o37.jpg", caption: "Image 12" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room13-image_hvz6ra.jpg", caption: "Image 13" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room14-image_lbjdab.jpg", caption: "Image 14" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room15-image_fqgu9g.jpg", caption: "Image 15" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room16-image_hl360g.jpg", caption: "Image 16" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room17-image_ir36t2.jpg", caption: "Image 17" },
    { src: "https://res.cloudinary.com/kristina1950/image/upload/v1659702043/rooms/room18-image_lbt6nf.jpg", caption: "Image 18" },
  ];

  return (
    <>
      <Fade triggerOnce>
        <TitleImage
          textPartOne={t("imageTitle.roomsImage.partOne")}
          textPartTwo={t("imageTitle.roomsImage.partTwo")}
          imageSrc="https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room6-image_n64brb.jpg"
          moveToLeft
        />
      </Fade>
      <Images imageList={roomsImages} />
    </>
  );
};

export default RoomsPage;
