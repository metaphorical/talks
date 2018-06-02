// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  pdp: require("../assets/PDP.png"),
  rendering: require("../assets/rendering.png"),
  theline: require("../assets/YEEEEZ.jpg")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            UI for Black Friday
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            ///
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
          Rastko Vukasinovic
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
          Senior Solution Architect @ Adidas
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            ///
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={6} textColor="secondary">{'\u00A0\u00A0\u00A0\u00A0\u00A0'}///</Text>
          <Heading size={6} textColor="primary" caps>Why React</Heading>
          <Text size={6} textColor="secondary">///</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={6} textColor="secondary">{'\u00A0\u00A0\u00A0\u00A0\u00A0'}///</Text>
          <Heading size={6} textColor="primary" >JSX - native virtual DOM</Heading>
          <Text size={6} textColor="secondary">///</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <CodePane 
            source="<ul class='list'>
                      results.map((item) => <li>{item.name}</li>)
                    </ul>"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.pdp.replace('/', '')} margin="-25px auto" width="25% !important" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
        <Text size={6} textColor="secondary">{'\u00A0\u00A0\u00A0\u00A0\u00A0'}///</Text>
        <Heading size={6} textColor="secondary">As it gets more complex...</Heading>
        <Text size={6} textColor="secondary">///</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.theline.replace('/', '')} margin="-25px auto"  />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.rendering.replace('/', '')} margin="-25px auto" />
        </Slide>
        
      </Deck>
    );
  }
}
