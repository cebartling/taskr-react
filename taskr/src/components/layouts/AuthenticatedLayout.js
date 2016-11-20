// @flow
import React, {Component} from "react";
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
                                <a className="navbar-brand" href="#">Taskr</a>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Nav item <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Another nav item</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">More nav</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Last link</a>
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
