// @flow
import React, {Component} from "react";
import {Link} from "react-router";
import "./AuthenticatedLayout.css";

export default class AuthenticatedLayout extends Component {

    render() {
        return (
            <div>
                <div className="pos-f-t">
                    <div className="collapse" id="navbar-header">
                        <div className="container bg-inverse p-1">
                            <h3>Collapsed content</h3>
                            <p>Toggleable via the navbar brand.</p>
                        </div>
                    </div>
                    <nav className="navbar navbar-light navbar-static-top bg-faded">
                        <div className="container">
                            <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse"
                                    data-target="#exCollapsingNavbar2" aria-expanded="false"
                                    aria-controls="exCollapsingNavbar2" aria-label="Toggle navigation"></button>
                            <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
                                <Link to="/" className="navbar-brand">Taskr</Link>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/taskBoard"
                                              className="nav-link"
                                              activeClassName="active">Task Board</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about"
                                              className="nav-link"
                                              activeClassName="active">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="container">
                    {this.props.children}
                </div>

                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">Copyright &copy; 2016 Pintail Consulting LLC</span>
                    </div>
                </footer>
            </div>
        );
    }
}
