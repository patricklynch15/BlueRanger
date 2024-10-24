import { Image } from "@chakra-ui/react"


interface props {
  srcName: string;
  alt?: string;
}

const ImageTile = ({srcName, alt}:props) => {
  let src = "." + srcName; // redirects to appropriate (parent) directory i.e. "../ vs ./"
  console.log(srcName);
  return (<Image key={srcName} src={src} alt="picture not working!"/>)
}

export default ImageTile