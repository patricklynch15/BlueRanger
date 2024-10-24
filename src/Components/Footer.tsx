import { ReactNode } from "react";

interface props {
  children?: ReactNode;
  id: string;
}

const Footer = ({ children, id }: props) => {
  return <div id={id}>{children}</div>;
};

export default Footer;
