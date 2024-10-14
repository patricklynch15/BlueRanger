import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import defaultBackground from "../Images/IMG_6678.jpeg";

interface props {
  children: ReactNode;
  id: string;
}

const Background = ({ children, id }: props) => {
  return (
    <Box id={id} objectFit={"contain"}>
      {children}
    </Box>
  );
};

export default Background;
