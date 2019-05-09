import React, { Component } from 'react';
import { Page, Toolbar, ToolbarButton, ListItem, List, ListHeader } from 'react-onsenui';
import AppSelector from '../AppSelector/AppSelector';
import GenerateIconsForMostPopularApps from '../GenerateIconsForMostPopularApps/GenerateIconsForMostPopularApps';
import CustomIconGenerator from '../CustomIconGenerator/CustomIconGenerator';
import './Home.component.css';


class Home extends Component {
    constructor(props) {
        super();
        this.state = {
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    renderBottomToolbar = () => {
        return (
            <Toolbar>
                <div className="left"></div>
                <div className="center">Office-like Icon Generator</div>
                <div className="right"></div>
            </Toolbar>
        )
    }

    render() {
        return (
            <Page className="Home" renderBottomToolbar={this.renderBottomToolbar}>
                <List>
                    <ListHeader>Select an app from the google play store.</ListHeader>
                    <ListItem>
                        <AppSelector />
                    </ListItem>
                    <ListHeader>Generate office like icons for the most popular play store apps.</ListHeader>
                    <ListItem>
                        <GenerateIconsForMostPopularApps />
                    </ListItem>
                    <ListHeader>Generate custom office like icons.</ListHeader>
                    <ListItem>
                        <CustomIconGenerator />
                    </ListItem>
                </List>
            </Page>
        );
    }
}

export default Home;
