import React, {Component} from 'react';
import _ from 'lodash';

export default class Album extends Component {
    constructor(props) {
        super(props);

        this.toggleSelect = this.toggleSelect.bind(this);
        this.state = {
            selected : false
        };
    }

    toggleSelect() {
        this.setState({selected: !this.state.selected});
    }

    render() {
        const style = _.clone(this.props.style);
        style.display = 'flex';
        style.padding = 2;

        if (this.state.selected) {
            style.backgroundColor = '#40e1ff';
        }

        return (
            <div style={style} onClick = {this.toggleSelect}>
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
