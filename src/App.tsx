import { SimpleGrid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import ImageTile from "./Components/ImageTile";
import bgimg from "./Images/15B9D2AD-219B-442E-9DF8-FEF33DF5C2AD.jpeg";

function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];
  return (
    <SimpleGrid
      bgImage={`${bgimg}`}
      templateAreas={`"header header header header"
  "main main main main"
  "footer footer footer footer"`}
      gridTemplateRows={"50px 1fr 50px"}
      minHeight={"max-content"}
      // gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      columns={4}
    >
      <GridItem pl="2" bg="orange.300" area={"header"} marginTop={"auto"}>
        <NavBar menuItems={menuItems} />
      </GridItem>
      <GridItem pl="2" area={"main"} height={"700px"}>
        <ImageTile />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </SimpleGrid>
  );
}

export default App;
