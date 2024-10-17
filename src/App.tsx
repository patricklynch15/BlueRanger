import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainArea from "./Components/MainArea";
import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react'
import img1 from "./Images/IMG_6848.jpeg"

function App() {
  const menuItems = ["Home", "Gallery", "Book Session", "More"];

  return (
    <div id="app">
      <NavBar id="navBar" menuItems={menuItems} />
      <MainArea id="mainArea" >

        <Grid className="grid1" >
        <GridItem gridArea={"a"} bgColor={"brown"}>Af</GridItem>
         
          <GridItem gridArea={"b"} bgColor="blue" objectFit={'fill'}>
             Here's some more text
             <Box boxSize={"sm"}>
              <Image id="pic" src={img1} boxSize={"fit-content"} overflowY={"hidden"}/>
             </Box>
          </GridItem>

          {/* <GridItem gridArea={"b"} bgColor={"blue"}>Here's some text</GridItem> */}
          
          <GridItem gridArea={"d"} bgColor={"greenyellow"}>Here's some text again</GridItem>
     
        <GridItem gridArea={"c"} bgColor={"whitesmoke"}>Ag</GridItem>
        <GridItem gridArea={"e"} bgColor={"whitesmoke"}>Ag</GridItem>
        

        </Grid>
      </MainArea>
      <Footer id="footer">Footer</Footer>
    </div>
  );
}

export default App;
