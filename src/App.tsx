import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Container, Divider } from "@chakra-ui/react";
import MainArea from "./Components/MainArea";

function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];

  return (
    <div id="app">
      <NavBar id="navBar" menuItems={menuItems} />
      <MainArea id="mainArea">Here's some text</MainArea>
      <Footer id="footer">Footer</Footer>
    </div>
  );
}

export default App;
