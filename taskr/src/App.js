import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import './App.css';
import AuthenticatedLayout from "./components/layouts/AuthenticatedLayout";
import WelcomePage from "./components/welcome/WelcomePage";
import AboutPage from "./components/about/AboutPage";
import TaskBoardPage from "./components/task_board/TaskBoardPage";

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
                    <IndexRoute component={WelcomePage}></IndexRoute>
                    {/*<IndexRoute component={AssetsView} onEnter={this.requireAuth}></IndexRoute>*/}
                    {/*<Route path="about" component={FieldView} onEnter={this.requireAuth}></Route>*/}
                    <Route path="taskBoard" component={TaskBoardPage}></Route>
                    <Route path="about" component={AboutPage}></Route>
                    {/*<Route path="fieldView/:assetKey" component={FieldView} onEnter={this.requireAuth}></Route>*/}
                    {/*<Route path="ndviToolkit" component={NdviToolkitTestView} onEnter={this.requireAuth}></Route>*/}
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
