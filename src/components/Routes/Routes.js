import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './Routes.css';

import Loader from '../Loader/Loader';
import AppliedRoute from "../AppliedRoute/AppliedRoute";
import UnauthenticatedRoute from '../UnauthenticatedRoute/UnauthenticatedRoute';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import asyncComponent from '../AsyncComponent/AsyncComponent';

const Home = asyncComponent(() => import('../Home/Home'));
const AppIconGenerator = asyncComponent(() => import('../AppIconGenerator/AppIconGenerator'));

class Routes extends Component {
    constructor(props) {
        super();
        this.state = {
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { childProps } = this.props;
        console.log(childProps);
        return (
            <HashRouter>
                <Switch>
                    {/* <UnauthenticatedRoute exact path="/login" component={Introduction} props={childProps} /> */}
                    {/* <UnauthenticatedRoute exact path="/no-entry" component={NoEntry} props={childProps} /> */}

                    {/* <AuthenticatedRoute exact path="/" component={Home} props={childProps} /> */}
                    {/* <AuthenticatedRoute exact path="/new-route" component={NewRouteOrder} props={childProps} /> */}

                    <AppliedRoute exact path="/" component={Home} />
                    <AppliedRoute exact path="/icon-generator" component={AppIconGenerator} />
                </Switch>
            </HashRouter>
        );
    }
}

export default Routes;
