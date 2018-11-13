'use strict';

import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="songs-body">
                    <section className="page-not-found">
                        <center>
                            <h1 className="not-4 ">404</h1>
                            <h1 className="oops-desc">Oops! Page not found</h1>
                            <p>We are sorry but the page you are looking for does not exist.</p>
                            <br />
                            <Link to='/'>Go to Home</Link>
                        </center>
                    </section>
                </div>
            </div>
        );
    }
}
export default NotFound;