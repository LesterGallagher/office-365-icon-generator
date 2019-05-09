import React, { Component, Fragment } from 'react';
import { ListItem, ListTitle } from 'react-onsenui';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AppSearchResults.component.css';
import Loader from '../Loader/Loader';
import queryString from 'query-string';

class AppSearchResults extends Component {
    constructor(props) {
        super();
        this.state = {
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.list !== this.props.list || nextProps.loading !== this.props.loading;
    }

    // appId: "marcostudios.lovetest"
    // developer: "DH3 Games"
    // developerId: "DH3 Games"
    // free: true
    // icon: "https://lh3.googleusercontent.com/IKW3CXZYlT58-oFZG6BJMiJU_w7rfjo965mFR59YXDaqpSP_eWrOPisC-w26e6yVM_dE"
    // priceText: "FREE"
    // score: 4.2270665
    // scoreText: "4.2"
    // summary: "Are you in love? Try taking the love test calculator to find out."
    // title: "Love Test"
    // url: "https://play.google.com/store/apps/details?id=marcostudios.lovetest"

    render() {
        console.log(this.props.list);
        return (
            <Fragment>
                <ListItem>
                    <div className="center" style={{ textAlign: 'center' }}>
                        {this.props.loading
                            ? <Loader style={{ margin: 'auto' }} />
                            : this.props.list.length + ' search results...'}
                    </div>
                </ListItem>
                {this.props.list.map((app, key) => {
                    const query = queryString.stringify({ title: app.title, icon: app.icon });
                    return (
                        <ListItem tappable key={key} onClick={() => this.props.history.push(`/icon-generator?${query}`)}>
                            <div className="left">
                                <img className="list-item__thumbnail" src={app.icon} alt={app.summary} />
                            </div>
                            <div className="center">
                                <div>
                                    <ListTitle>{app.title}</ListTitle>
                                    <div style={{ marginLeft: 15 }}>
                                        <p>{app.summary}</p>
                                        <p>Developer: {app.developer}</p>
                                    </div>
                                </div>
                            </div>
                        </ListItem>
                    );
                })}
            </Fragment>
        );
    }
}

AppSearchResults.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired
}

AppSearchResults.defaultProps = {
    list: [],
    loading: false
}

export default withRouter(AppSearchResults);
