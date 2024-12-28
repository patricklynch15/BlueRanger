import { Container, Image } from "@chakra-ui/react"


interface props {
  className:string;
  srcName: string;
  id?: string;
  alt?: string;
}

const ImageTile = ({className, srcName, alt, id}:props) => {
  let src = "." + srcName; // redirects to appropriate (parent) directory i.e. "../ vs ./"
  return (
    <Container height={"100%"} overflow={"hidden"} display={"flex"}>
      <Image className={className} id={id} key={src} src={src} alt={alt}/>
    </Container>
  );
}

export default ImageTile