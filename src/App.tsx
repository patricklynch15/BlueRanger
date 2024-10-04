import { SimpleGrid, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import defaultBackground from "./Images/IMG_6678.jpeg";
import Background from "./Components/Background";
import Footer from "./Components/Footer";

function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];
  const [background, setBackground] = useState(`${defaultBackground}`);

  return (
    <>
      <NavBar menuItems={menuItems} />
      <p id="CentralText"> Here's some sample text</p>
    </>
  );
}

export default App;
