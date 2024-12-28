import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ImageTile from "./Components/ImageTile";
import MainArea from "./Components/MainArea";
import { Grid, GridItem, Text, Image } from '@chakra-ui/react';
import testImg from "./Images/IMG_6678.jpeg";


function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];

  return (
    <div id="app">
      <NavBar id="navBar" menuItems={menuItems} />
      <MainArea id="mainArea" >
        <Text position={"absolute"} top="100px" left="100px">Delete this later ...</Text> 

        <Grid className="grid1">
          <GridItem gridArea={"a"}>Whatever whatever</GridItem>
          
          <GridItem gridArea={"b"} objectFit={'fill'}>
            <ImageTile className="pic" id="mainAreaImageTile" srcName={testImg} alt={testImg}/>

          </GridItem>
          <GridItem gridArea={"d"}></GridItem>
          <GridItem gridArea={"c"}></GridItem>
          <GridItem gridArea={"e"}></GridItem>

        </Grid>
      </MainArea>
      <Footer id="footer">
        <i> Blue Ranger LLC </i>
        </Footer>
    </div>
  );
}

export default App;
