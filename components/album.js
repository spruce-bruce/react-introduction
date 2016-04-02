import React, {Component} from 'react';

export default class Album extends Component {
    render() {
        const style = this.props.style;
        style.display = 'flex';
        return (
            <div style={style}>
                <img style={styles.image} src="https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314" />
                <div style={styles.albumInfo}>
                    <div>Darlinside</div>
                    <div>Birds Say</div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        display : 'block',
        height : 150,
        marginRight : 10
    },
    albumInfo : {

    }
};
