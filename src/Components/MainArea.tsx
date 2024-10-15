import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children?: ReactNode;
  id?: string;
}

const MainArea = ({ children, id }: props) => {
  return <Box id={id}>{children}</Box>;
};

export default MainArea;
