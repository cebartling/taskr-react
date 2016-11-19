// @flow

import React, {Component} from "react";
// import {Link} from "react-router";
import "./AuthenticatedLayout.css";

export default class AuthenticatedLayout extends Component {

    render() {
        return (
            <div>
                <section id="headerSection">
                    <nav className="pt-navbar pt-dark">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-navbar-heading">Taskr</div>
                        </div>
                        <div className="pt-navbar-group pt-align-right">
                            <button className="pt-button pt-minimal pt-icon-home">Home</button>
                            <span className="pt-navbar-divider"></span>
                            <button className="pt-button pt-minimal pt-icon-user"></button>
                            <button className="pt-button pt-minimal pt-icon-notifications"></button>
                            <button className="pt-button pt-minimal pt-icon-cog"></button>
                        </div>
                    </nav>
                </section>
                <section id="contentSection">
                    {this.props.children}
                </section>
                <section id="footerSection">
                    <div>Pintail Consulting LLC &copy; 2016</div>
                </section>
            </div>
        );
    }
}
