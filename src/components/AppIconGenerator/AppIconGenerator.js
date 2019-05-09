import React, { Component } from 'react';
import { Page, Toolbar, BackButton, ListItem, List } from 'react-onsenui';
import styles from './AppIconGenerator.component.css';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { createImage } from '../../lib/image';

class AppIconGenerator extends Component {
    constructor(props) {
        super();
        this.state = {
            ...queryString.parse(props.location.search)
        };

    }

    componentWillMount() {

    }

    componentDidMount = async () => {
        await createImage({
            canvas: this.canvas,
            url: this.state.icon,
            firstLetter: this.state.title[0],
            shape: '' // square, round, rounded
        });

        
    }

    handleImageLoad = () => {

    }

    componentWillUnmount() {
    }

    renderBottomToolbar = () => {

        return (
            <Toolbar>
                <div className="left"><BackButton onClick={this.props.history.goBack} /></div>
                <div className="center">Office-like Icon Generator</div>
                <div className="right"></div>
            </Toolbar>
        )
    }

    render() {
        console.log(this.props);
        return (
            <Page className="Home" renderBottomToolbar={this.renderBottomToolbar}>
                <h2>{this.state.title} Icon</h2>
                <br/>
                <canvas width="512" height="512" ref={canvas => this.canvas = canvas}></canvas>
            </Page>
        );
    }
}

export default withRouter(AppIconGenerator);
