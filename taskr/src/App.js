import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import './App.css';

class App extends Component {
    // requireAuth(nextState, replace) {
    //     if (!AuthenticationManager.loggedIn()) {
    //         replace({
    //             pathname: '/login', state: {nextPathname: nextState.location.pathname}
    //         })
    //     }
    // }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AuthenticatedLayout}>
                    <IndexRoute component={AssetsView} onEnter={this.requireAuth}></IndexRoute>
                    <Route path="fieldView" component={FieldView} onEnter={this.requireAuth}></Route>
                    <Route path="fieldView/:assetKey" component={FieldView} onEnter={this.requireAuth}></Route>
                    <Route path="ndviToolkit" component={NdviToolkitTestView} onEnter={this.requireAuth}></Route>
                </Route>
                {/*<Route path="/login" component={NoMenuLayout}>*/}
                    {/*<IndexRoute component={LoginView}></IndexRoute>*/}
                {/*</Route>*/}
                {/*<Route path="/logout" component={NoMenuLayout}>*/}
                    {/*<IndexRoute component={LogoutView}></IndexRoute>*/}
                {/*</Route>*/}
            </Router>
        );
    }
}

export default App;
