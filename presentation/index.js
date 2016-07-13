// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
    Appear,
  //BlockQuote,
  //Cite,
    CodePane,
    Deck,
    Fit,
    Fill,
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

import Album from '../components/album';

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
    facebook : require('../assets/facebook.png'),
    superFast : require('../assets/super-fast.jpg'),
    sucks : require('../assets/sucks.jpg'),
    flux : require('../assets/flux.png')
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
                        <Text margin = "200px 0 10px 0">A Presentation by Aaron Bruce</Text>
                        <Text><a href="github.com/spruce-bruce">github.com/spruce-bruce</a></Text>
                        <Text><a href="https://twitter.com/TerribleAaron">@TerribleAaron</a></Text>
                    </Slide>

                    <Slide notes = {"Mention PHP and React meetups"} transition = {['slide']}>
                        <Image src={images.aaron.replace('/', '')} fit display="block" height="600px" />
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

                    <Slide transition = {['slide']} bgColor="tertiary" textColor="secondary" align="flex-start flex-start">
                        <Text size={1} textAlign="left" margin="0 0 50px 0">Reusable</Text>
                        <Heading size={2} textColor="secondary" textAlign="left" margin="100px 0 0 0">Components</Heading>

                        <List margin="100px 0 0 0">
                            <Appear>
                                <ListItem margin="0 0 20px 0">Plain javascript objects (extends Component)</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">With a catch... JSX</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Reusable - Props</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Stateful</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="tertiary"
                        textColor="secondary"
                        align="flex-start flex-start"
                        notes="Render method<br />JSX"
                    >
                        <Text size={1} textAlign="left" margin="0 0 50px 0">Reusable : Components</Text>
                        <CodePane
                            lang="jsx"
                            source = {require('raw!../code/component.code')}
                            margin = "100px 0 0 0"
                        />

                        <Album
                            style = {{marginTop: 50}}
                            img = "https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314"
                            artist = "Darlingside"
                            albumName = "Birds Say"
                        />
                    </Slide>

                    <Slide transition = {['slide']} bgColor="tertiary" textColor="secondary" align="flex-start flex-start">
                        <Text size={1} textAlign="left" margin="0 0 50px 0">Reusable : Components</Text>
                        <Fill>
                            <CodePane
                                lang="jsx"
                                source = {require('raw!../code/multi-component.code')}
                                margin = "100px 0 0 0"
                            />
                        </Fill>
                        <Fit>
                            <div>
                                <Album
                                    style = {{marginTop: 20}}
                                    img = "https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314"
                                    artist = "Darlingside"
                                    albumName = "Birds Say"
                                />
                                <Album
                                    style = {{marginTop: 20}}
                                    img = "https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314"
                                    artist = "Darlingside"
                                    albumName = "Birds Say"
                                />
                            </div>
                        </Fit>
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="tertiary"
                        textColor="secondary"
                        align="flex-start flex-start"
                    >
                        <Text size={1} textAlign="left" margin="0 0 50px 0">Reusable : Components</Text>
                        <CodePane
                            lang="jsx"
                            source = {require('raw!../code/component-props.code')}
                            margin = "100px 0 0 0"
                        />

                        <Album
                            style = {{marginTop: 50}}
                            img = "https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314"
                            artist = "Darlingside"
                            albumName = "Birds Say"
                        />
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="tertiary"
                        textColor="secondary"
                        align="flex-start flex-start"
                        notes="Render is called when props are updated"
                    >
                        <Text size={1} textAlign="left" margin="0 0 100px 0">Reusable : Components</Text>
                        <Layout>
                            <Fill>
                                <CodePane
                                    lang="jsx"
                                    source = {require('raw!../code/multi-component-props.code')}
                                    margin = "0 0 0 0"
                                />
                            </Fill>
                            <Fit>
                                <div style={{marginLeft: 10}}>
                                    <Album
                                        style = {{marginTop: 20}}
                                        img = "https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314"
                                        artist = "Darlingside"
                                        albumName = "Birds Say"
                                    />
                                    <Album
                                        style = {{marginTop: 20}}
                                        img = "https://i.scdn.co/image/0e1dc4ebdc74b8166137c9322a2eccfbadd624b0"
                                        artist = "Darlingside"
                                        albumName = "Pilot Machines"
                                    />
                                </div>
                            </Fit>
                        </Layout>
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="tertiary"
                        textColor="secondary"
                        align="flex-start flex-start"
                        notes="All the code for rendering this component is in one place"
                    >
                        <Text size={1} textAlign="left" margin="0 0 50px 0">Reusable : Components</Text>
                        <Layout>
                            <Fill>
                                <CodePane
                                    lang="jsx"
                                    source = {require('raw!../code/component-state.code')}
                                    margin = "0 0 0 0"
                                />
                            </Fill>

                            <Fit>
                                <Album
                                    style = {{marginTop: 50}}
                                    img = "https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314"
                                    artist = "Darlingside"
                                    albumName = "Birds Say"
                                />
                            </Fit>
                        </Layout>
                    </Slide>

                    <Slide transition = {['slide']}>
                        <Heading>Look at the real component</Heading>
                    </Slide>

                    <Slide transition = {['slide']} bgColor="secondary" textColor="primary">
                        <Heading margin="0 0 40px 0" textColor="primary">Performance</Heading>
                        <Appear><Image src={images.superFast.replace('/', '')} height="400px" /></Appear>
                        <Text textColor="primary">React is Super Fast!</Text>
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        notes="Legacy DOM : js first released in netscape<br />Intermediate DOM was platform specific<br />W3C standardized in 1998"
                        bgColor="tertiary"
                        textColor="secondary"
                    >
                        <Heading textColor="secondary">A little history:</Heading>
                        <Text textSize="80" textColor="primary">The DOM</Text>
                        <List margin="100px 0 0 0">
                            <Appear>
                                <ListItem margin="0 0 20px 0">1995 : Legacy DOM</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">1997 : Intermediate DOM</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">1998 : Standardization, DOM Level 1</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">2000 : getElementById(), DOM Level 2</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">2004 : Current version, DOM Level 3</ListItem>
                            </Appear>

                        </List>
                    </Slide>

                    <Slide transition = {['slide']} bgColor="tertiary" textColor="secondary">
                        <Heading margin="0 0 40px 0" textColor="secondary">The DOM Sucks!</Heading>
                        <Image src={images.sucks.replace('/', '')} height="250px" />
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="secondary"
                        textColor="primary"
                        notes="React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently"
                    >
                        <Heading textColor="primary">The Virtual DOM</Heading>
                    </Slide>

                    <Slide transition = {['slide']}>
                        <Heading fit>Performance</Heading>
                        <Text>Only render when you have to</Text>
                    </Slide>

                    <Slide transition = {['slide']} bgColor="tertiary" textColor="primary">
                        <Heading fit textColor="secondary">shouldComponentUpdate()</Heading>
                        <List margin="100px 0 0 0">
                            <ListItem margin="0 0 20px 0">PureRenderMixin</ListItem>
                            <ListItem margin="0 0 20px 0">shallowCompare()</ListItem>
                        </List>
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="secondary"
                        textColor="primary"
                    >
                        <Heading textColor="primary">DEMO</Heading>
                    </Slide>

                    <Slide transition = {['slide']}>
                        <Heading fit>Data Model</Heading>
                        <Text>Easy to reason about</Text>
                        <List>
                            <Appear>
                                <ListItem margin="0 0 20px 0">State & Props</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Flux</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Redux</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Relay</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition = {['slide']} bgColor="tertiary" textColor="primary">
                        <Heading textColor="primary">Flux</Heading>
                        <Image src={images.flux.replace('/', '')} height="250px" />
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="secondary"
                        textColor="primary"
                    >
                        <Heading textColor="primary">Redux</Heading>
                        <List>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Super popular! We use this at Synapse!</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Introduces single application store</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Reducers, middleware, dev tools</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Life is awesome!</ListItem>
                            </Appear>

                        </List>
                    </Slide>


                    <Slide transition = {['slide']} bgColor="tertiary" textColor="primary">
                        <Heading textColor="primary">Relay</Heading>
                        <List>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Single application state, like redux</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Components declare the data they're interested in</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem margin="0 0 20px 0">Relay handles communication with the server (GraphQL)</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide
                        transition = {['slide']}
                        bgColor="secondary"
                        textColor="primary"
                    >
                        <Heading textColor="primary">More Demos</Heading>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
