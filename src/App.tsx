import { SimpleGrid, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import defaultBackground from "./Images/IMG_6678.jpeg";
import Background from "./Components/Background";

function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];
  const [background, setBackground] = useState(`${defaultBackground}`);

  return (
    <SimpleGrid
      templateAreas={`"header header header header"
        "main main main main"
        "footer footer footer footer"`}
      gridTemplateRows={"50px 1fr 25px"}
      minHeight={"max-content"}
      columns={4}
      backgroundImage={defaultBackground}
      backgroundSize={"cover"}
      flexDir={"row-reverse"}
      backgroundRepeat={"no-repeat"}
    >
      <GridItem pl="2" bg="red.300" area={"header"} alignContent={"flex-start"}>
        <NavBar menuItems={menuItems} />
      </GridItem>
      <GridItem pl="2" area={"main"} height={"700px"}>
        <p id="CentralText"> Here's some sample text</p>
      </GridItem>
      <GridItem pl="2" area={"footer"} bg="blue.300" />
    </SimpleGrid>
  );
}

export default App;
