import React, {Component} from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import "./App.css";
import AuthenticatedLayout from "./components/layouts/AuthenticatedLayout";
import WelcomePage from "./components/welcome/WelcomePage";
import AboutPage from "./components/about/AboutPage";
import TaskBoardPage from "./components/task_board/TaskBoardPage";
import SignInPage from "./components/sign_in/SignInPage";
import UnauthenticatedLayout from "./components/layouts/UnauthenticatedLayout";

class App extends Component {

    requireAuth(nextState, replace) {
        if (true) {
            replace({
                pathname: '/signIn', state: {nextPathname: nextState.location.pathname}
            })
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AuthenticatedLayout}>
                    <IndexRoute component={WelcomePage} onEnter={this.requireAuth}></IndexRoute>
                    <Route path="taskBoard" component={TaskBoardPage} onEnter={this.requireAuth}></Route>
                    <Route path="about" component={AboutPage} onEnter={this.requireAuth}></Route>
                </Route>
                <Route path="/signIn" component={UnauthenticatedLayout}>
                    <IndexRoute component={SignInPage}></IndexRoute>
                </Route>
                {/*<Route path="/signOut" component={NoMenuLayout}>*/}
                    {/*<IndexRoute component={SignOutPage}></IndexRoute>*/}
                {/*</Route>*/}
            </Router>
        );
    }
}

export default App;
