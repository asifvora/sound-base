'use strict';

import React, { Component } from "react";
import { Player } from "../player";
import { withRouter } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Player />
        );
    }
}

export default withRouter(Footer);