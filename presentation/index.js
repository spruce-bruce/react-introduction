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
    Image,
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
import preloader from 'spectacle/lib/utils/preloader';

const theme = createTheme({
    primary: '#40e1ff'
}, {
    primary: 'Helvetica'
});

const images = {
    logo : require('../assets/react-logo-1000-transparent.png')
};
preloader(images);

export default class Presentation extends Component {
    render() {
        return (
            <Spectacle theme = {theme}>
                <Deck transition = {['zoom', 'slide']} transitionDuration={500}>
                    <Slide transition = {['zoom']} bgColor = "white">
                        <Image src={images.logo.replace('/', '')} height="293px"/>
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            React
                        </Heading>
                        <Heading size={1} fit caps textColor="black">
                            A javascript library for building user interfaces
                        </Heading>
                        <Text margin = "20px 0 0 0">Presented by Aaron Bruce</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
