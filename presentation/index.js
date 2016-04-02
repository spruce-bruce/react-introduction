// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
    Appear,
  //BlockQuote,
  //Cite,
  //CodePane,
    Deck,
    Fit,
    Heading,
    Image,
    Layout,
  //Link,
    ListItem,
    List,
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
    primary : '#40e1ff',
    secondary : 'black',
    tertiary : 'white'
}, {
    primary: 'Helvetica'
});

const pacmanColor = '#247BA0';
theme.screen.progress.pacman.point.borderColor = pacmanColor;
theme.screen.progress.pacman.pacmanTop.background = pacmanColor;
theme.screen.progress.pacman.pacmanBottom.background = pacmanColor;

const images = {
    logo : require('../assets/react-logo-1000-transparent.png'),
    aaron : require('../assets/aaron.png'),
    synapse : require('../assets/synapse.svg'),
    facebook : require('../assets/facebook.png')
};
preloader(images);

export default class Presentation extends Component {
    render() {
        return (
            <Spectacle theme = {theme}>
                <Deck transition = {['zoom', 'slide']} transitionDuration={500}>

                    <Slide transition = {['zoom']} bgColor = "white">
                        <Layout>
                            <Fit>
                                <Image src={images.logo.replace('/', '')} height="250px" />
                            </Fit>
                            <Heading size={1} lineHeight={1} textColor="black" textAlign="center" fit margin = "20px 0 0 0">
                                React
                            </Heading>
                        </Layout>
                        <Heading size={1} fit caps textColor="primary">
                            A javascript library for building user interfaces
                        </Heading>
                        <Text margin = "200px 0 0 0">A Presentation by Aaron Bruce</Text>
                    </Slide>

                    <Slide notes = {"Mention PHP and React meetups"} transition = {['slide']}>
                        <Image src={images.aaron.replace('/', '')} fit display="block" height="500px" />
                        <Text margin="30px 0 0 0">synapsestudios.com</Text>
                    </Slide>

                    <Slide transition = {['slide']} bgColor="secondary" textColor="primary">
                        <Layout>
                            <Fit>
                                <Image src={images.facebook.replace('/', '')} height="100px" />
                            </Fit>
                            <Heading margin = "25px 0 0 20px" fit>Created by Facebook</Heading>
                        </Layout>
                        <List margin="150px 0 0 0">
                            <Appear>
                                <ListItem margin="0 0 20px 0">Reusable User Interface</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Super Fast</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Data Model : Easy to reason about</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition = {['slide']} bgColor="tertiary" textColor="secondary">
                        jfjjasdiure
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
