// @flow
import React, {Component} from "react";
import "./AuthenticatedLayout.css";

export default class AuthenticatedLayout extends Component {

    render() {
        return (
            <div>
                <section id="headerSection">
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
