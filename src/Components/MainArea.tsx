import { ReactNode } from "react";

interface props {
  children?: ReactNode;
  id?: string;
}

const MainArea = ({ children, id }: props) => {
  return <div id={id}>{children}</div>;
};

export default MainArea;
