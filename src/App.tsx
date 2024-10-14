import Background from "./Components/Background";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { VStack } from "@chakra-ui/react";

function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];

  return (
    <VStack id="app" justify={"center"} width={"100%"}>
      <NavBar id="navBar" menuItems={menuItems} />
      <Background id="mainArea">Main Area</Background>
      <Footer id="footer">Footer</Footer>
    </VStack>
  );
}

export default App;
