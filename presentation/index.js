// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  //Appear,
  //BlockQuote,
  //Cite,
  //CodePane,
    Deck,
  //Fill,
    Heading,
  //Image,
  //Layout,
  //Link,
  //ListItem,
  //List,
  //Markdown,
  //Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
    primary: '#40e1ff'
}, {
    primary: 'Helvetica'
});

export default class Presentation extends Component {
    render() {
        return (
            <Spectacle theme = {theme}>
                <Deck transition = {['zoom', 'slide']} transitionDuration={500}>
                    <Slide transition = {['zoom']}>
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            ReactJS
                        </Heading>
                        <Heading size={1} fit caps margin = "50px 0 0 0">
                            A javascript library for building user interfaces
                        </Heading>
                        <Text>Presented by Aaron Bruce</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
