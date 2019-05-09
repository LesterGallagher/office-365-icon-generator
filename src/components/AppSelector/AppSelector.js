import React, { Component } from 'react';
import { SearchInput, Button, List, ListItem, ListHeader, Icon } from 'react-onsenui';
import './AppSelector.component.css';
import GooglePlayStore from '../../flux-stores/GooglePlayStore';
import AppSearchResults from '../AppSearchResults/AppSearchResults';

class AppSelector extends Component {
    constructor(props) {
        super();
        this.state = {
            text: '',
            results: GooglePlayStore.searchResults,
            loading: false
        };            


    }

    componentWillMount() {
        GooglePlayStore.on('change', this.handleGooglePlayStoreChange);
    }

    componentWillUnmount() {
        GooglePlayStore.removeListener('change', this.handleGooglePlayStoreChange);
    }

    handleGooglePlayStoreChange = action => {
        this.setState({
            results: GooglePlayStore.searchResults,
            loading: false
        });
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
    }

    search = () => {
        this.setState({
            loading: true,
            results: []
        });
        GooglePlayStore.doApplicationSearch(this.state.text);
    }

    render() {
        const { text } = this.state;
        return (
            <List className="AppSelector">
                <ListItem>
                    <div className="center">
                        <SearchInput value={text} onChange={this.handleChange}></SearchInput>
                    </div>
                    <div className="right">
                        <Button onClick={this.search}>Search</Button>
                    </div>
                </ListItem>
                <AppSearchResults loading={this.state.loading} list={this.state.results} />
            </List>
        );
    }
}

export default AppSelector;
