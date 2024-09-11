import { Image } from "@chakra-ui/react";
import def, { bgImageList } from "../assets/BackgroundImageList";

interface props {
  bgImage: string;
}

const BackGroundImage = () => {
  let idx = 0;

  idx = (idx + 1) % bgImageList.length;
  setInterval(() => {
    bgImage = bgImageList[idx];
  }, 5000);

  return <Image src={bgImage} />;
};

export default BackGroundImage;
