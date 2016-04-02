import React, {Component} from 'react';

export default class Album extends Component {
    render() {
        const style = this.props.style;
        style.display = 'flex';
        return (
            <div style={style}>
                <img style={styles.image} src={this.props.img} />
                <div style={styles.albumInfo}>
                    <div>{this.props.artist}</div>
                    <div>{this.props.albumName}</div>
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
        paddingLeft: 10,
        textAlign: 'left'
    }
};
