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
  Image
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
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text size={6} textColor="secondary">{'\u00A0\u00A0\u00A0\u00A0\u00A0'}///</Text>
          <Heading size={6} textColor="primary" caps>Why React</Heading>
          <Text size={6} textColor="secondary">///</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={"..assets/PDP.png"} />
        </Slide>
      </Deck>
    );
  }
}
