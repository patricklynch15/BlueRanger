import { Container, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import defaultBackground from "../Images/IMG_6678.jpeg";

interface props {
  children?: ReactNode;
}

const Background = ({ children }: props) => {
  return (
    <Container backgroundImage={defaultBackground} objectFit={"contain"}>
      {children}
    </Container>
  );
  //   return <Image src={defaultBackground} />;
};

export default Background;
