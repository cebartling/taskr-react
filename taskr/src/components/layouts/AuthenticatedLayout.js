// @flow

import React, {Component} from "react";
// import {Link} from "react-router";
import "./AuthenticatedLayout.css";

export default class AuthenticatedLayout extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <section id="headerSection">
                    <div>
                        <h1>Header</h1>
                    </div>
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
