import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ImageTile from "./Components/ImageTile";
import MainArea from "./Components/MainArea";
import { Grid, GridItem, Text, Image } from '@chakra-ui/react';
import testImg from "./Images/DSC03696.jpeg";


function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];

  return (
    <div id="app">
      <NavBar id="navBar" menuItems={menuItems} />
      <MainArea id="mainArea" >
        <Text position={"absolute"} top="200px" left="60px">Delete this later...</Text> 

      <Grid className="grid1" >
        <GridItem gridArea={"a"} bgColor={"brown"}></GridItem>
         
        <GridItem gridArea={"b"} bgColor="blue" objectFit={'fill'}>
          <ImageTile srcName={testImg} alt={testImg}/>

        </GridItem>
        <GridItem gridArea={"d"} bgColor={"greenyellow"}></GridItem>
        <GridItem gridArea={"c"} bgColor={"whitesmoke"}></GridItem>
        <GridItem gridArea={"e"} bgColor={"whitesmoke"}></GridItem>
        

        </Grid>
      </MainArea>
      <Footer id="footer">
        <div>
        <i> Blue Ranger LLC </i>
        </div>
        </Footer>
    </div>
  );
}

export default App;
